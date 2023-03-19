import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { QRepoService } from '../shared/q-repo.service';
import { Question } from '../shared/question';


@Component({
  selector: 'll-q-list',
  templateUrl: './q-list.component.html',
  styleUrls: ['./q-list.component.css']
})
export class QListComponent {
  questions$: Observable<Question[]>;
  // questions$: any;
  
  constructor(private service: QRepoService){
    this.questions$ = this.service.getAll();
  }
  ngOnInit(){
    this.service.getAll().subscribe(data => {
         console.log(data);
     });
}
}
