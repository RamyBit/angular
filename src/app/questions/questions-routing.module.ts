import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QDetailsComponent } from './q-details/q-details.component';
import { QListComponent } from './q-list/q-list.component';


const routes: Routes = [
  {
    path: 'question',
    component: QListComponent,
  },
  {
    path: 'questions/:qid',
    component: QDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionsRoutingModule { }
