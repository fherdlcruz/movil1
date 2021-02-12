import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  loginUser(email:string, password:string){
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }
  
    signUser(email:string,password:string){
        return firebase.auth().createUserWithEmailAndPassword(email, password);
      }

    resetPassword(email:string, password:string
      ){
        return firebase.auth().sendPasswordResetEmail(email);
      }

    logoutUser(){
      return firebase.auth().signOut();
    }
    
}
