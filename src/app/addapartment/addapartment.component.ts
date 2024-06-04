import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApartmentService } from '../services/apartment.service';
import { Apartment } from '../model/apartment.model';

@Component({
  selector: 'app-addapartment',
  templateUrl: './addapartment.component.html',
  styleUrls: ['./addapartment.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule],
  providers: [ApartmentService]
})
export class AddapartmentComponent  {

  apartmentVisible: boolean = false;
  apartment: Apartment = {};

  /*ngOnInit(): void {
    // Asignar un ID por defecto
   this.apartment.id = 0; //Puedes asignar cualquier valor que desees como ID por defecto
  }*/

  constructor(private apartmentService: ApartmentService, private router: Router) { }

 createApartment() {
  console.log(this.apartment);
    this.apartmentService.createApartment(this.apartment).subscribe((createdApartment) => {
      console.log('Nuevo apartamento creado:', createdApartment);
      this.apartment = createdApartment;
    })
  } 
  
}
