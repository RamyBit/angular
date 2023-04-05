import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, of, Subject } from 'rxjs';
import { Question } from './question';
import { map, switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class QRepoService {
  private qUrl = './assets/data/qdata-'
  private _qType =new BehaviorSubject<string>('qAll');
  qType = 'qAll';
  
  
  get Type(){
    return this._qType.asObservable();
  }
  updateType(value: string){
    this._qType.next(value);
  }
  constructor(private http: HttpClient) {
    console.log(this.qUrl);
    
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
  
  getSingle(id: string, type: string): Observable<Question>{
    console.log('service type',type);
    return this.getAll(type).pipe(map((array: Question[]) => array[parseInt(id)-1]));
    
  }
  updateUrl(type: string){
    this.qUrl =`./assets/data/qdata-${type}.json`;
  }
 
  getQType(){
    return this.qType;
  }

  getAllSearch(term: string): Observable<Question[]>{
    return this.getAll('qAll').pipe(map((questions: Question[]) => questions.filter(q =>  q.qtxt.find(txt => txt.includes(term)) ))) 
  }
} 

