import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-reminder',
  templateUrl: './add-reminder.component.html',
  styleUrls: ['./add-reminder.component.scss'],
  standalone: true,
  imports:[IonicModule],
})
export class AddReminderComponent  {

  constructor(private router: Router) { }

  GoToReminderViews(){
    this.router.navigate(['reminder-views']);

}
}
