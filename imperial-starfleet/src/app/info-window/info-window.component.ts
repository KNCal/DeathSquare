import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
// import 'rxjs/add/operator/toPromise';
import { ActivatedRoute } from '@angular/router';
import { InfoService } from './info.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime'; //don't make a request but wait a second.  PReventing from getting but every second.
// import { distinctUntilChanged } from 'rxjs/operators'; 


@Component({
  selector: 'app-info-window',
  templateUrl: './info-window.component.html',
  styleUrls: ['./info-window.component.css']
})
export class InfoWindowComponent implements OnInit {

  dataBanks: any;
  infoSubject = new Subject(); //add this property
  
  constructor(

    private http: Http,
    private route: ActivatedRoute,
    private infoService: InfoService

  ) { }

  findTurret(turretid){
    this.infoSubject
    .debounceTime(1000)
    .subscribe(turretid=>
    this.infoService.createAPI(turretid)
    .subscribe(response => this.dataBanks = response.json()));
    this.infoSubject.next(turretid);
  }

  ngOnInit() {
    this.route.params.forEach( param => this.findTurret(param.id) );
  }

}