import { AuthService } from './../../app/core/services/auth';
import { HomePage } from './../home/home';
import { UserInterface } from './../../app/core/interfaces/user.interface';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['/login.scss']
})
export class LoginPage {

  userForm: FormGroup;
  user: UserInterface = {} as UserInterface;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public authService: AuthService,
    private fb: FormBuilder) {
    this.userForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  /**
   * This method allows navigate to signup page
   */
  goToSignup(){
    this.navCtrl.push(SignupPage);
  }

  loginWithFacebook() {
    this.authService.facebookLogin().then((data) => {
      console.log('ACCESO AUTORIZADO POR EL USUARIO :)');
      console.log(data);
      this.navCtrl.push(HomePage);
    }).catch((error) => {
      console.log('ACCESO DENEGADO POR EL USUARIO :(');
      console.log(error);
    })
  }

}
