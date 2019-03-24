import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {SERVER_API_URL_CART_SERVICE} from '../common/services.config';

@Injectable()
export class CartServices {

  constructor(private http: HttpClient)  {

  }

  getCart(customerId: string) {
    console.log('Get cart for customer ' + customerId );
    // hard code for customer01
    return this.http.get(SERVER_API_URL_CART_SERVICE + '/cart?customerId=' + 'customer01');
  }

}
