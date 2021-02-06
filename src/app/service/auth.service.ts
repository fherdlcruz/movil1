import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  loginUser(email:string, 
    password:string
    ){
      return firebase.default.auth().signInWithEmailAndPassword(email, password);
    }
  
    signUser(email:string,
      password:string
      ){
        return firebase.default.auth().createUserWithEmailAndPassword(email, password);
      }

    resetPassword(email:string, password:string
      ){
        return firebase.default.auth().sendPasswordResetEmail(email);
      }

    logoutUser(){
      return firebase.default.auth().signOut();
    }
    
}
