import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Apartment } from '../model/apartment.model';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {
  private apiUrl = 'http://localhost:8081/apartments';

  constructor(private http: HttpClient) {}

  getApartments(): Observable<Apartment[]> {
    return this.http.get<Apartment[]>(this.apiUrl);
  }

  getApartmentById(id: number): Observable<Apartment> {
    return this.http.get<Apartment>(`${this.apiUrl}/${id}`);
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

  getApartmentByName(name: string): Observable<Apartment[]> {
    return this.http.get<Apartment[]>(`${this.apiUrl}/name/${name}`);
  }

  assignApartmentToUser(apartmentId: number, userId: number): Observable<any> {
    const body = { apartmentId, userId }; // Cuerpo de la solicitud HTTP
    return this.http.put<any>(`${this.apiUrl}/assign`, body);
  }
}
