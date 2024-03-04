import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
  providers: [UserService]
})
export class RegisterComponent {

  UserService = inject(UserService);
  userVisible : boolean = false;
  user:any;


  constructor(private router: Router) { }
 
  redirectToLogin() {
    this.router.navigate(['login']); // Redirige a la página de inicio de sesión
  }
  saveChanges() {
    this.UserService.createUser(this.user).subscribe((createduser) => {
     console.log('Nuevo usuario creado:', createduser);
     this.user = createduser; 
    });
    /**this.UserService.updateUser(this.user).subscribe((updateduser) => {
      console.log('Usuario actualizado:', updateduser);
      this.user = updateduser;
    });**/
    
  }
  

}
