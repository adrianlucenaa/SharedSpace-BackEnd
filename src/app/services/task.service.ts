import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../model/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:8081/tasks';
  router: any;

  constructor(private http: HttpClient) { }


  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}`);
  }

  getTasksByApartmentId(apartmentId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/tasks?apartmentId=${apartmentId}`);
  }

  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task);
  }

  deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  goToTasks() {
    this.router.navigate(['addTasks']);
  }
  
}
