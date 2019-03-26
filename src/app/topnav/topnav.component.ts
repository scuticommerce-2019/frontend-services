import {Component, Injectable, OnInit} from '@angular/core';
import {CategoriesModel} from '../categories/categories.model';
import {CategoriesServices} from '../categories/categories.services';
import {Observable, of} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, map, switchMap, tap} from 'rxjs/operators';
import {SearchServices} from '../searchresultlist/search.services';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {
  model: any;
  searching = false;
  searchFailed = false;
  topcategories: CategoriesModel[] = [];

  constructor(private categoryService: CategoriesServices, private searchService: SearchServices) {
  }

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

  formatter = (result: any) => {
    return JSON.parse(JSON.stringify(result)).title;
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.searchService.getAutoSuggest(term).pipe(
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
      tap(() => this.searching = false)
    )

}
