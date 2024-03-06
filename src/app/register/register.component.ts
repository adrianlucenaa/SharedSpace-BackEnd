import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { UserService } from '../services/user.service';
import { User } from '../model/user.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule],
  providers: [UserService]
})
export class RegisterComponent {

 
  userVisible : boolean = false;
  user: User = {};

  ngOnInit(): void {
    // Asignar un ID por defecto
    this.user.id = 0; // Puedes asignar cualquier valor que desees como ID por defecto
  }


  constructor(private router: Router, private UserService:UserService) { }
 
  redirectToLogin() {
    this.router.navigate(['login']); // Redirige a la página de inicio de sesión
  }
  registerUser() {
  
     console.log(this.user);
    this.UserService.registerUser(this.user).subscribe((registerUser) => {
      console.log('Nuevo usuario creado:', registerUser);
     this.user = registerUser; 
    });
    
  }
}
