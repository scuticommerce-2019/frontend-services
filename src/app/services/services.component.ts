import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ServicesModel } from './services.model';
import { ServerlistServices } from './serverlist.services';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  services: ServicesModel[] = [];


  constructor(private httpClient: HttpClient, private serverlistService: ServerlistServices) {
  }

  getServicesStatus() {
    console.log('Get status of services ');
    this.services.length = 0;
    this.services = this.serverlistService.getServices();

  }
  ngOnInit() {
    this.services = this.serverlistService.getServices();
  }

  getUpStatus() {
    return 'green';
  }

  getDownStatus() {
    return 'red';
  }
}
