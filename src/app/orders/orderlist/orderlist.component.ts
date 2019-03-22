import { Component, OnInit } from '@angular/core';
import { SERVER_API_URL_ORDER_SERVICE } from '../../common/services.config';
import {HttpClient} from '@angular/common/http';
import {CategoriesModel} from '../../categories/categories.model';
import {OrdersModel} from './orders.model';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {

  constructor(private http: HttpClient) { }
  orders: OrdersModel[] = [];

  ngOnInit() {

    this.getOrders().subscribe(
      (response) => {
        this.orders = JSON.parse(JSON.stringify(response));
        console.log('Data' + this.orders);
      },
      (error) => {
        console.log('Error getting orders ');
      }
    );
  }

  getOrders() {
    return this.http.get(SERVER_API_URL_ORDER_SERVICE + '/orders');
  }

}
