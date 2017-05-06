import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'photo-details',
    templateUrl: './photodetails.template.html'
})

export class PhotoDetailsComponent implements OnInit, OnDestroy {
id;
subscription;

    constructor(private _route: ActivatedRoute) {


    }


    ngOnInit(): void {
      this.subscription= this._route.params.subscribe(params=>{
            this.id=params["id"];
       } )
    // this.id = this._route.snapshot.params["id"];
    }
    ngOnDestroy(): void {
       this.subscription.unsubscribe();
    }

}