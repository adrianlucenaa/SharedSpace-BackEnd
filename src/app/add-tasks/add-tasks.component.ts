import { Component} from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.scss'],
  standalone: true,
  imports:[IonicModule],
})
export class AddTasksComponent{

  constructor(private router: Router) { }
  
  goToTasksviews(){
    this.router.navigate(['tasks-views']);
  }

  
}
  




