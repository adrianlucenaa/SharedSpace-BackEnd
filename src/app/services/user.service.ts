import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://sharedspacebackend.onrender.com/user';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}`);
  }

  registerUser(user: any): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', '*/*');

    return this.http.post(`${this.apiUrl}`, user, { headers: headers });
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${user.id}`, user);
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
}
