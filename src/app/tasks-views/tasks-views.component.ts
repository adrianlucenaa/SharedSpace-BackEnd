import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-tasks-views',
  templateUrl: './tasks-views.component.html',
  styleUrls: ['./tasks-views.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class TasksViewsComponent {

  Task: any[] = [];
  apartmentId: number = 0; 
  
  

  constructor(private taskService: TaskService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.apartmentId = +params['apartmentId']; // Asegúrate de que la ruta contenga 'apartmentId'
      this.loadTasks();
    });
  }

  goToTasks() {
    this.router.navigate(['addTasks']);
  }

  getTasksByApartmentId(id: number): void {
    this.taskService.getTasksByApartmentId(id).subscribe(
      tasks => {
        this.Task = tasks;
      },
      error => {
        console.error('Error fetching tasks:', error);
      }
    );
  }


  loadTasks() {
    this.taskService.getTasksByApartmentId(this.apartmentId).subscribe(tasks => {
      this.Task = tasks;
    });
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe(() => {
      this.loadTasks();
    });
  }

}
