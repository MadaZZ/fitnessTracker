import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { TrainingService } from '../training.service';
import { MatTableDataSource, MatSort }  from '@angular/material';
import { Exercise } from '../exercise.model';
@Component({
  selector: 'app-past-training',
  templateUrl: './past-training.component.html',
  styleUrls: ['./past-training.component.css']
})
export class PastTrainingComponent implements OnInit, AfterViewInit {
  displayedColumns = ['date', 'name', 'calories', 'duration', 'state'];
  dataSource = new MatTableDataSource<Exercise>();

  @ViewChild(MatSort) sort: MatSort;

  constructor( private trainser: TrainingService ) { }

  ngOnInit() {
    this.dataSource.data = this.trainser.getStoredExercises();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

}