import { Injectable, OnInit } from '@angular/core';
import { Exercise } from './exercise.model';
import { Subject } from 'rxjs/Subject';
import { AngularFirestore } from 'angularfire2/firestore';
import { Subscription } from 'rxjs';
import { UIService } from '../shared/ui.service';
import { AngularFireAuth } from 'angularfire2/auth'; 

@Injectable()
export class TrainingService implements OnInit {
  exerciseChanged = new Subject<Exercise>();
  exercisesChanged = new Subject<Exercise[]>(); //Gets the exercises that are already defined to show on new-training option
  finishedExerciseChanged = new Subject<Exercise[]>(); //array of finished exercises

  private fbsubs: Subscription[] = [];

  private availableExercises : Exercise[] = [];//array of exercises that can be selected
  private runningExcercise: Exercise;
  
  private myuserID : string;

  constructor( 
    private db: AngularFirestore,
    private uiSer: UIService,
    private afAuth: AngularFireAuth
   ) { }
   
   ngOnInit(): void { 
   }

   
  getStoredExercises(){ //Gets finished exercises
    this.uiSer.loadingStateChange.next(true);
    const loggedInUserId = this.afAuth.auth.currentUser.email;
    this.fbsubs.push(this.db
    .collection(loggedInUserId+'finishedExercises')
    .valueChanges() //--> Gives only values not the names
    .subscribe( (exercises: Exercise[]) => {
      //console.log(exercises);
      this.finishedExerciseChanged.next(exercises);
      this.uiSer.loadingStateChange.next(false);
    }, err => {
      this.uiSer.loadingStateChange.next(false);
      this.uiSer.showSnackbar(err.message, null, 4000)
      //console.log(err);
    }));
  }

  getAvailableExercises() //gets exercises that are displayed in new
  {
    this.uiSer.loadingStateChange.next(true);
    this.fbsubs.push(this.db
    .collection('availableExercises')
    .snapshotChanges()// gives both values and names but values need to be extracted by using command        //.valueChanges() --> Gives only values not the names
    .map(docData =>{
      //throw (Error())
      return docData.map(dochere =>{
        return {
          id: dochere.payload.doc.id,
          ...dochere.payload.doc.data() // array of values
        };
      });
    })
    .subscribe( (exercises: Exercise[]) => {
      this.availableExercises = exercises;
      this.exercisesChanged.next([...this.availableExercises]);
      this.uiSer.loadingStateChange.next(false);
    }, err => {
      this.uiSer.loadingStateChange.next(false);
      this.uiSer.showSnackbar('Data could not be fetched from the database', 'Dismiss', 4000);
      this.exercisesChanged.next(null);
      //console.log(err);
    }));
  }

  cancelSubscriptions() //pushed subscription in fbsubs are unsubscribed here due to the error it throws
  {
    this.fbsubs.forEach( sub => sub.unsubscribe());
  }

  startExercise(selectedId: string)
  {
    //this.db.doc('availableExercises/'+selectedId).update({lastSelected: new Date()}); //This command makes changes in a document
    this.runningExcercise = this.availableExercises.find(ex => ex.id === selectedId);
    this.exerciseChanged.next({...this.runningExcercise}); //returns running exercise in an array format of its own
  }

  getRunningExercise()
  {
    return {...this.runningExcercise};
  }

  completedTraining()
  {
    this.addDataToDatabase({...this.runningExcercise, 
      date: new Date(), 
      state: 'complete' 
    }); //Pushed object to function for adding data to db
    //console.log(this.storedExercise);
    this.runningExcercise = null;
    this.exerciseChanged.next(null);
  }

  cancelTraining(progress: number)
  {
    this.addDataToDatabase({...this.runningExcercise, 
      duration : this.runningExcercise.duration * (progress/100), 
      calories : this.runningExcercise.calories * (progress/100), 
      date: new Date(), 
      state: 'cancelled' 
    }); //Pushed object to function for adding data to db
    //console.log(this.storedExercise); 
    this.runningExcercise = null;
    this.exerciseChanged.next(null);
  }

  //Function to add data to db
  private addDataToDatabase(exercise: Exercise)
  {
    const loggedInUserId = this.afAuth.auth.currentUser.email;
    this.db.collection(loggedInUserId+'finishedExercises').add(exercise);
  }

}
