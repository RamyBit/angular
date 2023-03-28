import { Component, EventEmitter, Output } from '@angular/core';
import { QRepoService } from '../shared/q-repo.service';

@Component({
  selector: 'll-q-button-toggle',
  templateUrl: './q-button-toggle.component.html',
  styleUrls: ['./q-button-toggle.component.css']
})
export class QButtonToggleComponent {
  @Output() selectType = new EventEmitter<string>();
  qTypeUpdate(type: string){
    console.log(type);
    this.service.updateUrl(type);
  }
  constructor(private service: QRepoService){

  }
}
