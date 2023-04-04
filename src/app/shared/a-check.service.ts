import { Injectable } from '@angular/core';
import { Question } from '../shared/question';

@Injectable({
  providedIn: 'root'
})
export class ACheckService {

  answers: Question[] = [];
  skipedQCM = 0;
  wrongACM = 0;
  allowdWrongACM = 7;

  wrongAEM = 0;
  skipedAEM = 0;
  correctAEM = 0;
  qCountEM = 0;
  minScoreEM = 20; //%
  setAnswer(answer : Question){
    const existAns= this.answers.find(a => a.qid === answer.qid);
    const existAnsIndex = this.answers.findIndex(a=> a.qid === answer.qid);
    if(existAns?.qid === answer.qid){
    this.answers[existAnsIndex] = answer;
  }else{
    this.answers.push(answer);
  }
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
    console.log('answer', this.answers);
    
    return [
      {
        'txt': 'score',
        'value':this.calcScoreEM()
      }
    ]
  }
  
}
