import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  URL = 'http://localhost:8080/api/about/1';

  constructor(private http: HttpClient) {}

  getAbout() {
    return this.http.get<any>(this.URL);
  }

  updateAbout(about: any) {
    return this.http.put<any>(this.URL, about);
  }
}
