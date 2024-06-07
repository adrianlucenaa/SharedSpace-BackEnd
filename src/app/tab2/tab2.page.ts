import { Component, inject, OnInit } from '@angular/core';
import { ApartmentComponent } from '../apartment/apartment.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ApartmentService } from '../services/apartment.service';
import { Router } from '@angular/router'; 
import { catchError, of } from 'rxjs';
import { UserService } from '../services/user.service';
import { User } from '../model/user.model';
import { Apartment } from '../model/apartment.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, ApartmentComponent, CommonModule],
})
export class Tab2Page implements OnInit {
  apartmentId: number | null = null;
  adress: string | null = null;
  numberowner: number | null = null;
  owneremail: string | null = null;
  nameowner: string | null = null;
  name: string | null = null;
  img: string | null = null;

  apartmentVisible: boolean = false;
  showButtons: boolean = false;
  apartment: Apartment | null = null;
  items: string[] = [];
  itemCount: number = 20;

  constructor(private router: Router, private apartmentService: ApartmentService, private UserService: UserService) {}

  ngOnInit(): void {
    this.UserService.getUsers().subscribe(users => {
      const userId = users[0]?.id ?? null;
      this.apartmentId = userId;
      if (this.apartmentId) {
        this.apartmentService.getApartmentById(this.apartmentId).subscribe(apartment => {
          if (apartment) {
            this.apartment = apartment;
            this.adress = this.apartment?.address ?? null;
            this.numberowner = this.apartment?.numberowner ?? null;
            this.owneremail = this.apartment?.owneremail ?? null;
            this.nameowner = this.apartment?.nameowner ?? null;
            this.name = this.apartment?.name ?? null;
            this.apartmentVisible = true;
            console.log(this.name, this.adress, this.apartment, this.owneremail, this.numberowner, this.nameowner);
            this.loadInitialItems();
          } else {
            console.log("El usuario no tiene un apartamento asignado.");
            this.apartmentVisible = false;
          }
        }, error => {
          console.error('Error al obtener apartamento', error);
          this.apartmentVisible = false;
        });
      } else {
        console.log("No se encontró apartmentId en localStorage.");
        this.apartmentVisible = false;
      }
    });
  }

  goToCreateApartment() {
    this.router.navigate(['addapartment']);
  }

  navigateToApartment() {
    this.apartmentVisible = !this.apartmentVisible;
  }

  loadInitialItems() {
    for (let i = 0; i < this.itemCount; i++) {
      this.items.push(`Item ${i + 1}`);
    }
  }

  goToRemindersViews(){
    this.router.navigate(['reminder-views']);
  }
  
  goToSearchApartment(){
    this.router.navigate(['search-apartment']);
  }

  loadMoreItems(event: CustomEvent) {
    setTimeout(() => {
      for (let i = 0; i < this.itemCount; i++) {
        this.items.push(`Item ${this.items.length + 1}`);
      }
      (event.target as HTMLIonInfiniteScrollElement).complete();

      if (this.items.length >= 100) {
        (event.target as HTMLIonInfiniteScrollElement).disabled = true;
      }
    }, 500);
  }
}