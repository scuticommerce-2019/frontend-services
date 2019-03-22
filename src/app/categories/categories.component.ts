import { Component, OnInit } from '@angular/core';
import { CategoriesServices} from './categories.services';
import { CategoriesModel } from './categories.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categoryCode = '';
  categoryName = '';
  categoryId = '';
  successMessage = false;
  categories: CategoriesModel[] = [];

  constructor(
    private categoryService: CategoriesServices
  ) { }

  ngOnInit() {
    this.getCategories();
  }

  addCategory() {
    this.successMessage = true;
    this.categoryService.addCategories(this.categoryCode, this.categoryName).subscribe(
      (response) => console.log(response),
                (error) => console.log(error)
    );
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(
      (response: Response) => {
        const data = response;
        this.categories = JSON.parse(JSON.stringify(data));
      },
      (error) => console.log(error)
    );
  }

  delete(categoryId: string) {
    console.log('delete ' + categoryId);
    this.categoryService.deleteCategories(categoryId).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
    this.getCategories();
  }

  edit() {
    console.log('edit');
  }
}
