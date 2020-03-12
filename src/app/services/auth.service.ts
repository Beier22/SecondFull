import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Observable, of} from 'rxjs';
import {Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {User} from '../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: Observable<firebase.User>;

  constructor(
    private afa: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.userData = afa.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  SignUp(email: string, password: string) {
    this.afa.auth.createUserWithEmailAndPassword(email, password).then(res => {
      console.log('You are successfully signed up!', res);
      this.router.navigate(['']);
      this.UpdateUserData(res.user);
    }).catch(err => {
      console.log('Something is wrong:', err.message);
    });
  }

  SignIn(email: string, password: string) {
    const u = this.afa.auth.signInWithEmailAndPassword(email, password).then(res => {
      console.log('You are succesfully logged in!');
      this.router.navigate(['home']);
      this.UpdateUserData(res.user);
    }).catch(err => {
      console.log('Something is wrong:', err.message);
    });
  }

  SignOut() {
    this.afa.auth.signOut().then(res => {
      console.log('You are successfully signed out!', res);
      this.router.navigate(['']);
    }).catch(err => {
      console.log('Something is wrong:', err.message);
    });
  }

  UpdateUserData(user) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName
    };

    return userRef.set(data, {merge: true}).catch(err => {
      console.log('Update user data failed: ', err);
    });
  }
}
