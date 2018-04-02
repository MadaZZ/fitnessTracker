import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs'; 

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  
  beginNewTraining(form: NgForm){
    this.trainser.startExercise(form.value.exercise);
  }
  
  constructor( private trainser: TrainingService, private db: AngularFirestore ) { }
  
  exerciseList: Observable<any>;

  ngOnInit() {
    this.exerciseList = this.db
    .collection('availableExercises')
    .valueChanges()
    // .subscribe(result => {
    //   console.log(result);
    // });
  }

}
