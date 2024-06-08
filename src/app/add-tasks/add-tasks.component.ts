import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { TaskService } from '../services/task.service';
import { Task } from '../model/task.model'; // Importar el modelo Task
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule],
})
export class AddTasksComponent {
  task: Task = new Task(); // Inicializar la tarea correctamente
  name: string = '';
  description: string = '';
  completed: boolean = false;

  constructor(
    private router: Router,
    private taskService: TaskService
  ) {}

  saveTask() {
    const userId = localStorage.getItem('id');
    const apartmentId = localStorage.getItem('apartmentId');

    if (userId && apartmentId) {
      // Asociar la tarea con el ID del apartamento del usuario
      this.task.apartment = { id: Number(apartmentId) } as any;
      this.task.userId = Number(userId);

      this.taskService.createTask(this.task).subscribe(
        (response) => {
          console.log('Tarea creada exitosamente:', response);
          // Redirigir a la vista de tareas
          this.router.navigate(['tasks-views']);
        },
        (error) => {
          console.error('Error al crear la tarea:', error);
        }
      );
    } else {
      console.error('Usuario o apartamento no encontrados en localStorage.');
    }
  }

  goToTasksviews() {
    this.router.navigate(['tasks-views']);
  }
}
