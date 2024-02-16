import { Component } from '@angular/core';
import { ApartmentComponent } from '../apartment/apartment.component';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule,ApartmentComponent]
})
export class Tab2Page {

  apartmentVisible: boolean = false;

  navigateToApartment() {
    this.apartmentVisible = !this.apartmentVisible;
  }

  constructor() {}

}
