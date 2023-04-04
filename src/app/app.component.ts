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
    qType$: Observable<string> | undefined;
 
  constructor(private service: QRepoService,
              private router: Router){

  }
  qTypeUpdate(type: string){
    this.service.updateType(type);
  }
}
