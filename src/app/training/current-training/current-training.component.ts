import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { StopTrainingComponent } from './stop-training/stop-training.component';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  @Output() stopTrainingFlag = new EventEmitter(); 
  progress = 0;
  timer : any; 
  
  constructor(private dialog: MatDialog, private trainser: TrainingService) { }

  ngOnInit() { 
    this.timerCount()
  }

  //Counts the time on progress spinner
  timerCount(){
    const step = this.trainser.getRunningExercise().duration / 100 * 1000;
    this.timer = setInterval(() => {
      this.progress=this.progress+1;
      if(this.progress>=100){
        clearInterval(this.timer);
      }
    }, step);
  }
  
  stopTraining(){
    clearInterval(this.timer);
    const dialogRef = this.dialog.open(StopTrainingComponent, {
      data : {
      progress: this.progress
      }
    });
    dialogRef.afterClosed().subscribe(result =>{
      if(result){
        this.stopTrainingFlag.emit();
      }
      else{
        this.timerCount();
      }
    });
  }

}
