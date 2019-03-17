import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ServicesModel } from './services.model';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  servers = ['Product Service' , 'Order Service' , 'Cart Service'];
  services: ServicesModel[] = [
    new ServicesModel('Cache Service' , 'UP', 'localhost', '21901')
  ];

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.httpClient.get('http://localhost:21909');
  }

  getStatusColor() {
    return 'green';
  }

  getStatus() {
    return 'UP';
  }
}
