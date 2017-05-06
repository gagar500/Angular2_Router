import {Component} from '@angular/core';
import {FormComponent} from '../prevent-unsaved-changes-guard.service';
import { FormGroup } from "@angular/forms";

@Component({
    selector:'messages',
    templateUrl:'./messages.template.html'
})

export class MessagesComponent implements FormComponent{
    
    hasUnsavedChanges(): Boolean {
       return true;
    }

}