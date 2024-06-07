import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { ReminderService } from '../services/reminder.service'; // Asegúrate de que la ruta es correcta
import { Reminder } from '../model/reminder.model';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-add-reminder',
  templateUrl: './add-reminder.component.html',
  styleUrls: ['./add-reminder.component.scss'],
  standalone: true,
  imports:[IonicModule, ReactiveFormsModule, FormsModule],
})
export class AddReminderComponent  {
  description: string = '';
  date: Date = new Date();
  constructor(private router: Router, private reminderService: ReminderService) { }

  GoToReminderViews(){
    this.router.navigate(['reminder-views']);

}

goBack() {
  this.router.navigate(['reminder-views']);
}

createReminder() {
  const newReminder: Reminder = {
    description: this.description,
    date: new Date(this.date)
  };

  this.reminderService.createReminder(newReminder).subscribe(
    (response) => {
      console.log('Reminder created successfully', response);
      this.GoToReminderViews(); // Navegar a la vista de recordatorios después de crear
    },
    (error) => {
      console.error('Error creating reminder', error);
    }
  );
}
}
