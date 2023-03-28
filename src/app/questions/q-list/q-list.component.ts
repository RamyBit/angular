import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { QRepoService } from '../../shared/q-repo.service';
import { Question } from '../../shared/question';



@Component({
  selector: 'll-q-list',
  templateUrl: './q-list.component.html',
  styleUrls: ['./q-list.component.css']
})
export class QListComponent{
  questions$: Observable<Question[]>;
  qType$: Observable<string> | undefined;
  qType = 'qAll';
  questions: any;
  @Output() selectQuestion = new EventEmitter<Question>();
  constructor(private service: QRepoService){
    this.questions$ = this.service.getAll(this.qType);
    console.log(this.questions$);
  }
  ngOnInit(){
    this.service.Type.subscribe(data => {
         this.qType = data;
         this.questions$ = this.service.getAll(this.qType);
     });
  }
  doSelect(question: Question){
    this.selectQuestion.emit(question)
  }
  
}
