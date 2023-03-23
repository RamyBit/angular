import { Component, Input } from '@angular/core';
import { Question } from 'src/app/shared/question';
import { MatRadioChange } from '@angular/material/radio';
import { Qanswer } from 'src/app/shared/qanswer';
import { ContentObserver } from '@angular/cdk/observers';



@Component({
  selector: 'll-q-list-item',
  templateUrl: './q-list-item.component.html',
  styleUrls: ['./q-list-item.component.css']
})
export class QListItemComponent {
  @Input() question?: Question
  gAns: any = [];
  cAns: any = [];
  
  qtype: any = {
    sc: false,
    mc: false,
    fi: false
  }
  givenAnswers=[]
  hasInfo = false;
  fiAns = "";
  ranswer = false;
  showCorrect = false;

  ngOnChanges() {
    this.setType(this.question);
    this.checkInfo(this.question);
  }

  setType(q?: Question) {
    if (q?.qtyp === 'sc') {
      this.qtype.sc = true;
      this.qtype.mc = false;
      this.qtype.fi = false
    } else if (q?.qtyp === 'mc') {
      this.qtype.sc = false;
      this.qtype.mc = true;
      this.qtype.fi = false;
    } else {
      this.qtype.fi = true;
      this.qtype.sc = false;
      this.qtype.mc = false;
    }
  }
  checkInfo(q?: Question) {
    if (q?.qinfo.length !== 0) {
      this.hasInfo = true;
    }
  }
  
  radioButtonChange(data: MatRadioChange) {
    console.log(data.value);
  }
  rbChange(query: Question, qans: Qanswer) {
    this.ranswer = false;
    qans.givenanswer = true
    for (const i of query.qanswers) {
      if (i.txt != qans.txt) {
        i.givenanswer = false;
      }
      if((i.correct === i.givenanswer) && (i.correct === true)){
        this.ranswer = true;
        }
      
      console.log('c : ga', i.correct, i.givenanswer, i.txt)
    }



    // console.log('QNr: ', qid, ' correct?: ', ans.correct)
  }
  checkMCAns(query: Question, qans: Qanswer) {
   
    
    this.ranswer = false;
    qans.givenanswer = false;
    for (const i of query.qanswers) {
      if (i.txt == qans.txt) {
        i.givenanswer = true;
      }else{
        i.givenanswer = false;
      }
      this.gAns.push(i.givenanswer);
      this.cAns.push(i.correct)
    }
    
      console.log("gans",this.gAns,"qa", this.cAns)
      if(this.cAns === this.gAns){
        this.ranswer = true;
      }else{
        this.ranswer = false;
      }
    this.cAns=[];
    this.gAns =[];
  }
  checkFIAns(query: Question,a?: string) {
    for ( const i of query.qanswers){
      if(i.txt[0] === a){
        this.ranswer=true;
      }else{
        this.ranswer = false;
      }
    }
    
  }

}

