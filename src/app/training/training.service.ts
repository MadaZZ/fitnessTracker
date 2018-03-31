import { Injectable } from '@angular/core';
import { Exercise } from './exercise.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TrainingService {
  exerciseChanged = new Subject<Exercise>();

  private availableExercises : Exercise[] = [
    { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
    { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15 },
    { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18 },
    { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 }
  ];

  private runningExcercise: Exercise;
  private storedExercise: Exercise[];

  getAvailableExercises()
  {
    return this.availableExercises.slice();
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
    this.storedExercise.push({...this.runningExcercise, 
      date: new Date(), 
      state: 'complete' 
    }); //Pushed object to array for past exercises
    this.runningExcercise = null;
    this.exerciseChanged.next(null);
  }

  cancelTraining(progress: number){
    this.storedExercise.push({...this.runningExcercise, 
      duration : this.runningExcercise.duration * (progress/100), 
      calories : this.runningExcercise.calories * (progress/100), 
      date: new Date(), 
      state: 'cancelled' 
    }); //Pushed object to array for past exercises
    
    this.runningExcercise = null;
    this.exerciseChanged.next(null);
  }

  constructor() { }

}
