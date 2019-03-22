import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoriesModel } from './categories.model';
import { SERVER_API_URL_CATALOG_SERVICE} from '../common/services.config';

@Injectable()
export class CategoriesServices {

  categories = {};

constructor(private http: HttpClient)  {}

  addCategories(categoryName: string, categoryCode: string) {

    this.categories = {
        name: categoryName,
        code: categoryCode
      };

    return this.http.post(SERVER_API_URL_CATALOG_SERVICE + '/api/catalog/add', this.categories);

  }

  getCategories() {
    return this.http.get(SERVER_API_URL_CATALOG_SERVICE + '/api/catalog/all');
  }


  deleteCategories(id: string) {
    return this.http.delete(SERVER_API_URL_CATALOG_SERVICE + '/api/catalog/delete?id=' + id);
  }

  editCategories(category: CategoriesModel) {
    return this.http.post(SERVER_API_URL_CATALOG_SERVICE + '/api/catalog/edit', category);
  }

}
