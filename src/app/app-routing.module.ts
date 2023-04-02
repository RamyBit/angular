import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckModeComponent } from './check-mode/check-mode.component';
import { ExamModeComponent } from './exam-mode/exam-mode.component';
import { HomeComponent } from './home/home.component';
import { LearnModeComponent } from './learn-mode/learn-mode.component';
import { QDetailsComponent } from './questions/q-details/q-details.component';
import { QListComponent } from './questions/q-list/q-list.component';
import { ResultComponent } from './result/result.component';
import { SummaryComponent } from './summary/summary.component';

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
  },
  {
    path: 'result',
    component: ResultComponent
  },
  {
    path: 'learn_mode',
    component: LearnModeComponent,
  },
  {
    path: 'summary',
    component: SummaryComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
