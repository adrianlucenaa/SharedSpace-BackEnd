import { Component } from '@angular/core';

import { IonicModule, ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class Tab1Page {
  username: string | null = null; // Inicializa como null
  showLogin: boolean = false;

  constructor(private router: Router){}
  
  ngOnInit() {
    // Recuperar el nombre de usuario del almacenamiento local
    const storedUsername = localStorage.getItem('username');
    if (storedUsername !== null) {
      this.username = storedUsername;
    }
    console.log(this.username);
  }


  goToMoreInfo() {
    this.router.navigate(['user-info']);
  }


  
  goToTasks() {
    this.router.navigate(['tasks']);
  }
}