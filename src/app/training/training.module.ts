import { NgModule } from '@angular/core';

import { TrainingComponent } from './training.component';
import { CurrentTrainingComponent } from './current-training/current-training.component';
import { NewTrainingComponent } from './new-training/new-training.component';
import { PastTrainingComponent } from './past-training/past-training.component';
import { StopTrainingComponent } from '../training/current-training/stop-training/stop-training.component'

import { SharedModule } from '../shared/shared.module';
import { TrainingRoutingModule } from './training-routing.module';

@NgModule({
  imports: [
    SharedModule,
    TrainingRoutingModule
  ],
  exports: [],
  declarations: [
    TrainingComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingComponent,
    StopTrainingComponent
  ],
  entryComponents: [StopTrainingComponent]//This component is not called by routing or diplayed in any other component so it has to be indicated to angular//Used in Dialog in current-excersise
})
export class TrainingModule { }
