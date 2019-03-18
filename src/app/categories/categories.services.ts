import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CategoriesServices {

  categories = {}

constructor(private http: HttpClient)  {}

  addCategories(categoryName: string, categoryCode: string) {

    this.categories = {
        name: categoryName,
        code: categoryCode
      };

    return this.http.post('/api/catalog/add', this.categories);

  }

  getCategories() {

    return this.http.get('/api/catalog/all');

  }

}
