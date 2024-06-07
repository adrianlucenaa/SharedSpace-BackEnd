import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { ApartmentService } from '../services/apartment.service';
import { UserService } from '../services/user.service';
import { Apartment } from '../model/apartment.model';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class Tab2Page implements OnInit {
  apartment: Apartment | null = null;
  apartmentVisible: boolean = false;
  items: string[] = [];
  itemCount: number = 20;

  constructor(
    private router: Router, 
    private apartmentService: ApartmentService, 
    private userService: UserService
  ) {}

  ngOnInit(): void {
    const apartmentId = localStorage.getItem('apartmentId');
    if (apartmentId && apartmentId !== 'null') {
      this.apartmentService.getApartmentById(Number(apartmentId)).subscribe(
        apartment => {
          this.apartment = apartment;
          this.apartmentVisible = true;
          this.loadInitialItems();
        },
        error => {
          console.error('Error al obtener apartamento', error);
          this.apartmentVisible = false;
        }
      );
    } else {
      console.log("El usuario no tiene un apartamento asignado.");
      this.apartmentVisible = false;
    }
  }

  goToCreateApartment() {
    this.router.navigate(['addapartment']);
  }

  goToSearchApartment() {
    this.router.navigate(['search-apartment']);
  }

  loadInitialItems() {
    for (let i = 0; i < this.itemCount; i++) {
      this.items.push(`Item ${i + 1}`);
    }
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

  goToRemindersViews() {
    this.router.navigate(['reminder-views']);
  }
}
