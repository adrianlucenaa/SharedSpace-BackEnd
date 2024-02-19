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
  showLogin: boolean = false;

  constructor(private router: Router){}
  
  goToTasks() {
    this.router.navigate(['tasks']);
  }
}