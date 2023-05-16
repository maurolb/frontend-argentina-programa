import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  home: any;
  editMode = false;

  constructor(
    private homeService: HomeService,
    public authService: AuthServiceService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.getHome();
  }

  downloadPDF() {
    const pdfUrl = 'assets/cv-prueba.pdf';
    this.http.get(pdfUrl, { responseType: 'blob' }).subscribe((response) => {
      const blob = new Blob([response], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'mi-cv.pdf';
      link.click();
      window.URL.revokeObjectURL(url);
    });
  }

  getHome() {
    this.homeService.getHome().subscribe(
      (res) => {
        this.home = res;
      },
      (err) => console.log(err)
    );
  }

  save() {
    this.homeService.updateHome(this.home).subscribe(
      (res) => {
        this.home = res;
      },
      (err) => console.log(err)
    );
    this.editModeToggle();
  }

  editModeToggle() {
    this.editMode = !this.editMode;
  }

  // por hacer
  cambiarImg() {}
}
