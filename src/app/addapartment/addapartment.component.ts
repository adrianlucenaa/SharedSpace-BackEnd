import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApartmentService } from '../services/apartment.service';
import { UserService } from '../services/user.service';
import { Apartment } from '../model/apartment.model';
import { User } from '../model/user.model';

@Component({
  selector: 'app-addapartment',
  templateUrl: './addapartment.component.html',
  styleUrls: ['./addapartment.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule],
  providers: [ApartmentService, UserService]
})
export class AddapartmentComponent {
  apartment: Apartment = new Apartment();

  constructor(
    private apartmentService: ApartmentService,
    private userService: UserService,
    private router: Router
  ) {}

  createApartment() {
    this.apartmentService.createApartment(this.apartment).subscribe(
      (createdApartment) => {
        console.log('Apartamento creado exitosamente:', createdApartment);
        this.updateUserWithApartment(createdApartment);
      },
      (error) => {
        console.error('Error al crear el apartamento:', error);
      }
    );
  }

  updateUserWithApartment(apartment: Apartment) {
    const userId = parseInt(localStorage.getItem('id')!, 10);
    this.userService.getUserById(userId).subscribe(
      (user) => {
        if (user) {
          user.apartment = apartment;
          this.userService.CreateOrUpdateUser(user).subscribe(
            (CreateOrUpdateUser) => {
              console.log('Usuario actualizado exitosamente:', CreateOrUpdateUser);
              localStorage.setItem('apartmentId', apartment.id!.toString());
              this.router.navigate(['tabs/tab2']);
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
