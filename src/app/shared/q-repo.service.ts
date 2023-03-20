import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { QueueScheduler } from 'rxjs/internal/scheduler/QueueScheduler';
import { Question } from './question';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class QRepoService {
  private qUrl = './assets/test.json'
  // private questions$: Observable<Question[]> ;
  // private questions : Question[]=[] ;
  constructor(private http: HttpClient) {
    this.getAll().subscribe(data => {
      console.log(data);
    });

    // this.questions$ = this.getAll()
    // .pipe(tap((res:any)=>{
    //   this.questions = res;
    // }));
  }
  getAll(): Observable<Question[]>{
    return this.http.get<Question[]>(`${this.qUrl}`).pipe(
      catchError(err => {
        console.error(err);
        return of ([]);
      })
    )
  }
  getSingle(id: number): any{
    return this.getAll().pipe(map(qs => qs.find(q => q.qid === id)));
 
  }

} 