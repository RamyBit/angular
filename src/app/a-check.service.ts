import { Injectable } from '@angular/core';
import { Qanswer } from './shared/qanswer';

@Injectable({
  providedIn: 'root'
})
export class ACheckService {

  answers: Qanswer[] | undefined;
  setAnswer(answer : Qanswer){
    this.answers?.push(answer);
  }
}
