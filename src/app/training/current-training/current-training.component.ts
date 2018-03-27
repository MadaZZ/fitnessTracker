import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  progress = 0;
  timer : any; 
  constructor() { }

  ngOnInit() {
    this.timer = setInterval(() => {
      this.progress=this.progress+1;
      if(this.progress>=100){
        clearInterval(this.timer);
      }
    }, 200)
  }
  stopTraining(){
    clearInterval(this.timer);
  }
}
