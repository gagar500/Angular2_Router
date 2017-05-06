import {Component} from '@angular/core';
import {AuthService} from './auth.service';

@Component({
    selector:'home',
    templateUrl:'./home.template.html'
})

export class HomeComponent{
    constructor(private _auth:AuthService){
        this._auth.login("username","password");
    }
}
