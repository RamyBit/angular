import { Component, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { QRepoService } from 'src/app/shared/q-repo.service';
import { Question } from 'src/app/shared/question';
import { QListItemComponent } from '../questions/q-list-item/q-list-item.component';
import { Qanswer } from '../shared/qanswer';

@Component({
  selector: 'll-check-mode',
  templateUrl: './check-mode.component.html',
  styleUrls: ['./check-mode.component.css'],
})
export class CheckModeComponent {
  question$: Observable<Question>;
  @ViewChild (QListItemComponent, {static : true}) child? : QListItemComponent;

  constructor(
    private service: QRepoService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    const qid = this.route.snapshot.paramMap.get('qid')!;
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
    
    console.log($event);
  }
  // nextClick(){
  //   let answers: Qanswer[]|null; 
  //   answers = this.child.getAnswers();
  //   console.log()
  // }


}