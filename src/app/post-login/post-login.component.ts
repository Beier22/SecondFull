import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-post-login',
  templateUrl: './post-login.component.html',
  styleUrls: ['./post-login.component.scss']
})
export class PostLoginComponent implements OnInit {

  constructor(
    private authServ: AuthService
  ) { }

  ngOnInit(): void {
  }

  signOut() {
    this.authServ.SignOut();
  }

}
