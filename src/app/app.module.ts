import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';
import { MessagesComponent } from './message/messages.component';
import { PhotosComponent } from './photo/photos.component';
import { PhotoDetailsComponent } from './photo/photodetails.component';
import { routing } from './app.routing';
import { photoRouting } from './photo/photos.routing';
@NgModule({
  declarations: [
    AppComponent, HomeComponent, NotFoundComponent, MessagesComponent, PhotosComponent, PhotoDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    photoRouting,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
