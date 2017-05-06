import { Router, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { PhotosComponent } from './photo/photos.component';
import { MessagesComponent } from './message/messages.component';
import { NotFoundComponent } from './not-found.component';

export const routing = RouterModule.forRoot([
    { path: '', component: HomeComponent },
    { path: 'messages', component: MessagesComponent },
    { path: 'photos', component: PhotosComponent },
    { path: '**', component: NotFoundComponent },
]);
