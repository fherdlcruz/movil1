import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  usuario ='';
  password ='';

  constructor(
    private authService:AuthService,
    private router:Router,
    private loadingCtrl: LoadingController,
  ) { }

  ngOnInit() {
  }


  async signUpUser(){
    const loadC = await this.loadingCtrl.create({message:'Creando usuario en Firebase para Autenticación...'})
    await loadC.present();
    this.authService.signUser(this.usuario, this.password).then((response)=>{
      console.log('- - - -  RESPUESTA - - - - - ');
        console.log(response)
        this.loadingCtrl.dismiss();
        this.router.navigateByUrl('login');
    }, (error)=>{
      
      console.log('- - - - -ERROR - - - - - -')
      console.log(error)
      console.log('- - - - -END ERROR - - - - - -')
      this.loadingCtrl.dismiss();
    });
  }
}
