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
  qType = 'qAll';
  CorrectAns = '';
  showAnswer = false;
  id:string | undefined;

  handelCorrect($event: string) {
    this.CorrectAns = $event;
    console.log($event);
  }
  showClick() {
    this.showAnswer = true;
  }
  ngOnInit(){
    this.service.Type.subscribe(data => {
         this.qType = data;
         const qid = this.route.snapshot.paramMap.get('qid')!;
         this.id = qid;
         this.question$ = this.service.getSingle(qid,this.qType);

        //  console.log("qType",this.qType);
     });
  }

  constructor(
    private service: QRepoService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // this.qType = this.service.getQType();
    const qid = this.route.snapshot.paramMap.get('qid')!;
    this.question$ = this.service.getSingle(qid, this.qType);
  }

  backClick() {
    const qid = this.route.snapshot.paramMap.get('qid')!;
    const qidn = parseInt(qid) - 1;
    this.router.navigate(['/questions', qidn.toString()])
    this.question$ = this.service.getSingle(qidn.toString(), this.qType);
  }

  nextPage() {

    const qid = this.route.snapshot.paramMap.get('qid')!;
    const qidn = parseInt(qid) + 1;
    this.router.navigate(['/questions', qidn.toString()])
    this.question$ = this.service.getSingle(qidn.toString(), this.qType);


  }

  nextClick() {
    this.showAnswer=false;
    this.nextPage()
  }
  
}
