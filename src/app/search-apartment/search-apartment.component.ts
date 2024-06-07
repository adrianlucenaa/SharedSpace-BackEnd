import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ApartmentService } from '../services/apartment.service';
import { HttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule
import { Apartment } from '../model/apartment.model';

@Component({
  selector: 'app-search-apartment',
  templateUrl: './search-apartment.component.html',
  styleUrls: ['./search-apartment.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule], // Añadir FormsModule aquí
})
export class SearchApartmentComponent {
  apartmentName: string = '';
  apartment: Apartment | null = null;

  constructor(
    private router: Router,
    private apartmentService: ApartmentService
  ) {}

  searchApartment() {
    this.apartmentService.getApartmentByName(this.apartmentName).subscribe(
      (apartment) => {
        if (apartment) {
          console.log('Apartamento encontrado:', apartment);
          this.apartment = apartment;
          if (this.apartment.id !== undefined) {
            this.assignApartmentToUser(this.apartment.id);
          } else {
            console.error('El ID del apartamento es undefined.');
          }
        } else {
          console.log('Apartamento no encontrado.');
        }
      },
      (error) => {
        console.error('Error al buscar apartamento:', error);
        // Aquí puedes mostrar un mensaje de error al usuario si lo deseas
      }
    );
  }

  assignApartmentToUser(apartmentId: number) {
    const userId = parseInt(localStorage.getItem('id')!, 10);
    this.apartmentService.assignApartmentToUser(apartmentId, userId).subscribe(
      (response) => {
        console.log('Apartamento asignado exitosamente:', response);
        // Actualizar localStorage con el nuevo apartmentId
        localStorage.setItem('apartmentId', apartmentId.toString());
        // Redirigir a otra página si es necesario
        this.router.navigate(['tabs/tab2']);
      },
      (error) => {
        console.error('Error al asignar apartamento:', error);
      }
    );
  }
}

