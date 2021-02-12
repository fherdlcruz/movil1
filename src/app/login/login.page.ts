import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { AuthService } from '../service/auth.service';

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
    private authService:AuthService,
    private router:Router,
  ) { }

  ngOnInit() {
  }

  async iniciarSesion(){
    console.log('Iniciando sesión');
    const loading = await this.loadingCtrl.create({message:'Iniciando sesión...'})
    await loading.present();
    this.authService.loginUser(this.usuario, this.password).then((response)=>{

      console.log('- - - - -SUCCESS - - - - - -')
      console.log(response);
      console.log('- - - - -END SUCCESS - - - - - -')
      this.loadingCtrl.dismiss();
      this.router.navigateByUrl('/tabs/tab1');

    }, (error)=>{
      console.log('- - - - -ERROR - - - - - -');
      console.log(error);
      console.log('- - - - -END ERROR - - - - - -');
      this.loadingCtrl.dismiss();
    });
    
  }


  goToSignup(){
    this.router.navigateByUrl('signup');
  }
}
