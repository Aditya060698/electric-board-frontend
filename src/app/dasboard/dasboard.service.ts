import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, catchError, throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DasboardService {

  constructor(private http: HttpClient) { }
  getGraphInfo(data:any): Observable<any[]> {
    console.log("Start");
    
    const options = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>('http://localhost:8082/electricBoard/getGraph',data,{ headers: options }).pipe(
      tap((data) => console.log('Data Fetched:' + JSON.stringify(data))),
      catchError(this.handleError));
      
  }
  getStatus() :Observable<any[]>{
    const options = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.get<any>('http://localhost:8082/electricBoard/getStatus',{ headers: options }).pipe(
      tap((data) => console.log('Data Fetched:' + JSON.stringify(data))),
      catchError(this.handleError))
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
  }}
