import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class User {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<any[]>(
      'https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json'
    );
  }
}
