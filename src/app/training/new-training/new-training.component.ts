import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  
  beginNewTraining(form: NgForm){
    this.trainser.startExercise(form.value.exercise);
  }
  
  constructor( private trainser: TrainingService ) { }
  
  exerciseList: Exercise[];

  ngOnInit() {
    this.exerciseList = this.trainser.getAvailableExercises();
  }

}
