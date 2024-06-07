import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ApartmentService } from '../services/apartment.service';
import { HttpClient } from '@angular/common/http';
import {IonicModule} from '@ionic/angular';
import { Apartment } from '../model/apartment.model';

@Component({
  selector: 'app-search-apartment',
  templateUrl: './search-apartment.component.html',
  styleUrls: ['./search-apartment.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class SearchApartmentComponent {

  apartment: Apartment | null = null;

  constructor(
    private router: Router,
    private apartmentService: ApartmentService,
    private http: HttpClient
  ) {}
    
  

/*
  enterToApartment() {
    this.apartmentService.getApartmentByName(this.apartment).subscribe((getApartment) => {
      console.log('Apartamento encontrado:', getApartment);
      this.apartment = getApartment;
      
      this.updateLocalStorage();
    });
  }
  */
  
}