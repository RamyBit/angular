import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, of, Subject } from 'rxjs';
import { Question } from './question';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class QRepoService {
  private qUrl = './assets/data/qdata-'
  private _qType =new BehaviorSubject<string>('qAll');
  qType = 'qAll';
  
  // private questions$: Observable<Question[]>;
  // private questions : Question[]=[] ;
  // private question: Question = {};
  
  get Type(){
    return this._qType.asObservable();
  }
  updateType(value: string){
    this._qType.next(value);
  }
  constructor(private http: HttpClient) {
    console.log(this.qUrl);
    // this.getAll().subscribe(data => {
    //   console.log(data);
    // });

    // this.questions$ = this.getAll()
    // .pipe(tap((res:any)=>{
    //   this.questions = res;
    // }));
  }
  getAll(type :string): Observable<Question[]>{
    console.log("type",type);
    this.updateUrl(type);
    console.log(`${this.qUrl}`)
    return this.http.get<Question[]>(`${this.qUrl}`).pipe(
      catchError(err => {
        console.error(err);
        return of ([]);
      })
    )
  }
  // getSingle(id: number): any{
  
  //   this.question = this.getAll().pipe(map(qs => qs.find(q => q.qid === id)));
  //   console.log(this.question) ;
 
  // }
  getSingle(id: string, type: string): Observable<Question>{
  
    return this.getAll(type).pipe(map((array: Question[]) => array[parseInt(id)-1]));
    // console.log("id", id);
    // console.log("q", q$);
    // return q$;
 
  }
  updateUrl(type: string){
    this.qUrl =`./assets/data/qdata-${type}.json`;
  }
 
  getQType(){
    return this.qType;
  }
} 