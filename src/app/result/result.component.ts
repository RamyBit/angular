import { Component } from '@angular/core';
import { ACheckService } from '../a-check.service';

@Component({
  selector: 'll-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  wrongAns: number =0;
  ignoredQ: number = 0;
  score: number = 0;
  constructor (private aCheckService: ACheckService){
    this.wrongAns = this.aCheckService.wrongAEM;
    this.ignoredQ = this.aCheckService.skipedAEM;
    this.score = this.aCheckService.getScoreEM()[0].value;
  }
  ngOnDestroy(){
    this.aCheckService.answers = [];
  }
}
