import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule ]
})
export class RegisterComponent {


  constructor(private router: Router) { }
 
  redirectToLogin() {
    this.router.navigate(['login']); // Redirige a la página de inicio de sesión
  }
  

}
