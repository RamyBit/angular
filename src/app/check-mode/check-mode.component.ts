import { Component, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { QRepoService } from 'src/app/shared/q-repo.service';
import { Question } from 'src/app/shared/question';
import { ACheckService } from '../a-check.service';
import { QListItemComponent } from '../questions/q-list-item/q-list-item.component';
import { Qanswer } from '../shared/qanswer';

@Component({
  selector: 'll-check-mode',
  templateUrl: './check-mode.component.html',
  styleUrls: ['./check-mode.component.css'],
})
export class CheckModeComponent {
  question$: Observable<Question>;
  answers$: Observable<Qanswer[]> | undefined;
  answers: Question[] = [];
  @ViewChild (QListItemComponent, {static : true}) child? : QListItemComponent;
  id : string;
  constructor(
    private service: QRepoService,
    private aCheckService: ACheckService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.answers=this.aCheckService.getAnswers();
    const qid = this.route.snapshot.paramMap.get('qid')!;
    this.id = qid;
    this.question$ = this.service.getSingle(qid);
    // router.events.subscribe(e => {
    //   if (e instanceof NavigationStart){
    //      qid = this.route.snapshot.paramMap.get('qid')!;
    //     this.question$ = this.service.getSingle(qid);

    //   }
    // })
  }
  // ngOnInit(){
  //   const qid = this.route.snapshot.paramMap.get('qid')!;
  //   this.question$= this.service.getSingle(qid);
  // }
  backClick() {
    const qid = this.route.snapshot.paramMap.get('qid')!;
    const qidn = parseInt(qid) -1;
    console.log(qidn);
    this.router.navigate(['/check_mode', qidn.toString()])
    this.question$ = this.service.getSingle(qidn.toString());
  }
  skipClick() {
    const qid = this.route.snapshot.paramMap.get('qid')!;
    const qidn = parseInt(qid) + 1;
    console.log(qidn);
    this.router.navigate(['/check_mode', qidn.toString()])
    this.question$ = this.service.getSingle(qidn.toString());
  }

  nextClick(){
    let ans : Question | undefined;
    

    ans = this.aCheckService.getSingleAnswer(this.id);
    // map((q : Question) => q.qid === parseInt(qid))).find(qa => qa.qanswers);
  
    console.log(ans);
  }
  // nextClick(){
  //   let answers: Qanswer[]|null; 
  //   answers = this.child.getAnswers();
  //   console.log()
  // }


}