import { Component} from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-survey',
  templateUrl: './add-survey.component.html',
  styleUrls: ['./add-survey.component.scss'],
  standalone: true,
  imports:[IonicModule],
})
export class AddSurveyComponent {

  constructor(private router: Router) { }
  
  goToSurveyviews(){
    this.router.navigate(['survey-views']);
  }
}
