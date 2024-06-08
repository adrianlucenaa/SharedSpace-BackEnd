import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ApartmentService } from '../services/apartment.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-apartment-info',
  templateUrl: './apartment-info.component.html',
  styleUrls: ['./apartment-info.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
  providers: [ApartmentService],
})


export class ApartmentInfoComponent implements OnInit {
  name: string | null = null; // Inicializa como null
  address: string | null = null;
  id: number | null = null;
  owneremail: string | null = null;
  numberowner: number | null = null;
  nameowner: string | null = null;
  idApartment: number | null = null;
  showLogin: boolean = false;
  items: string[] = [];
  itemCount: number = 20;

  constructor(router: Router, private modalController: ModalController,
    private apartmentService: ApartmentService, private http: HttpClient) {
      
  }

  ngOnInit() {
    // Recuperar la información del apartamento del almacenamiento local
    const storedName = localStorage.getItem('name');
    const storedAddress = localStorage.getItem('address');
    const storedId = localStorage.getItem('apartmentId');
    const storedOwnerEmail = localStorage.getItem('owneremail');
    const storedNumberOwner = localStorage.getItem('numberowner');
    const storedNameOwner = localStorage.getItem('nameowner');

    // Verifica si las claves existen en localStorage
    console.log('storedName:', storedName);
    console.log('storedAddress:', storedAddress);
    console.log('storedId:', storedId);
    console.log('storedOwnerEmail:', storedOwnerEmail);
    console.log('storedNumberOwner:', storedNumberOwner);
    console.log('storedNameOwner:', storedNameOwner);

    this.name = storedName ? storedName : null;
    this.address = storedAddress ? storedAddress : null;
    this.id = storedId ? parseInt(storedId, 10) : null;
    this.owneremail = storedOwnerEmail ? storedOwnerEmail : null;
    this.numberowner = storedNumberOwner ? parseInt(storedNumberOwner, 10) : null;
    this.nameowner = storedNameOwner ? storedNameOwner : null;

    console.log(this.name, this.address, this.id, this.owneremail, this.numberowner, this.nameowner);
    this.loadInitialItems();
  }

  loadInitialItems() {
    for (let i = 0; i < this.itemCount; i++) {
      this.items.push(`Item ${i + 1}`);
    }
  }
}
