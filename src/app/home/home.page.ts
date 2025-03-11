import { Component } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';
import { FormsModule } from '@angular/forms'; 
import { AlertController } from '@ionic/angular';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  email: string = '';
  password: string = '';


  constructor(private firestore: Firestore, private auth: Auth, private alertController: AlertController) {
    const collectionRef = collection(this.firestore, 'test-collection');
   

}

async TryLogin() {
  try {
    const user = await signInWithEmailAndPassword(
      this.auth,
      this.email,
      this.password
     
    );
    console.log('Login bem-sucedido:', user);
     this.showAlert("Sucesso no login", "Seja bem Vindo :)");
    return null;
  } catch (error: any) {
    console.error('Erro ao fazer login:', error);
    this.showAlert('Erro de Login', 'Email ou senha incorretos.');
    return null;
  }
}

async showAlert(header: string, message: string) {
  const alert = await this.alertController.create({
    header,
    message,
    buttons: ['OK'],
  });
  await alert.present();
}
}