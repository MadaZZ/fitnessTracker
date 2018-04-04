//For global UI services
 //To handle the display of spinner while loading etc
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material'


@Injectable()
export class UIService {
  loadingStateChange = new Subject<boolean>(); //This is handles in th authservice that further handles spinner on login and signup screen 
  constructor(
    private snackbar: MatSnackBar
  ) { }
  
  showSnackbar(message, action, duration){
    this.snackbar.open(message, action, {
      duration: duration
    });
  }

}
