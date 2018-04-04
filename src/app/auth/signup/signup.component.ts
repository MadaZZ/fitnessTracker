import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { UIService } from '../../shared/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  maxDate;
  minDate;

  isLoading = false;
  loadSubs: Subscription;
  
  constructor(
    private authser: AuthService,
    private uiSer: UIService
  ) { }

  ngOnInit() {
    this.loadSubs = this.uiSer.loadingStateChange.subscribe( isloading =>{
      this.isLoading = isloading;
    });

    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
    this.minDate = new Date();
    this.minDate.setFullYear(this.minDate.getFullYear() - 100);
  }
  hide=true;

  submit(form : NgForm){
    this.authser.registerUser({
      email: form.value.email,
      password: form.value.password
    })
  }

  // submit(form: NgForm){
  //   console.log(form); 
  // } 
}
