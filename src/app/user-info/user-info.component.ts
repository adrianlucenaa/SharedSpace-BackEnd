import { Component, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
  providers: [UserService],
})
export class UserInfoComponent  {

  constructor(router: Router, private modalController: ModalController,
    private userService: UserService) {
      
     }


} 