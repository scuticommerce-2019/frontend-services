import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ServicesModel} from './services.model';

import {
  SERVER_API_URL_CART_SERVICE,
  SERVER_API_URL_CATALOG_SERVICE,
  SERVER_API_URL_CONFIG_SERVICE,
  SERVER_API_URL_CUSTOMER_SERVICE,
  SERVER_API_URL_EMAIL_SERVICE,
  SERVER_API_URL_INTEGRATION_SERVICE,
  SERVER_API_URL_INVENTORY_SERVICE,
  SERVER_API_URL_MARKETING_SERVICE,
  SERVER_API_URL_MESSAGING_SERVICE,
  SERVER_API_URL_ORDER_SERVICE,
  SERVER_API_URL_PAYMENT_SERVICE,
  SERVER_API_URL_PRODUCT_SERVICE,
  SERVER_API_URL_RECOMMENDATION_SERVICE,
  SERVER_API_URL_REPORT_SERVICE,
  SERVER_API_URL_SEARCH_SERVICE,
  SERVER_API_URL_SHIPPING_SERVICE
} from '../common/services.config';

@Injectable()
export class ServerlistServices {

  services: ServicesModel[] = [];
  upservices = [];

  constructor(private httpClient: HttpClient)  {
  }

  servicesURL = [SERVER_API_URL_CART_SERVICE,
    SERVER_API_URL_CATALOG_SERVICE,
    SERVER_API_URL_CONFIG_SERVICE,
    SERVER_API_URL_CUSTOMER_SERVICE,
    SERVER_API_URL_EMAIL_SERVICE,
    SERVER_API_URL_INTEGRATION_SERVICE,
    SERVER_API_URL_INVENTORY_SERVICE,
    SERVER_API_URL_MARKETING_SERVICE,
    SERVER_API_URL_MESSAGING_SERVICE,
    SERVER_API_URL_ORDER_SERVICE,
    SERVER_API_URL_PAYMENT_SERVICE,
    SERVER_API_URL_PRODUCT_SERVICE,
    SERVER_API_URL_RECOMMENDATION_SERVICE,
    SERVER_API_URL_REPORT_SERVICE,
    SERVER_API_URL_SEARCH_SERVICE,
    SERVER_API_URL_SHIPPING_SERVICE
  ];

  getServices() {

    for(let i = 0; i < this.servicesURL.length; i++) {

     const url = this.servicesURL[i] + '/status';
     const service = this.servicesURL[i].substring(this.servicesURL[i].indexOf('/api') + 5 , this.servicesURL[i].length
      );

     this.httpClient.get(url).subscribe(

       (response) => {
         this.services.push(
           new ServicesModel(service.toUpperCase() , 'UP', this.servicesURL[i], ''));
       },
      (error) => {
        this.services.push(
          new ServicesModel(service.toUpperCase() , 'DOWN', this.servicesURL[i], ''));
      }

     );

    }
    return this.services;
  }
}
