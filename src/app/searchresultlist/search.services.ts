import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVER_API_URL_SEARCH_SERVICE} from '../common/services.config';

@Injectable()
export class SearchServices {

  categories = {};

constructor(private http: HttpClient)  {}

  getAutoSuggest(term: string) {
    console.log('Search for' + term);
    return this.http.get(SERVER_API_URL_SEARCH_SERVICE + '/autosearch?index=product&field=title&text=' + term);
  }

}
