import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {SERVER_API_URL_CUSTOMER_SERVICE, SERVER_API_URL_PRODUCT_SERVICE} from '../common/services.config';
import {AdminuserModel} from './adminuser.model';

@Injectable()
export class AdminuserServices {

  constructor(private http: HttpClient)  {

  }

  getAdminUsers() {
    return this.http.get(SERVER_API_URL_CUSTOMER_SERVICE + '/adminusers');
  }

  createAdminUser(adminuser: AdminuserModel) {
    console.log(' adminuser detail ' + adminuser );
    return this.http.post(SERVER_API_URL_CUSTOMER_SERVICE + '/createadmin', adminuser);
  }


}
