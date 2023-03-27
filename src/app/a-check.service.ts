import { Injectable } from '@angular/core';
import { Qanswer } from './shared/qanswer';
import { Question } from './shared/question';

@Injectable({
  providedIn: 'root'
})
export class ACheckService {

  answers: Question[] = [];
  skipedQCM = 0;
  wrongACM = 0;
  allowdWrongACM = 7;

  correctAEM = 0;
  qCountEM = 1;
  minScoreEM = 20; //%
  setAnswer(answer : Question){
    this.answers.push(answer);
  }
  getAnswers(): Question[]{
    return this.answers;
  }
  getSingleAnswer(qid: string): Question | undefined{
    return this.answers.find((q: Question) => q.qid=== parseInt(qid));
  }
  checkWrongACM(): boolean{
    if(this.wrongACM >= this.allowdWrongACM){
      return true;
    }else{
      return false;
    }
  }
  getCMStats(){
    return[
      {
      'txt':'Wrong Answer',
      'value':this.wrongACM,
    },{
      'txt': 'Skiped Answer',
      'value': this.skipedQCM,
    }
  ]
  }
  checkScoreEM(){
    if(this.calcScoreEM() <= this.minScoreEM){
      return true;
    }else{
      return false;
    }
  }
  calcScoreEM(): number{
    return Math.round((this.correctAEM/this.qCountEM) * 100)
  }
  getScoreEM(){
    
    return [
      {
        'txt': 'score',
        'value':this.calcScoreEM()
      }
    ]
  }
  
}
