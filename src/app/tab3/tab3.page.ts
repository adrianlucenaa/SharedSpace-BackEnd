import { Component } from '@angular/core';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { IonicModule, ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { EdituserComponent } from '../edituser/edituser.component';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ExploreContainerComponent],
})
export class Tab3Page {
  constructor(private modalController: ModalController, private alertController: AlertController, private router: Router) {}

  async navigateToEditUser() {
    const modal = await this.modalController.create({
      component: EdituserComponent,
      componentProps: {
        // Puedes pasar cualquier propiedad necesaria al componente EdituserComponent
      }
    });
    return await modal.present();
  }
  async confirmDeleteAccount() {
    const alert = await this.alertController.create({
      header: 'Confirmar eliminación de cuenta',
      message: '¿Estás seguro de que deseas eliminar tu cuenta?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Eliminación de cuenta cancelada');
          }
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.deleteAccount();
          }
        }
      ]
    });

    await alert.present();
  }

  deleteAccount() {
    // Lógica para eliminar la cuenta
  }
  redirectToLogin() {
    this.router.navigate(['login']);
  }

}
