import { Component, inject } from '@angular/core';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { IonicModule, ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { EdituserComponent } from '../edituser/edituser.component';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ExploreContainerComponent],
  providers: [UserService]
})
export class Tab3Page {

  UserService = inject(UserService);
  userVisible : boolean = false
  user:any

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
            this.UserService.deleteUser(this.user).subscribe(() => {
              console.log('Cuenta eliminada exitosamente');
              this.router.navigate(['login']);// Lógica adicional después de eliminar la cuenta
            });
          }
        }
      ]
    });

    await alert.present();
  }

  
  redirectToLogin() {
    this.router.navigate(['login']);
  }

}
