import { Component, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
  providers: [UserService],
})
export class EdituserComponent {

  UserService = inject(UserService)
  userVisible : boolean = false
  user:any
  

  constructor(private router: Router, private modalController: ModalController,
    private userService: UserService) { }

  async goBack() {
    await this.modalController.dismiss();
  }
  updateUser() {
    this.userService.updateUser(this.user).subscribe((updateduser) => {
      console.log('Usuario actualizado:', updateduser);
      this.user = updateduser;
    });
  }
}