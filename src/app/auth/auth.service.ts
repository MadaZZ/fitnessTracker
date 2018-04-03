import { Injectable, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { Subject } from 'rxjs/Subject';
import { AngularFireAuth } from 'angularfire2/auth'; 

@Injectable()
export class AuthService {
  
  private isAuthenticated = false ;
  
  authChange = new Subject<boolean>();//Sends data onChange

  constructor( private router: Router, private afauth: AngularFireAuth ) { }
  
  registerUser(authdata: AuthData)
  {
    this.afauth
    .auth.createUserWithEmailAndPassword(
      authdata.email, 
      authdata.password
    ).then(res => {
        console.log(res);
      })
      .catch( err=> {
        console.log(err);
      });
      this.authSuccessfully();
  }

  login(authdata: AuthData )
  {
    this.afauth
    .auth.signInWithEmailAndPassword(authdata.email, authdata.password).then(res => {
      console.log(res);
    })
    .catch( err=> {
      console.log(err);
    });
    this.authSuccessfully();
  }
  
  logout()
  {
    this.authChange.next(false);
    this.router.navigate(['/login']);
    this.isAuthenticated = false;
  }

  isAuth()
  {
    return this.isAuthenticated
  }
 
  authSuccessfully()
  {
    this.isAuthenticated = true;
    this.authChange.next(true);
    this.router.navigate(['/training']);
  }

}