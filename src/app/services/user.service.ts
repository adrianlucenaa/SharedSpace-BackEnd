import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8081/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}`);
  }

  registerUser(user: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', '*/*');
    return this.http.post(`${this.apiUrl}`, user, { headers: headers });
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getUsersTaskUncompleted(user: User): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/taskuncompleted/${user}`);
  }

  getUsersByName(name: User): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/name/${name}`);
  }

  CreateOrUpdateUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  // Método para obtener el usuario actualmente autenticado junto con su apartamento
  getCurrentUserWithApartment(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/current-with-apartment`);
  }
}
