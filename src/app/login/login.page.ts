import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage  {
  loginForm = {
    usernameOrEmail: '',
    password: ''
  };
  authenticatedUser: any;

  constructor(private http: HttpClient, private router: Router) {}

  redirectToRegister() {
    this.router.navigate(['register']);
  }

  login() {
    this.http.post<any>('http://localhost:8081/users/login', this.loginForm)
      .subscribe(
        response => {
          this.authenticatedUser = response;
          console.log('Inicio de sesión exitoso:', this.authenticatedUser);
          localStorage.setItem('name', this.authenticatedUser.name);
          localStorage.setItem('id', this.authenticatedUser.id.toString());
          localStorage.setItem('email', this.authenticatedUser.email);
          localStorage.setItem('dni', this.authenticatedUser.dni);
          localStorage.setItem('surname', this.authenticatedUser.surname);
          localStorage.setItem('password', this.authenticatedUser.password);
          localStorage.setItem('apartmentId', this.authenticatedUser.apartment?.id?.toString() ?? 'null');
          
          this.router.navigate(['tabs/tab1']);
        },
        error => {
          console.error('Error en inicio de sesión:', error);
        }
      );
  }
}
