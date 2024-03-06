import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addapartment',
  templateUrl: './addapartment.component.html',
  styleUrls: ['./addapartment.component.scss'],
})
export class AddapartmentComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

 /** createApartment() {
    console.log(this.apartment);
    this.apartmentService.createApartment(this.apartment).subscribe((createdApartment) => {
      console.log('Nuevo apartamento creado:', createdApartment);
      this.apartment = createdApartment;
    })
  } */
}
