import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {SERVER_API_URL_PRODUCT_SERVICE} from '../../common/services.config';

@Injectable()
export class ProductsServices {

  categories = {};

  constructor(private http: HttpClient)  {

  }

  getProductsInCategory(code: string) {
    console.log('Get products for category ' + code );
    return this.http.get(SERVER_API_URL_PRODUCT_SERVICE + '/productInCategory' + '?categoryList=' + code);
  }

  getProductDetail(code: string) {
    console.log('Get product detail ' + code );
    return this.http.get(SERVER_API_URL_PRODUCT_SERVICE + '/product' + '?code=' + code);
  }

  getProductsBySkuList(skuCodes: string) {
    console.log('Get products by sku list ' + skuCodes );
    return this.http.get(SERVER_API_URL_PRODUCT_SERVICE + '/skus?skus=' + skuCodes);
  }

}
