import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { UIService } from '../../shared/ui.service';
import { Subscription } from 'rxjs/Subscription';

//To add state management
import { Store } from '@ngrx/store';
import * as fromApp from '../../app.reducer';// to import anythin from the given file path


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide=true; // For hinding and showing the password on clicking the icon
  isLoading = false;

  private loadingSub: Subscription;

  constructor(
    private authser: AuthService,
    private uiSer: UIService,
    private store: Store< {ui: fromApp.State} >
  ) { }

  ngOnInit()
  {
    this.loadingSub  = this.uiSer.loadingStateChange.subscribe( isloading => {
      this.isLoading = isloading;
    });
  }

  submit(form: NgForm)
  {
    this.authser.login({
      email: form.value.email,
      password : form.value.password
    });
  }

  ngOnDestroy(): void
  {
    if(this.loadingSub)
    {
    this.loadingSub.unsubscribe();
    }
  }
  

}
