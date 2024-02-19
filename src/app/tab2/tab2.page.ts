import { Component, inject } from '@angular/core';
import { ApartmentComponent } from '../apartment/apartment.component';
import { IonicModule } from '@ionic/angular';
import { ApartmentService } from '../services/apartment.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule,ApartmentComponent],
})
export class Tab2Page  {

  apartmentVisible: boolean = false;
  apartmentService = inject(ApartmentService);
  apartment:any;

  

  navigateToApartment() {
    this.apartmentVisible = !this.apartmentVisible;
  }
  ngOnInit(): void {
   this.apartmentService.getApartmentByUser(13).subscribe(d=>{
    console.log(d)
      this.apartment  = d
    })  //get user id
  }

  constructor() {}
  
}
