import { Router, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { MessagesComponent } from './message/messages.component';
import { NotFoundComponent } from './not-found.component';
import { AuthGuard } from './app-guard.service';
import { PreventUnsavedChangesGuard } from './prevent-unsaved-changes-guard.service';

export const routing = RouterModule.forRoot([
    { path: '', component: HomeComponent },
    {
        path: 'messages', component: MessagesComponent, canActivate: [AuthGuard]
        , canDeactivate: [PreventUnsavedChangesGuard]
    },
    { path: '**', component: NotFoundComponent },
]);
