import { Component } from '@angular/core';
import { ACheckService } from '../a-check.service';
import { Question } from '../shared/question';

@Component({
  selector: 'll-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
  wrongAns: number =0;
  ignoredQ: number = 0;
  answers: Question[] = []
wrongAnsEM: number = 0;
ignoredQEM: number = 0;
  constructor (private aCheckService: ACheckService){
    this.wrongAns = this.aCheckService.wrongACM;
    this.ignoredQ = this.aCheckService.skipedQCM;
    this.wrongAnsEM = this.aCheckService.wrongAEM;
    this.ignoredQEM = this.aCheckService.skipedAEM;
    this.answers = this.aCheckService.getAnswers();
  }
 
}
