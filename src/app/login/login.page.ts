import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario = '';
  password = '';
  constructor(
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
  }

  async iniciarSesion(){
    console.log('Iniciando sesión');
    const loading = await this.loadingCtrl.create({message:'Iniciando sesión...'})
    await loading.present();

    setTimeout(()=>{
      this.loadingCtrl.dismiss();
      this.navCtrl.navigateRoot('/tabs/tab1');
    },3000)
  }

}
