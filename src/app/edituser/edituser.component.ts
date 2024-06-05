import { Component, inject, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../model/user.model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
})
export class EdituserComponent implements OnInit {
  userService = inject(UserService);
  userVisible: boolean = false;
  user: User = new User();

  constructor(private router: Router, private modalController: ModalController) {}

  ngOnInit() {
    this.loadUserFromLocalStorage();
  }

  loadUserFromLocalStorage() {
    this.user.id = parseInt(localStorage.getItem('id') || '0', 10);
    this.user.email = localStorage.getItem('email') || '';
    this.user.name = localStorage.getItem('name') || '';
    this.user.surname = localStorage.getItem('surname') || '';
    this.user.password = localStorage.getItem('password') || '';
    this.user.dni = localStorage.getItem('dni') || '';

  }

  async goBack() {
    await this.modalController.dismiss();
  }

  updateUser() {
    this.userService.CreateOrUpdateUser(this.user).subscribe((updatedUser) => {
      console.log('Usuario actualizado:', updatedUser);
      this.user = updatedUser;
      this.updateLocalStorage();
    });
  }

  updateLocalStorage() {
    if (this.user.email) {
      localStorage.setItem('email', this.user.email);
      
    }
    if (this.user.password) {
      localStorage.setItem('password', this.user.password);
    }
  }
}
