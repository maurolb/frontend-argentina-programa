import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  // aquí puedes agregar la lógica para enviar los datos de inicio de sesión al servidor
  user = {
    email: '',
    password: '',
  };

  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {}

  login() {
    this.authService.login(this.user).subscribe(
      (res) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/portfolio']);
      },
      (err) => console.log(err)
    );
  }
}
// {
//   "email": "admin@dev.com",
//   "password": "admin"
// }
