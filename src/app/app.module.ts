import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { QuestionsModule } from './questions/questions.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatSidenavModule} from '@angular/material/sidenav'
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule} from '@angular/material/button';
import { CheckModeComponent } from './check-mode/check-mode.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { ExamModeComponent } from './exam-mode/exam-mode.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CheckModeComponent,
    DialogComponent,
    ExamModeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    QuestionsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatDialogModule
  ],
 

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
