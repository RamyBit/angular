import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { QRepoService } from '../../shared/q-repo.service';
import { Question } from '../../shared/question';


@Component({
  selector: 'll-q-list',
  templateUrl: './q-list.component.html',
  styleUrls: ['./q-list.component.css']
})
export class QListComponent {
  questions$: Observable<Question[]>;
  questions: any;
  @Output() selectQuestion = new EventEmitter<Question>();
  
  constructor(private service: QRepoService){
    this.questions$ = this.service.getAll();
    console.log(this.questions$);
  }
  // ngOnInit(){
  //   this.service.getAll().subscribe(data => {
  //        this.questions = data;
  //    });
  // }
  doSelect(question: Question){
    this.selectQuestion.emit(question)
  }
}
