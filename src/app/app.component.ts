import { Component } from '@angular/core';

import { NavController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthProvider } from 'src/providers/auth';

import * as firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAGxNuFgZgaH4VrFKiB5Tv2l-vS6E1VzzE",
  authDomain: "itvh-m2.firebaseapp.com",
  projectId: "itvh-m2",
  storageBucket: "itvh-m2.appspot.com",
  messagingSenderId: "236629084229",
  appId: "1:236629084229:web:6b7dd17dbb2731c6c6fb2c",
  measurementId: "G-KRCYJ78S78"
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authProvider: AuthProvider,
    private navCtrl: NavController,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      const  fb = firebase.default.initializeApp(firebaseConfig);
      console.log("Initialize");
      console.log(fb);
      if (this.authProvider.isAuthenticate()){
        // Si estoy logueado
        console.log('Estoy autenticado, voy hacia tabs');
        this.navCtrl.navigateRoot('/tabs/tab1',{animated:true, animationDirection:'forward'})
      }else{
        // Si no estoy logueado
        console.log('No estoy autenticado... :(')
        this.navCtrl.navigateRoot('/login',{animated:true, animationDirection:'forward'});
      }
    });
  }
}
