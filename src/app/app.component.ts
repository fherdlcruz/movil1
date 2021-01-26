import { Component } from '@angular/core';

import { NavController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthProvider } from 'src/providers/auth';

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
