import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { IonInput, IonItem, IonicModule, ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from '../register/register.component';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class Tab1Page {
  showLogin: boolean = false;

  constructor(){}
  
  
}