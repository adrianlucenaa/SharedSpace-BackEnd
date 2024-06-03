import { Component, inject, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
  providers: [UserService],
})
export class UserInfoComponent implements OnInit {
  username: string | null = null; // Inicializa como null
  surname: string | null = null;
  id: number | null = null;
  email: string | null = null;
  dni: string | null = null;
  showLogin: boolean = false;
  items: string[] = [];
  itemCount: number = 20;

  constructor(router: Router, private modalController: ModalController,
    private userService: UserService, private http: HttpClient) {
      
     }

     ngOnInit() {
      // Recuperar el nombre de usuario del almacenamiento local
      const storedUsername = localStorage.getItem('username');
      const storedSurname = localStorage.getItem('surname');
      const storedId = localStorage.getItem('id');
      const storedEmail = localStorage.getItem('email');
      const storedDni = localStorage.getItem('dni');
    
      // Verifica si las claves existen en localStorage
      console.log('storedUsername:', storedUsername);
      console.log('storedSurname:', storedSurname);
      console.log('storedId:', storedId);
      console.log('storedEmail:', storedEmail);
      console.log('storedDni:', storedDni);
    
      this.username = storedUsername ? storedUsername : null;
      this.surname = storedSurname ? storedSurname : null;
      this.id = storedId ? parseInt(storedId, 10) : null;
      this.email = storedEmail ? storedEmail : null;
      this.dni = storedDni ? storedDni : null;
    
      console.log(this.username, this.surname, this.id, this.email, this.dni);
      this.loadInitialItems();
    }
    
    

    loadInitialItems() {
      for (let i = 0; i < this.itemCount; i++) {
        this.items.push(`Item ${i + 1}`);
      }
    }

} 