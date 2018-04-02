import { Injectable } from '@angular/core';
import { Exercise } from './exercise.model';
import { Subject } from 'rxjs/Subject';
import { AngularFirestore } from 'angularfire2/firestore';
//import { Observable } from 'rxjs';

@Injectable()
export class TrainingService {
  exerciseChanged = new Subject<Exercise>();
  
  exercisesChanged = new Subject<Exercise[]>();
  private availableExercises : Exercise[] = [];

  private runningExcercise: Exercise;
  private storedExercise: Exercise[] = [];

  constructor( private db: AngularFirestore ) { }

  getStoredExercises(){
    return this.storedExercise.slice();
  }

  getAvailableExercises()
  {
    this.db
    .collection('availableExercises')
    .snapshotChanges()// gives both values and names but values need to be extracted by using command        //.valueChanges() --> Gives only values not the names
    .map(docData =>{
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
    })
  }

  startExercise(selectedId: string)
  {
    this.runningExcercise = this.availableExercises.find(ex => ex.id === selectedId);
    this.exerciseChanged.next({...this.runningExcercise}); //returns running exercise in an araay format of its own
  }

  getRunningExercise()
  {
    return {...this.runningExcercise};
  }

  completedTraining(){
    this.addDataToDatabase({...this.runningExcercise, 
      date: new Date(), 
      state: 'complete' 
    }); //Pushed object to function for adding data to db
    //console.log(this.storedExercise);
    this.runningExcercise = null;
    this.exerciseChanged.next(null);
  }

  cancelTraining(progress: number){
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
  private addDataToDatabase(exercise: Exercise){
    this.db.collection('finishedExercise').add(exercise);
  }

}
