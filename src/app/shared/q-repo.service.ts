import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class QRepoService {
  private qUrl = './assets/test.json'
  private questions: Question[] = []
  constructor(private http: HttpClient) {
    this.getAll().subscribe(data => {
      console.log(data);
    })
  }
  getAll(): Observable<Question[]>{
    return this.http.get<Question[]>(`${this.qUrl}`).pipe(
      catchError(err => {
        console.error(err);
        return of ([]);
      })
    )
  }

} 