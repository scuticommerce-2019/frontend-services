import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-storefooter',
  templateUrl: './storefooter.component.html',
  styleUrls: ['./storefooter.component.css']
})
export class StorefooterComponent implements OnInit {


  date = new Date();
  footer  = 'copyright ©  ' +  this.date.getFullYear();

  constructor() { }

  ngOnInit() {
  }

}
