import { Injectable, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { Subject } from 'rxjs/Subject';
import { AngularFireAuth } from 'angularfire2/auth'; 
import { TrainingService } from '../training/training.service';
import { UIService } from '../shared/ui.service';

@Injectable()
export class AuthService {
  
  private isAuthenticated = false ;
  
  authChange = new Subject<boolean>();//Sends data onChange

  constructor( 
    private router: Router,
    private afauth: AngularFireAuth, 
    private trainSer: TrainingService,
    private uiSer: UIService
   ) { }
  
  registerUser(authdata: AuthData)
  {
    this.uiSer.loadingStateChange.next(true);
    this.afauth
    .auth.createUserWithEmailAndPassword(
      authdata.email, 
      authdata.password
    ).then(res => {
        console.log(res);
        this.uiSer.loadingStateChange.next(false);
      })
      .catch( err=> {
        this.uiSer.loadingStateChange.next(false);
        this.uiSer.showSnackbar(err.message, 'Dismiss', 4000);
      });
  }

  login(authdata: AuthData )
  {
    this.uiSer.loadingStateChange.next(true);
    this.afauth
    .auth.signInWithEmailAndPassword(authdata.email, authdata.password).then(res => {
      //console.log(res);
      this.uiSer.loadingStateChange.next(false);
    })
    .catch( err=> {
      this.uiSer.loadingStateChange.next(false);
      this.uiSer.showSnackbar(err.message, 'Dismiss', 4000);
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

  getUID()
  {
    return this.afauth.auth.currentUser.uid;
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