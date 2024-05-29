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
      const storedsurname = localStorage.getItem('surname');
      const storedid = localStorage.getItem('id');
      const storedemail = localStorage.getItem('email');
      const storeddni = localStorage.getItem('dni');
      if (storedUsername !== null) {
        this.username = storedUsername;
        this.surname = storedsurname;
        this.id = storedid ? parseInt(storedid) : null;
        this.email = storedemail;
        this.dni = storeddni;
      }
      console.log(this.username, this.surname, this.id, this.email, this.dni);
      this.loadInitialItems();
    }
    

    loadInitialItems() {
      for (let i = 0; i < this.itemCount; i++) {
        this.items.push(`Item ${i + 1}`);
      }
    }

} 