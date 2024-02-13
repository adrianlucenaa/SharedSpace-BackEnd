import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonItem, IonList, IonCard } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { ApartmentComponent } from '../apartment/apartment.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonCard, IonList, IonItem, IonButton, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent,ApartmentComponent]
})
export class Tab2Page {

  apartmentVisible: boolean = false;

  navigateToApartment() {
    this.apartmentVisible = !this.apartmentVisible;
  }

  constructor() {}

}
