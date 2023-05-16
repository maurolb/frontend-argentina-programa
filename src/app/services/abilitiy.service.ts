import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AbilitiyService {
  private URL = 'http://localhost:8080/api/ability';

  constructor(private http: HttpClient) {}

  getAbilities() {
    return this.http.get<any>(this.URL);
  }

  getAbility(id: any) {
    return this.http.get<any>(`${this.URL}/${id}`);
  }

  postAbility(ability: any) {
    return this.http.post<any>(this.URL, ability);
  }

  updateAbility(id: any, ability: any) {
    return this.http.put<any>(`${this.URL}/${id}`, ability);
  }

  deleteAbility(id: any) {
    return this.http.delete<any>(`${this.URL}/${id}`);
  }
}
