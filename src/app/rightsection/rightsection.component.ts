import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rightsection',
  templateUrl: './rightsection.component.html',
  styleUrls: ['./rightsection.component.css']
})
export class RightsectionComponent implements OnInit {

  categoryCode = '';
  categoryName = '';
  successMessage = false;
  constructor() { }

  ngOnInit() {
  }

  addCategory() {
    this.successMessage = true;
  }
}
