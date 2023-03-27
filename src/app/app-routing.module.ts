import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckModeComponent } from './check-mode/check-mode.component';
import { ExamModeComponent } from './exam-mode/exam-mode.component';
import { HomeComponent } from './home/home.component';
import { QDetailsComponent } from './questions/q-details/q-details.component';
import { QListComponent } from './questions/q-list/q-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'check_mode/:qid',
    component: CheckModeComponent,
    pathMatch: 'full'
  },
  {
    path: 'check_mode',
    redirectTo: 'check_mode/1',
    pathMatch: 'full'
  },
  {
    path: 'exam_mode',
    component: ExamModeComponent,
  }
  // {
  //   path:'questions',
  //   component: QListComponent
  // },
  // {
  //   path: 'questions/:id',
  //   component: QDetailsComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
