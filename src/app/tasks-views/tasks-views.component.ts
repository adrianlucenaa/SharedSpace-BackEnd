import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks-views',
  templateUrl: './tasks-views.component.html',
  styleUrls: ['./tasks-views.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class TasksViewsComponent {
  items: string[] = [];
  itemCount: number = 20;

  constructor( private router: Router) { }

  

  goToTasks() {
    this.router.navigate(['addTasks']);
  }

  deleteTask() {
    
  }

  loadInitialItems() {
    for (let i = 0; i < this.itemCount; i++) {
      this.items.push(`Item ${i + 1}`);
    }
  }

  loadMoreItems(event: CustomEvent) {
    setTimeout(() => {
      for (let i = 0; i < this.itemCount; i++) {
        this.items.push(`Item ${this.items.length + 1}`);
      }
      (event.target as HTMLIonInfiniteScrollElement).complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll if necessary
      if (this.items.length >= 100) {
        (event.target as HTMLIonInfiniteScrollElement).disabled = true;
      }
    }, 500);
  }

}
