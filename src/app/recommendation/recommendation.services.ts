import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {SERVER_API_URL_RECOMMENDATION_SERVICE} from '../common/services.config';

@Injectable()
export class RecommendationServices {

  categories = {};

constructor(private http: HttpClient)  {}

  getRecommendation() {
    return this.http.get(SERVER_API_URL_RECOMMENDATION_SERVICE + '/recommend?zone=detail');
  }

}
