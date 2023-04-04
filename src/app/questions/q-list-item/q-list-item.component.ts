import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Question } from 'src/app/shared/question';
import { MatRadioChange } from '@angular/material/radio';
import { Qanswer } from 'src/app/shared/qanswer';
import { ACheckService } from 'src/app/shared/a-check.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'll-q-list-item',
  templateUrl: './q-list-item.component.html',
  styleUrls: ['./q-list-item.component.css']
})
export class QListItemComponent {
  
  @Input() question?: Question;
  @Output() selectedCorrect = new EventEmitter<string>();
  answers$: Observable<Qanswer[]> | undefined;
  answer!: Question;
  checkboxValues: Boolean[] = [];
 
  
  qtype: any = {
    sc: false,
    mc: false,
    fi: false
  }
  givenAnswers=[]
  hasInfo = false;
  fiAns = "";
  ranswer = false;
  fanswer = false;
  showCorrect = false;

  ngOnChanges() {
    this.setType(this.question);
    this.checkInfo(this.question);
    this.ranswer = false;
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
  checkSC(query: Question, qans: Qanswer) {
    this.ranswer = false;
    query.acorrect = false;
    this.fanswer = true;
    qans.givenanswer = true
    for (const i of query.qanswers) {
      if (i.txt != qans.txt) {
        i.givenanswer = false;
      }
      if((i.correct === i.givenanswer) && (i.correct === true)){
        this.ranswer = true;
        this.fanswer = false;
        
         }
     this.updateAnswer(query,this.ranswer);
    }
  }
  checkMCAns(query: Question, qans: Qanswer) {
   
    let cAns: (boolean | Boolean)[]= [];
    let gAns = [];
    
    this.ranswer = false;
    this.fanswer = true;
    qans.givenanswer = false;
    for (let i=0 ; i< query.qanswers.length; i++) {
      if(this.checkboxValues[i]){
        gAns.push(this.checkboxValues[i]);
      }else{
        gAns.push(false);
      }
      
      cAns.push(query.qanswers[i].correct)
    }
    
      const isEqual = gAns.every((element, index ) => element == cAns[index]);
      if(isEqual){
        this.ranswer = true;
        this.fanswer = false;
      }else{
        this.ranswer = false;
        this.fanswer = true;
      }
      this.updateAnswer(query, this.ranswer);
  }
  checkFIAns(query: Question,a?: string) {
    for ( const i of query.qanswers){
      if(i.txt[0] === a){
        this.ranswer=true;
        
      }else{
        this.ranswer = false;
        this.fanswer = true;
        
      }
    }
    console.log(this.ranswer)
    this.updateAnswer(query,this.ranswer);
  }
  
  
  updateAnswer(query: Question, rans?: boolean){
    if(this.ranswer === true){
      query.acorrect = this.ranswer;
    }else if(this.fanswer === true){
      query.acorrect = false
    }else{
      query.acorrect = undefined;
    }
    this.answer = query
    this.aCheckService.setAnswer(query);

  }
  getCorrect(){
    
    if(this.question?.qtyp != 'fi'){
      this.selectedCorrect?.emit(this.question?.qcorrect + '   |Info:' + this.question?.qinfo);
      console.log(this.question)
    }else{
      this.selectedCorrect?.emit(this.question?.qanswers[0].txt[0] + '   |Info:' 
      + this.question.qinfo);
      console.log(this.question?.qanswers[0].txt[0])
    }
  }
  constructor(private aCheckService: ACheckService){
    this.ranswer= false;
    this.getCorrect();
    
    
  }
  ngOnInit(){
    this.ranswer = false;
    this.getCorrect();
    if(this.question){
      this.updateAnswer(this.question,undefined);
    }
  }
}

