import { Component, OnInit } from '@angular/core';
import {AdminuserServices} from '../adminuser.services';
import {ProductsModel} from '../../products/productlist/products.model';
import {AdminuserModel} from '../adminuser.model';

@Component({
  selector: 'app-adminuserlist',
  templateUrl: './adminuserlist.component.html',
  styleUrls: ['./adminuserlist.component.css']
})
export class AdminuserlistComponent implements OnInit {

  constructor(private adminUserService: AdminuserServices) { }

  adminusers: AdminuserModel[] = [];


  ngOnInit() {

    this.adminUserService.getAdminUsers().subscribe(
      (response) => {
        this.adminusers = JSON.parse(JSON.stringify(response));
        console.log('Data' + this.adminusers);
      },
      (error) => {
        console.log('Error getting orders ');
      }
    );
  }
}
