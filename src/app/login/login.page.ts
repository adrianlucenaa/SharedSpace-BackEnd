import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage  {

  constructor(private router: Router) {}

  redirectToRegister() {
    this.router.navigate(['/register']); // Redirige a la página de registro
  }

  redirectToTab1() {
    this.router.navigate(['tabs']);
  }

  

}
