import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule], // Aquí es donde puedes mantener tus imports
})
export class EdituserComponent {

  constructor(private router: Router, private modalController: ModalController) { }

  async goBack() {
    await this.modalController.dismiss();
  }
}