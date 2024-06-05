import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Apartment } from '../model/apartment.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApartmentService {

    private apiUrl = 'http://localhost:8081/apartments';


  constructor(private http: HttpClient) { }

  getApartments(): Observable<Apartment[]> {
    return this.http.get<Apartment[]>(this.apiUrl);
  }

  getApartmentById(id: number): Observable<Apartment> {
    return this.http.get<Apartment>(`${this.apiUrl}/${id}`);
  }

  /*
  assignApartmentToUser(apartmentId: number, userId: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${apartmentId}/assign`, { userId });
  }
  */

  getApartmentByUser(userId: any): Observable<Apartment> {
    return this.http.get<Apartment>(`${this.apiUrl}/${userId}`);
  }

  createApartment(apartment: Apartment): Observable<Apartment> {
    return this.http.post<Apartment>(this.apiUrl, apartment);
  }

  updateApartment(apartment: Apartment): Observable<Apartment> {
    return this.http.put<Apartment>(`${this.apiUrl}/${apartment.id}`, apartment);
  }

  deleteApartment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  //Metodo para buscar un apartmento por nombre de apartment
  getApartmentByName(name: string): Observable<Apartment> {
    return this.http.get<Apartment>(`${this.apiUrl}/name/${name}`);
  }

  //Metodo para actulizar un usuario y añadirle un apartmento
  assignApartmentToUser(apartmentId: number, userId: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${apartmentId}/assign`, { userId });
  }
}