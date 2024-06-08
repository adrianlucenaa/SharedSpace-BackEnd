import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ApartmentService } from '../services/apartment.service';
import { HttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Apartment } from '../model/apartment.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-search-apartment',
  templateUrl: './search-apartment.component.html',
  styleUrls: ['./search-apartment.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class SearchApartmentComponent {
  apartmentName: string = '';
  apartment: Apartment | null = null;

  constructor(
    private router: Router,
    private apartmentService: ApartmentService,
    private userService: UserService,
    private http: HttpClient
  ) {}

  searchApartment() {
    this.apartmentService.getApartmentByName(this.apartmentName).subscribe(
      (apartments) => {
        if (apartments && apartments.length > 0) {
          console.log('Apartamento encontrado:', apartments[0]);
          this.apartment = apartments[0];
          if (this.apartment && this.apartment.id !== undefined) {
            this.editUser(this.apartment);
          } else {
            console.error('El ID del apartamento es undefined.');
          }
        } else {
          console.log('Apartamento no encontrado.');
        }
      },
      (error) => {
        console.error('Error al buscar apartamento:', error);
      }
    );
  }

  editUser(apartment: Apartment) {
    const userId = parseInt(localStorage.getItem('id')!, 10);
    this.userService.getUserById(userId).subscribe(
      (user) => {
        if (user) {
          user.apartment = apartment; // Asigna el objeto completo del apartamento
          this.userService.CreateOrUpdateUser(user).subscribe(
            (response) => {
              console.log('Usuario actualizado exitosamente:', response);
              if (apartment.id !== undefined) {
                // Actualizar localStorage con el nuevo apartmentId
                localStorage.setItem('apartmentId', apartment.id.toString());
                // Recargar la página
                location.reload();
              } else {
                console.error('El ID del apartamento es undefined.');
              }
            },
            (error) => {
              console.error('Error al actualizar usuario:', error);
            }
          );
        } else {
          console.error('Usuario no encontrado.');
        }
      },
      (error) => {
        console.error('Error al obtener usuario:', error);
      }
    );
  }
}
