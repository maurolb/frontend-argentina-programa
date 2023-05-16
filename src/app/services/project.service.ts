import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private URL = 'http://localhost:8080/api/project';

  constructor(private http: HttpClient) {}

  getProjects() {
    return this.http.get<any>(this.URL);
  }

  getProject(id: any) {
    return this.http.get<any>(`${this.URL}/${id}`);
  }

  postProject(project: any) {
    return this.http.post<any>(this.URL, project);
  }

  updateProject(id: any, project: any) {
    return this.http.put<any>(`${this.URL}/${id}`, project);
  }

  deleteProject(id: any) {
    return this.http.delete<any>(`${this.URL}/${id}`);
  }
}
