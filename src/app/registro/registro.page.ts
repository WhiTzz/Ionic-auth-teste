import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from '@angular/fire/auth';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: false,
})
export class RegistroPage implements OnInit {
  email: string = '';
  password: string = '';
  nome : string ='';
  constructor(private auth: Auth, private alertController: AlertController) { }

  ngOnInit() {
  }
  async TryRegistro(){
    try{
    const user = await createUserWithEmailAndPassword(
    this.auth,
    this.email,
    this.password
    
  );

  this.showAlert('Sucesso ao criar sua conta', 'Seja bem vindo.');
  return null;
} catch (error: any) {
  console.error('Erro ao fazer login:', error);
  this.showAlert('Erro no Registro', 'Tente novamente mais tarde, todas as senhas tem que ter letras numeros e 8 caracteres no minimo.');
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
