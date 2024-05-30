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

  apartmentVisible: boolean = false;
  showButtons: boolean = false; // Variable para controlar la visibilidad de los botones
  apartment: any;
  items: string[] = [];
  itemCount: number = 20;

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