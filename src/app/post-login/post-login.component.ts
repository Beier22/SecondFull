import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import * as firebase from 'firebase';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-login',
  templateUrl: './post-login.component.html',
  styleUrls: ['./post-login.component.scss']
})
export class PostLoginComponent implements OnInit {

  constructor(
    public authServ: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    /*const user = this.authServ.userData;
    if (user === null) {
      this.router.navigate(['']);
    }*/
  }

  signOut() {
    this.authServ.SignOut();
  }

}
