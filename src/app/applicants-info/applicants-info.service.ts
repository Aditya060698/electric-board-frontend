import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, tap, catchError,throwError } from 'rxjs';
import { applicantsInfo } from './applicants-info';
import { request } from './applicants-info-request';

@Injectable({
  providedIn: 'root'
})
export class ApplicantsInfoService {
  // handleError: (err: any, caught: Observable<any[]>) => ObservableInput<any>;


  constructor(private http: HttpClient) { }
  getApplicantsInfo(data:any): Observable<any[]> {
    const options = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>('http://localhost:8082/electricBoard/getDetails',data,{ headers: options }).pipe(
      tap((data) => console.log('Data Fetched:' + JSON.stringify(data))),
      catchError(this.handleError));
      
  }
 
  private handleError(err: HttpErrorResponse): Observable<any> {
    let errMsg = '';
    if (err.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      console.log('An error occurred:', err.error.message);
      errMsg = err.error.message;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.log(`Backend returned code ${err.status}`);
      errMsg = err.error.status;
    }
    return throwError(()=>errMsg);
  }
}
