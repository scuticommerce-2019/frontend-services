import { Component, OnInit } from '@angular/core';
import {CategoriesModel} from '../categories/categories.model';
import {CategoriesServices} from '../categories/categories.services';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {

  topcategories: CategoriesModel[] = [];

  constructor(
    private categoryService: CategoriesServices
  ) { }

  ngOnInit() {
    this.getTopCategories();
  }

  getTopCategories() {
    this.categoryService.getTopCategories().subscribe(
      (response: Response) => {
        const data = response;
        this.topcategories = JSON.parse(JSON.stringify(data));
      },
      (error) => console.log(error)
    );
  }
}
