import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class Salsicha {
  constructor(private http: HttpClient) { }

  // getShows() {
  //    return this.http.get('assets/shows.json');
  // }
}
