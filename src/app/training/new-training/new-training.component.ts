import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  @Output() trainingStart = new EventEmitter<void>();
  
  beginNewTraining(){
    this.trainingStart.emit();
  }
  constructor( private trainser: TrainingService ) { }
  exerciseList: Exercise[];
  ngOnInit() {
    this.exerciseList = this.trainser.getAvailableExercises();
  }

}
