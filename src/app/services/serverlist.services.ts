import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ServerlistServices {

  constructor(private http: HttpClient)  {
  }
}
