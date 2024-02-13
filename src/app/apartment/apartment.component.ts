import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.scss'],
  standalone:true,
  imports:[IonicModule,CommonModule,FormsModule,ApartmentComponent]
})
export class ApartmentComponent  implements OnInit {


close() {
throw new Error('Method not implemented.');
}
saveChanges() {
throw new Error('Method not implemented.');
}

  apartment:any;

  constructor(private router: Router) { }

  ngOnInit() {}

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  navigateToApartment() {
    this.apartmentVisible = true;
  }

  apartmentVisible: boolean = false;

}
