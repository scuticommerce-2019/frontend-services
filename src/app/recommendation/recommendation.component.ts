import { Component, OnInit } from '@angular/core';
import {RecommendationServices} from './recommendation.services';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {

  recommendation = [];
  constructor( private recommendationService: RecommendationServices) { }

  ngOnInit() {
    this.getRecommendations();
  }

  getRecommendations() {

    this.recommendationService.getRecommendation().subscribe(
      (response) => {
        console.log('recomendation ');
        this.recommendation = JSON.parse(JSON.stringify(response)).items;

      },
      (error) => {
        console.log('error getting recommendation ');
      }
    );
  }
}
