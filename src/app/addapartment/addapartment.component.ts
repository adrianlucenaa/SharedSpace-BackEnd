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
  

  apartment: Apartment = {
    address: '',
    numberowner: 0, 
    nameowner: '',
    owneremail: '',
    name: ''
  };

  /*ngOnInit(): void {
    // Asignar un ID por defecto
   this.apartment.id = 0; //Puedes asignar cualquier valor que desees como ID por defecto
  }*/
  ngOnInit() {
    // // Recuperar los parametros de apartamento del almacenamiento local
    // const storedAddress = localStorage.getItem('address');
    // const storedNumberowner = localStorage.getItem('numberowner');
    // const storedNameowner = localStorage.getItem('nameowner');
    // const storedOwneremail = localStorage.getItem('owneremail');
    // const storedName = localStorage.getItem('name');

    // // Verifica si las claves existen en localStorage
    // console.log('storedAddress:', storedAddress);
    // console.log('storedNumberowner:', storedNumberowner);
    // console.log('storedNameowner:', storedNameowner);
    // console.log('storedOwneremail:', storedOwneremail);
    // console.log('storedName:', storedName);

 

    // console.log(this.apartment);


  }

  constructor(private apartmentService: ApartmentService, private router: Router) { }

 //Logica para crear un apartamento
  createApartment() {
    this.apartmentService.createApartment(this.apartment).subscribe((createdApartment) => {
      console.log('Nuevo apartamento creado:', createdApartment);
      this.apartment = createdApartment;
    });
    this.router.navigate(['/tabs/tab2']);
  
  }

}
