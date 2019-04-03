import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  private adminuser: {};

  constructor() { }

  ngOnInit() {
  }

  createAdminUser(form: NgForm) {

    this.adminuser = JSON.parse(JSON.stringify(form.value));
  }


  }
