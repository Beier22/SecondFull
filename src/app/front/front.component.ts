import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

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
  }

  signUp() {
    this.authServ.SignUp(this.email, this.password);
    this.email = '';
    this.password = '';
  }

  signIn() {
    this.authServ.SignIn(this.email, this.password);
    //this.email = '';
    //this.password = '';
  }

  signOut() {
    this.authServ.SignOut();
  }

}
