import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SERVER_API_URL_SEARCH_SERVICE} from '../common/services.config';
import {SearchModel} from './search.model';

@Component({
  selector: 'app-searchresultlist',
  templateUrl: './searchresultlist.component.html',
  styleUrls: ['./searchresultlist.component.css']
})
export class SearchresultlistComponent implements OnInit {

  constructor(private http: HttpClient) { }

  searchData: SearchModel;
  searchtext = '';
  searchResultCount;

  ngOnInit() {
  }

  search() {
    this.searchText().subscribe(
      (response) => {
        this.searchData = JSON.parse(JSON.stringify(response));
        this.searchResultCount = this.searchData.count;
        console.log('Data' + this.searchData);
      },
      (error) => {
        console.log('Error getting search data ');
      }
    );

  }
  searchText() {
    return this.http.get(SERVER_API_URL_SEARCH_SERVICE + '/search?index=product&field=title&text=' + this.searchtext);
  }

}
