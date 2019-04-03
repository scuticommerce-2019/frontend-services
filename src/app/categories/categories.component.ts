import { Component, OnInit } from '@angular/core';
import { CategoriesServices} from './categories.services';
import { CategoriesModel } from './categories.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categoryCode = '';
  categoryName = '';
  toplevel = 0;
  successMessage = false;
  categories: CategoriesModel[] = [];

  constructor(private categoryService: CategoriesServices, private router: Router) { }

  ngOnInit() {
  }

  addCategory() {
    this.successMessage = true;

    this.categoryService.addCategories(this.categoryCode, this.categoryName, this.toplevel).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/admin/categorieslist']);
      },
                (error) => console.log(error)
    );
  }


}
