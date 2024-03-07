import { Component, inject } from '@angular/core';
import { ApartmentComponent } from '../apartment/apartment.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ApartmentService } from '../services/apartment.service';
import { Router } from '@angular/router'; 
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule,ApartmentComponent, CommonModule],
})
export class Tab2Page  {

  apartmentVisible: boolean = false;
  showButtons: boolean = false; // Variable para controlar la visibilidad de los botones
  apartment: any;

  constructor(private router: Router, private apartmentService: ApartmentService) {}

  ngOnInit(): void {
    console.log(localStorage.getItem('id'));
    this.apartmentService.getApartmentByUser(localStorage.getItem('id')).pipe(
      catchError(error => {
        // Manejar el error aquí, por ejemplo:
        return of(null); // Devolver un observable con un valor nulo para que el flujo continúe
      })
    ).subscribe(apartment => {
      if (apartment) {
        this.apartment = apartment;
        this.apartmentVisible = true;
        this.showButtons = false;
      } else {
        // Aquí puedes manejar el caso en que el usuario no tenga un apartamento asignado
        // Puedes mostrar un mensaje o botones para crear o buscar apartamentos
        console.log("El usuario no tiene un apartamento asignado.");
        this.showButtons = true;    
      }
    });
  }
//Boton para crear apartamento  
goToCreateApartment() {
  this.router.navigate(['addapartment']);
}



//Boton para buscar apartamento
  navigateToApartment() {
    this.apartmentVisible = !this.apartmentVisible;
  }


}