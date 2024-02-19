import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apartment } from '../model/apartment.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApartmentService {

    private apiUrl = 'http://localhost:8081/apartments';


  constructor(private http: HttpClient) { }

  getApartments(): Observable<apartment[]> {
    return this.http.get<apartment[]>(this.apiUrl);
  }

  getApartmentByUser(userId:any){
    return this.http.get<apartment>(`${this.apiUrl}/user/${userId}`);
  }

  createApartment(apartment: apartment): Observable<apartment> {
    return this.http.post<apartment>(this.apiUrl, apartment);
  }

  updateApartment(apartment: apartment): Observable<apartment> {
    return this.http.put<apartment>(`${this.apiUrl}/${apartment.id}`, apartment);
  }

  deleteApartment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  
}