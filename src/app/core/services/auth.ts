import { Injectable } from "@angular/core";
import * as firebase from 'firebase/app';
import { AngularFireAuth } from "angularfire2/auth";

@Injectable()
export class AuthService {
  constructor(private angularFireAuth: AngularFireAuth) {}

  facebookLogin(){
    const provider = new firebase.auth.FacebookAuthProvider();
    return this.angularFireAuth.auth.signInWithPopup(provider);
  }
}