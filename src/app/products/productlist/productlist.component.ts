import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { SERVER_API_URL_PRODUCT_SERVICE} from '../../common/services.config';
import {ProductsModel} from './products.model';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  constructor(private http: HttpClient) { }
  products: ProductsModel[] = [];

  ngOnInit() {

    this.getOrders().subscribe(
      (response) => {
        this.products = JSON.parse(JSON.stringify(response));
        console.log('Data' + this.products);
      },
      (error) => {
        console.log('Error getting orders ');
      }
    );
  }

  getOrders() {
    return this.http.get(SERVER_API_URL_PRODUCT_SERVICE + '/products');
  }

}
