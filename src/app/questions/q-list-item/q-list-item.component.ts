import { Component, Input } from '@angular/core';
import { Question } from 'src/app/shared/question';
import { MatRadioChange } from '@angular/material/radio';
import { MatCheckboxChange } from '@angular/material/checkbox';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


@Component({
  selector: 'll-q-list-item',
  templateUrl: './q-list-item.component.html',
  styleUrls: ['./q-list-item.component.css']
})
export class QListItemComponent {
  @Input() question?: Question
  qtype: any = {
    sc: false,
    mc: false,
    fi: false
  }
  hasInfo: boolean = false;
  fiAns : string = "";

  ngOnChanges(){
    this.setType(this.question);
    this.checkInfo(this.question);
  }

  setType(q?: Question){
    if (q?.qtyp === 'sc'){
      this.qtype.sc = true;
      this.qtype.mc = false;
      this.qtype.fi = false
    }else if (q?.qtyp === 'mc'){
      this.qtype.sc = false;
      this.qtype.mc = true;
      this.qtype.fi = false;
    }else{
      this.qtype.fi = true;
      this.qtype.sc = false;
      this.qtype.mc = false;
    }
  }
  checkInfo(q?:Question){
    if(q?.qinfo.length !== 0){
      this.hasInfo = true;
    }
  }
  radioButtonChange(data: MatRadioChange) {
    console.log(data.value);
}
  checkMCAns(a : number){
    console.log("MC",a )
  }
  checkFIAns(a?: string){
    console.log(a);
  }
  
}

