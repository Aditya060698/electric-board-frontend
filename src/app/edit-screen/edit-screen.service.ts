import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditScreenService {

  constructor(private http: HttpClient){
  }

  getApplicantsInfo(id:number): Observable<any>{
      const options = new HttpHeaders({ 'Content-Type': 'application/json' });
      let queryParams = new HttpParams();
      queryParams = queryParams.append("id",id);
      return this.http.get<any>('http://localhost:8082/electricBoard/getApplicantsInfo',{ params: queryParams }).pipe(
        tap((data) => console.log('Data Fetched:' + JSON.stringify(data))),
        catchError(this.handleError))
    
  } editStatus(id:number,status:string): Observable<any>{
    const options = new HttpHeaders({ 'Content-Type': 'application/json' });

    let queryParams = new HttpParams();
      queryParams = queryParams.append("id",id);
      queryParams = queryParams.append("status", status)
    return this.http.put<any>('http://localhost:8082/electricBoard/editStatus',{ headers:options },{ params: queryParams }).pipe(

      catchError(this.handleError))
    ;
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
