import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { QRepoService } from './shared/q-repo.service';

@Component({
  selector: 'll-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'llce';
    isAll = true;
    isSC = false;
    isMc = false;
    isFI = false;
    qType$: Observable<string> | undefined;
 
  constructor(private service: QRepoService,
              private router: Router){

  }
  qTypeUpdate(type: string){
    // console.log(type);
    this.service.updateType(type);
    // this.service.updateUrl(type);
  }

  setType(qt?: string ) {
    if (qt === 'qAll') {
      this.isAll = true;
      this.isSC = false;
      this.isMc = false;
      this.isFI = false;
    } else if (qt === 'qSC') {
      this.isAll = false;
      this.isSC = true;
      this.isMc = false;
      this.isFI = false;
    } else if(qt === 'qMC'){
      this.isAll = false;
      this.isSC = false;
      this.isMc = true;
      this.isFI = false;
    }else if(qt === 'qFI') {
      this.isAll = false;
      this.isSC = false;
      this.isMc = false;
      this.isFI = true;
    }
  }
}
