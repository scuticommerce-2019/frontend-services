import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SERVER_API_URL_CUSTOMER_SERVICE} from '../../common/services.config';
import {CustomersModel} from './customers.model';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {


  constructor(private http: HttpClient) { }
  customers: CustomersModel[] = [];

  ngOnInit() {

    this.getOrders().subscribe(
      (response) => {
        this.customers = JSON.parse(JSON.stringify(response));
        console.log('Data' + this.customers);
      },
      (error) => {
        console.log('Error getting orders ');
      }
    );
  }

  getOrders() {
    return this.http.get(SERVER_API_URL_CUSTOMER_SERVICE + '/customers');
  }


}
