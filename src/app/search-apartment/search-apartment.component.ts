import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ApartmentService } from '../services/apartment.service';
import { HttpClient } from '@angular/common/http';
import {IonicModule} from '@ionic/angular';

@Component({
  selector: 'app-search-apartment',
  templateUrl: './search-apartment.component.html',
  styleUrls: ['./search-apartment.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class SearchApartmentComponent {

  constructor(private router: Router, private apartmentService: ApartmentService, private http: HttpClient) { }


  enterToApartment() {
  }
}
