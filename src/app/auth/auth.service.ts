import { Injectable, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { Subject } from 'rxjs/Subject';
import { AngularFireAuth } from 'angularfire2/auth'; 
import { TrainingService } from '../training/training.service';
import { MatSnackBar } from '@angular/material';// to add snackbar

@Injectable()
export class AuthService {
  
  private isAuthenticated = false ;
  //private snackbar: MatSnackBar;
  
  authChange = new Subject<boolean>();//Sends data onChange

  constructor( 
    private router: Router,
    private afauth: AngularFireAuth, 
    private trainSer: TrainingService,
    private snackbar: MatSnackBar
   ) { }
  
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
        this.snackbar.open(err.message, 'Dismiss', {
          duration: 4000
        })
      });
  }

  login(authdata: AuthData )
  {
    this.afauth
    .auth.signInWithEmailAndPassword(authdata.email, authdata.password).then(res => {
      console.log(res);
    })
    .catch( err=> {
      this.snackbar.open(err.message, 'Dismiss', {
        duration: 4000
      })
    });
  }
  
  logout()
  {
    this.afauth.auth.signOut();
  }

  isAuth()
  {
    return this.isAuthenticated;
  }
  
  initAuthListener()
  {
    this.afauth.authState.subscribe( user => {
      if(user){
        this.isAuthenticated = true;
        this.authChange.next(true);
        this.router.navigate(['/training']);
      }
      else {
        this.trainSer.cancelSubscriptions();
        this.authChange.next(false);
        this.router.navigate(['/login']);
        this.isAuthenticated = false;
      }
    });
  }

}