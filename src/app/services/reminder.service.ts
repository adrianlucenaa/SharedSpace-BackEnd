import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reminder } from '../model/reminder.model';

@Injectable({
  providedIn: 'root'
})
export class ReminderService {

  private apiUrl = 'http://localhost:8081/tasks';

  constructor(private http: HttpClient) { }

  getReminder(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}`);
  }

  getReminderByApartmentId(apartmentId: any): Observable<Reminder> {
    return this.http.get<Reminder>(`${this.apiUrl}/${apartmentId}`);
  }

  createReminder(reminder: Reminder): Observable<Reminder> {
    return this.http.post<Reminder>(this.apiUrl, reminder);
  }

  deleteReminder(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
