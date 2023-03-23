import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { QRepoService } from 'src/app/shared/q-repo.service';
import { Question } from 'src/app/shared/question';
import { QListItemComponent } from '../questions/q-list-item/q-list-item.component';

@Component({
  selector: 'll-check-mode',
  templateUrl: './check-mode.component.html',
  styleUrls: ['./check-mode.component.css']
})
export class CheckModeComponent {
  question$: Observable<Question>;
  @Output() selectQuestion = new EventEmitter<Question>();

constructor(
  private service: QRepoService,
  private route: ActivatedRoute,
  private router: Router
){
  const qid = this.route.snapshot.paramMap.get('qid')!;
  this.question$ = this.service.getSingle(qid);
  this.selectQuestion.emit(question$)
}

}
