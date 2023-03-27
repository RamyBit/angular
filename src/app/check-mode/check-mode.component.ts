import { Component, Input, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { QRepoService } from 'src/app/shared/q-repo.service';
import { Question } from 'src/app/shared/question';
import { ACheckService } from '../a-check.service';
import { DialogComponent } from '../dialog/dialog.component';
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
  stats: any;
  @ViewChild(QListItemComponent, { static: true }) child?: QListItemComponent;
  id: string;
  constructor(
    private service: QRepoService,
    private aCheckService: ACheckService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
  ) {
    this.answers = this.aCheckService.getAnswers();
    const qid = this.route.snapshot.paramMap.get('qid')!;
    this.id = qid;
    this.question$ = this.service.getSingle(qid);
    this.stats = this.aCheckService.getCMStats();
    if(this.aCheckService.checkWrongACM()){
      this.openDialog();
    }
    
    // router.events.subscribe(e => {
    //   if (e instanceof NavigationStart){
    //      qid = this.route.snapshot.paramMap.get('qid')!;
    //     this.question$ = this.service.getSingle(qid);

    //   }
    // })
  }
  ngOnChange(){
  //   const qid = this.route.snapshot.paramMap.get('qid')!;
  //   this.question$= this.service.getSingle(qid);
  // this.stats = this.aCheckService.getCMStats();
  // if(this.aCheckService.checkWrongACM()){
  //   this.openDialog();
  // }
  }
  backClick() {
    const qid = this.route.snapshot.paramMap.get('qid')!;
    const qidn = parseInt(qid) - 1;
    console.log(qidn);
    this.router.navigate(['/check_mode', qidn.toString()])
    this.question$ = this.service.getSingle(qidn.toString());
  }
  skipClick() {
    this.openDialog();
    this.aCheckService.skipedQCM ++;
    this.nextPage();
  }
  nextPage(){
    if(this.aCheckService.checkWrongACM()){
      this.openDialog();
    }
    const qid = this.route.snapshot.paramMap.get('qid')!;
    const qidn = parseInt(qid) + 1;
    this.router.navigate(['/check_mode', qidn.toString()])
    this.question$ = this.service.getSingle(qidn.toString());
    this.stats= this.aCheckService.getCMStats();
    
  }

  nextClick() {
    const qid = this.route.snapshot.paramMap.get('qid')!;
    let ans: Question | undefined;
    ans = this.aCheckService.getSingleAnswer(qid);
    // map((q : Question) => q.qid === parseInt(qid))).find(qa => qa.qanswers);
    console.log(ans);
    console.log('ans.acorrect',ans?.acorrect);
    if (ans?.acorrect) {
      this.nextPage();
    }else{
      this.aCheckService.wrongACM++;
      this.stats = this.aCheckService.getCMStats;
      this.nextPage();
    }

  }
  // ngOninit(){
  //   if(this.aCheckService.checkWrongACM()){
  //     this.openDialog();
  //   }
  // }
  openDialog(){
    this.dialog.open(DialogComponent);
  }
  // nextClick(){
  //   let answers: Qanswer[]|null; 
  //   answers = this.child.getAnswers();
  //   console.log()
  // }


}