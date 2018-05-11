import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';



@Component({
  selector: 'app-turret',
  templateUrl: './turret.component.html',
  styleUrls: ['./turret.component.css']
})


export class TurretComponent implements OnInit {

  @Input('turretNumber')
  turretNumber: number;
  
  constructor() { }

  ngOnInit() {
  }

}
