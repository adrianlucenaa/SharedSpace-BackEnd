import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
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

  constructor(private http: HttpClient,private router: Router, private UserService:UserService) {}

  redirectToRegister() {
    this.router.navigate(['register']); // Redirige a la página de registro
  }

  
  login() {

    this.http.post<any>('http://localhost:8081/users/login', this.loginForm)
      .subscribe(
        response => {
          // Si el inicio de sesión fue exitoso, response contendrá el usuario autenticado
          this.authenticatedUser = response;
          console.log('Inicio de sesión exitoso:', this.authenticatedUser);
          localStorage.setItem('username', this.authenticatedUser.name);
          localStorage.setItem('id', this.authenticatedUser.id.toString());
          localStorage.setItem('email', this.authenticatedUser.email);
          localStorage.setItem('dni', this.authenticatedUser.dni);
          localStorage.setItem('surname', this.authenticatedUser.surname);

          this.router.navigate(['tabs/tab1']);

          // Aquí puedes redirigir al usuario a otra página o realizar otras acciones necesarias
        },
        error => {
          // Si hubo un error durante el inicio de sesión
          console.error('Error en inicio de sesión:', error);
          // Aquí puedes mostrar un mensaje de error al usuario o realizar otras acciones necesarias
        }
      );
  }

  

}
