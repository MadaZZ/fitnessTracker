import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { TrainingService } from '../training.service';
import { MatTableDataSource, MatSort, MatPaginator }  from '@angular/material';
import { Exercise } from '../exercise.model';
import { AngularFirestore } from 'angularfire2/firestore';
import { Subscription } from 'rxjs'; 
import { UIService } from '../../shared/ui.service'

@Component({
  selector: 'app-past-training',
  templateUrl: './past-training.component.html',
  styleUrls: ['./past-training.component.css']
})
export class PastTrainingComponent implements OnInit, AfterViewInit {
  displayedColumns = ['date', 'name', 'calories', 'duration', 'state'];
  dataSource = new MatTableDataSource<Exercise>();
  
  //isLoading = false;
  
  exerciseSubs: Subscription;
  loadingSubs: Subscription;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor( 
    private trainser: TrainingService, 
    private db: AngularFirestore
   // private uiSer: UIService
   ) { }

  ngOnInit() 
  {
    // this.loadingSubs = this.uiSer.loadingStateChange.subscribe( isloading =>{
    //   this.isLoading = isloading;
    // });

    this.exerciseSubs = this.trainser.finishedExerciseChanged.subscribe( (exercises: Exercise[]) => {
       this.dataSource.data = exercises;
      //console.log(this.dataSource.data);
    });
    //console.log(this.dataSource.data);
    this.trainser.getStoredExercises();
  }

  ngAfterViewInit() 
  {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) 
  {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  ngOnDestroy() 
  {
    this.exerciseSubs.unsubscribe();  
    //this.loadingSubs.unsubscribe();
  }
}

