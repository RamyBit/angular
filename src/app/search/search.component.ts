import { Component } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, Observable, Subject, switchMap, tap } from 'rxjs';
import { QRepoService } from '../shared/q-repo.service';
import { Question } from '../shared/question';

@Component({
  selector: 'll-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchresults$: Observable<Question[]> | undefined;
  input$ = new Subject<string>();
  isLoading = false;


  constructor(private service: QRepoService) {
    this.searchresults$ = this.input$.pipe(
    filter(term => term.length >= 2),
    debounceTime(500),
    distinctUntilChanged((a,b) => {
      return JSON.stringify(a) === JSON.stringify(b);
    }),
    tap(()=> this.isLoading = true),
    switchMap(term => this.service.getAllSearch(term)),
    tap(() => this.isLoading = false)    
    )
    console.log(this.searchresults$)
  }
}
