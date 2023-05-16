import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  URL = 'http://localhost:8080/api/home/1';

  constructor(private http: HttpClient) {}

  getHome() {
    return this.http.get<any>(this.URL);
  }

  updateHome(home: any) {
    return this.http.put<any>(this.URL, home);
  }
}
