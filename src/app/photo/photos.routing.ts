import { Router, RouterModule } from '@angular/router';


import { PhotosComponent } from './photos.component';
import {PhotoDetailsComponent} from './photodetails.component';

export const photoRouting = RouterModule.forChild([
    { path: 'photos/:id', component: PhotoDetailsComponent },
    { path: 'photos', component: PhotosComponent },
]);
