import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AdminuserServices} from './adminuser.services';
import {Router} from '@angular/router';
import {AdminuserModel} from './adminuser.model';

@Component({
  selector: 'app-adminusers',
  templateUrl: './adminusers.component.html',
  styleUrls: ['./adminusers.component.css']
})
export class AdminusersComponent implements OnInit {

  private adminuser: AdminuserModel;

  constructor(private adminService: AdminuserServices, private router: Router) { }

  ngOnInit() {
  }

  createAdminUser(form: NgForm) {

    console.log(' Json ' + JSON.stringify(form.value));

    this.adminuser = JSON.parse(JSON.stringify(form.value));

    const roleArray = this.adminuser.roles.toString().split(',');
    this.adminuser.roles = roleArray;

    this.adminService.createAdminUser(this.adminuser).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/admin/adminuserslist']);
      },
      (error) => console.log(error)
    );
  }



}
