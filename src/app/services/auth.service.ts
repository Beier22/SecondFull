import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: Observable<firebase.User>;

  constructor(
    private afa: AngularFireAuth,
    private route: Router
  ) {
    this.userData = afa.authState;
  }

  SignUp(email: string, password: string) {
    this.afa.auth.createUserWithEmailAndPassword(email, password).then(res => {
      console.log('You are successfully signed up!', res);
    }).catch(err => {
      console.log('Something is wrong:', err.message);
    });
  }

  SignIn(email: string, password: string) {
    this.afa.auth.signInWithEmailAndPassword(email, password).then(res => {
      console.log('You are succesfully logged in!');
      this.route.navigate(['home']);
    }).catch(err => {
      console.log('Something is wrong:', err.message);
    });
  }

  SignOut() {
    this.afa.auth.signOut().then();
  }
}
