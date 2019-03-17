import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.httpClient.get('http://localhost:21909');
  }

}
