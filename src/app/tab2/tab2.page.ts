import { Component, inject, OnInit } from '@angular/core';
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
export class Tab2Page implements OnInit {
  apartmentId: number | null = null;
  apartmentVisible: boolean = false;
  showButtons: boolean = false; // Variable para controlar la visibilidad de los botones
  apartment: any;
  items: string[] = [];
  itemCount: number = 20;

  constructor(private router: Router, private apartmentService: ApartmentService) {}

  ngOnInit(): void {
    console.log(this.apartmentId);
    const apartmentIdStr = localStorage.getItem('apartmentId');
    this.apartmentId = apartmentIdStr ? parseInt(apartmentIdStr) : null;
    if (this.apartmentId) {
      this.apartmentService.getApartmentByUser(this.apartmentId).pipe(
        catchError(error => {
          console.error('Error al obtener apartamento', error);
          return of(null);
        })
      ).subscribe(apartment => {
        if (apartment) {
          this.apartment = apartment;
          this.apartmentVisible = true;
        } else {
          console.log("El usuario no tiene un apartamento asignado.");
          this.showButtons = true;
        }
      });
    } else {
      console.log("No se encontró apartmentId en localStorage.");
      this.showButtons = true;
    }
  }


//Boton para crear apartamento  
goToCreateApartment() {
  this.router.navigate(['addapartment']);
}

goToMoreInfo(event: Event) {
  event.stopPropagation(); // Para evitar que se dispare el click del card
  this.router.navigate(['user-info']);
}



//Boton para buscar apartamento
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

  loadMoreItems(event: CustomEvent) {
    setTimeout(() => {
      for (let i = 0; i < this.itemCount; i++) {
        this.items.push(`Item ${this.items.length + 1}`);
      }
      (event.target as HTMLIonInfiniteScrollElement).complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll if necessary
      if (this.items.length >= 100) {
        (event.target as HTMLIonInfiniteScrollElement).disabled = true;
      }
    }, 500);
  }


}