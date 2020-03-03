import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import * as firebase from 'firebase';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss']
})
export class FrontComponent implements OnInit {

  constructor(
    private authServ: AuthService,
    private router: Router
  ) { }

  email: string;
  password: string;

  ngOnInit(): void {
    /*var user;
    this.authServ.userData;
    if (user) {
      this.router.navigate(['home']);
    }*/
  }

  signUp() {
    this.authServ.SignUp(this.email, this.password);
    this.email = '';
    this.password = '';
  }

  signIn() {
    this.authServ.SignIn(this.email, this.password);
    // this.email = '';
    // this.password = '';
  }

  signOut() {
    this.authServ.SignOut();
  }

  createAcc() {
    this.router.navigate(['create']);
  }

}
