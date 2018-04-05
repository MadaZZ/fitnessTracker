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
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';//importing firestore
import { AngularFireAuthModule } from 'angularfire2/auth';//importing auth

//All the components created are below
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { TrainingComponent } from './training/training.component';
import { CurrentTrainingComponent } from './training/current-training/current-training.component';
import { NewTrainingComponent } from './training/new-training/new-training.component';
import { PastTrainingComponent } from './training/past-training/past-training.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { StopTrainingComponent } from './training/current-training/stop-training/stop-training.component';

//Routing
import { AppRoutingModule } from './app-routing.module';
import { TrainingRoutingModule } from './training/training-routing/training-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    TrainingComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent,
    StopTrainingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    TrainingRoutingModule
  ],
  providers: [
    AuthService,
    TrainingService,
    UIService
    
  ],
  bootstrap: [AppComponent],
  entryComponents: [StopTrainingComponent]//This component is not called by routing or diplayed in any other component so it has to be indicated to angular//Used in Dialog in current-excersise
})
export class AppModule { }
