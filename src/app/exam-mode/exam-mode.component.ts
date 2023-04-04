import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ACheckService } from '../shared/a-check.service';
import { DialogComponent } from '../dialog/dialog.component';
import { QRepoService } from '../shared/q-repo.service';
import { Qanswer } from '../shared/qanswer';
import { Question } from '../shared/question';

@Component({
  selector: 'll-exam-mode',
  templateUrl: './exam-mode.component.html',
  styleUrls: ['./exam-mode.component.css']
})
export class ExamModeComponent {
  question$: Observable<Question>;
  answers$: Observable<Qanswer[]> | undefined;
  answers: Question[] = [];
  stats: any;
  index = 0;//0
  maxQ = 60;
  qType = 'qAll';
  isNotAllowed = false;
  private rndQList: number[] = [];
  choices: number[] = [20, 40, 60, 80, 100, 120];

  constructor(
    private service: QRepoService,
    private aCheckService: ACheckService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
  ) {

    this.aCheckService.answers=[];
    this.rndGen();
    this.answers = this.aCheckService.getAnswers();
    const qid = this.getQid();
    this.question$ = this.service.getSingle(qid, this.qType);
    this.stats = this.aCheckService.getScoreEM();

  }

  getQid(): string {
    if (this.index >= this.rndQList.length) {
      console.log("ended");
      this.router.navigate(['result']);
      return this.maxQ.toString();
    } else {
      return this.rndQList[this.index].toString();
    }
  }
  backClick() {
    const qid = this.getQid();
    const qidn = parseInt(qid) - 1;
    this.question$ = this.service.getSingle(qidn.toString(), this.qType);
  }
  resetClick() {
    window.location.reload();
  }
  nextQ() {
    if (this.aCheckService.checkScoreEM()) {
      this.openDialog();
    }
    this.index++;
    this.aCheckService.qCountEM++;
    this.question$ = this.service.getSingle(this.getQid(), this.qType);
    this.stats = this.aCheckService.getScoreEM();
    console.log("wrong", this.aCheckService.wrongAEM);
    console.log("skiped", this.aCheckService.skipedAEM);
  }
  openDialog() {
    this.dialog.open(DialogComponent);
  }

  nextClick() {
    const qid = this.getQid();
    let ans: Question | undefined;
    ans = this.aCheckService.getSingleAnswer(qid);

    console.log(ans);
    console.log('ans.acorrect', ans?.acorrect);
    if (ans?.acorrect) {
      this.aCheckService.correctAEM++;
      this.nextQ();
    } else if (ans?.acorrect === undefined) {
      this.aCheckService.skipedAEM++;
      this.nextQ();
    } else {

      this.aCheckService.wrongAEM++;
      this.nextQ();
    }

  }

  rndGen() {

    while (this.rndQList.length < this.maxQ) {
      console.log("maxQ", this.maxQ)
      const rndN = Math.floor(Math.random() * (120 - 2) + 1)
      if (this.rndQList.indexOf(rndN) === -1)
        this.rndQList.push(rndN);
    }
  }
  setMaxQ(value: any) {
    this.maxQ = value.value;
    this.rndQList = [];
    this.rndGen();
    console.log(this.maxQ);
  }

}
