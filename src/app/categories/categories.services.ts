import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoriesModel } from './categories.model';


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


  deleteCategories(id: string) {
    return this.http.delete('/api/catalog/delete?id=' + id);
  }

  editCategories(category: CategoriesModel) {
    return this.http.post('/api/catalog/edit', category);
  }

}
