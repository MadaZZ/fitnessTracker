import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';//Imported to use animations

import { MaterialModule } from './material.module';// CONTAINS ALL MATERIAL MODULES 

import { FlexLayoutModule } from '@angular/flex-layout';//for using flexlayout
import { FormsModule } from '@angular/forms'//to import reactive form

//services
import { AuthService } from './auth/auth.service';
import { TrainingService } from './training/training.service';
import { UIService } from './shared/ui.service';

//angularfire2 modules 
import { AngularFireModule } from 'angularfire2';//imported angularfire to connect to firebase
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';

//All the components created are below
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';

//Routing
import { AppRoutingModule } from './app-routing.module';

//Modules that store components
import { AuthModule } from './auth/auth.module'; //Has the components of login and signup
//import { TrainingModule } from './training/training.module'; //Has all the training components

import { StoreModule } from '@ngrx/store';
import { appReducer } from './app.reducer';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AuthModule,
    AngularFirestoreModule,
    StoreModule.forRoot({ui: appReducer})
  ],
  providers: [
    AuthService,
    TrainingService,
    UIService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
