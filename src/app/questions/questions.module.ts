import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsRoutingModule } from './questions-routing.module';
import { QDetailsComponent } from './q-details/q-details.component';
import { QListItemComponent } from './q-list-item/q-list-item.component';
import { QListComponent } from './q-list/q-list.component';
import { MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatIconModule} from '@angular/material/icon'; 
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card'; 
import { QButtonToggleComponent } from '../q-button-toggle/q-button-toggle.component';

@NgModule({
  declarations: [ 
    QListComponent,
    QListItemComponent,
    QDetailsComponent],
  imports: [
    CommonModule,
    QuestionsRoutingModule,
    MatCheckboxModule,
    MatRadioModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatCardModule,   
  ],
  exports:[
    QListItemComponent
  ]

})
export class QuestionsModule { }
