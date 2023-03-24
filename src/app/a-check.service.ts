import { Injectable } from '@angular/core';
import { Qanswer } from './shared/qanswer';
import { Question } from './shared/question';

@Injectable({
  providedIn: 'root'
})
export class ACheckService {

  answers: Question[] = [];
  setAnswer(answer : Question){
    this.answers.push(answer);
  }
  getAnswers(): Question[]{
    return this.answers;
  }
  getSingleAnswer(qid: string): Question | undefined{
    return this.answers.find((q: Question) => q.qid=== parseInt(qid));
  }
}
