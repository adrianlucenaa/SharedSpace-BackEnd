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
  apartment: any = {};
  items: string[] = [];
  itemCount: number = 20;

  constructor(private router: Router, private apartmentService: ApartmentService) {}

  ngOnInit(): void {
    /*
    //Metodo y logica que haga si el cliente tiene un apartamento te lo muestre , si no te envie un mensaje de que no posible mostrarlo
    this.apartmentService.updateUser().subscribe((apartment) => {
      if (apartment) {
        this.apartment = apartment;
        this.showButtons = true;
      } else {
        this.showButtons = false;
      }
    });
    */
   //Metodo para crear un apartamento
    this.apartmentService.createApartment(this.apartment).subscribe((createdApartment) => {
      console.log('Nuevo apartamento creado:', createdApartment);
      this.apartment = createdApartment;
    });
  }


//Boton para crear apartamento  
goToCreateApartment() {
  this.router.navigate(['addapartment']);
}

goToSearchApartment() {
  this.router.navigate(['SearchApartmentComponent']);
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