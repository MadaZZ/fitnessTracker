import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable, Subscription } from 'rxjs'; 
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {

  exerciseList: Exercise[];
  exerciseSubs: Subscription;
    
  constructor( private trainser: TrainingService, private db: AngularFirestore ) { }
  
  
  beginNewTraining(form: NgForm) 
  {
    this.trainser.startExercise(form.value.exercise);
  }

  
  ngOnInit() //Gets the list of exercises available to do
  {
    this.exerciseSubs = this.trainser.exercisesChanged.subscribe( exercises => {
      this.exerciseList = exercises;
    });
    this.trainser.getAvailableExercises();
    // .subscribe(result => {
    //   console.log(result);
    // });
  }

  ngOnDestroy() 
  {
    this.exerciseSubs.unsubscribe();
  }

}
