import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsRoutingModule } from './questions-routing.module';
import { QDetailsComponent } from './q-details/q-details.component';
import { QListItemComponent } from './q-list-item/q-list-item.component';
import { QListComponent } from './q-list/q-list.component';

@NgModule({
  declarations: [ 
    QListComponent,
    QListItemComponent,
    QDetailsComponent],
  imports: [
    CommonModule,
    QuestionsRoutingModule,
   
  ],

})
export class QuestionsModule { }
