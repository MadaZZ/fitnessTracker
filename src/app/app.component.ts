import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fitness Tracker';

  constructor( private authSer: AuthService ) {}

  ngOnInit()
  {
    this.authSer.initAuthListener();  // This calls the authlistener which verifies auth state to allow acces or not
  }
}
