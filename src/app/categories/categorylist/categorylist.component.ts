import { Component, OnInit } from '@angular/core';
import {CategoriesModel} from '../categories.model';
import {CategoriesServices} from '../categories.services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.css']
})
export class CategorylistComponent implements OnInit {

  categoryCode = '';
  categoryName = '';
  toplevel = 0;
  categoryId = '';
  successMessage = false;
  categories: CategoriesModel[] = [];

  constructor(private categoryService: CategoriesServices, private router: Router) { }

  ngOnInit() {
    this. getCategories();
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
    this.router.navigate(['/admin/categorieslist']);
  }

  edit() {
    console.log('edit');
  }

}
