import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { QRepoService } from 'src/app/shared/q-repo.service';
import { Question } from 'src/app/shared/question';

@Component({
  selector: 'll-q-details',
  templateUrl: './q-details.component.html',
  styleUrls: ['./q-details.component.css']
})
export class QDetailsComponent {
question$: Observable<Question>;

constructor(
  private service: QRepoService,
  private route: ActivatedRoute,
  private router: Router
){
  const qid = parseInt(this.route.snapshot.paramMap.get('qid')!);
  this.question$ = this.service.getSingle(qid);
}
}
