import { Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Qualification} from "./Qualification";

@Injectable({
  providedIn: 'root',
})
export class QualificationApiService {
  //Define the Qualification API
  baseURL = 'http://localhost:8089';
  constructor(private httpClient: HttpClient) {}

  /*===================
     CRUD Methods
  ====================*/
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getQualifications(): Observable<Qualification[]> {
      return this.httpClient.get<Qualification[]>(this.baseURL + '/qualifications')
        .pipe(retry(2));
    }

    getQualificationById(id: any): Observable<Qualification> {
      return this.httpClient.get<Qualification>(this.baseURL + 'qualifications/' + id)
        .pipe(retry(1));
    }

    createQualification(qualification: any): Observable<Qualification> {
      return this.httpClient.post<Qualification>(this.baseURL + '/qualifications'
        ,JSON.stringify(qualification), this.httpOptions)
        .pipe(retry(1));
    }

    editQualification(id: any, qualification: any): Observable<Qualification> {
      return this.httpClient.put<Qualification>(this.baseURL + 'qualifications/' + id,
        JSON.stringify(qualification),this.httpOptions)
        .pipe(retry(1));
    }

    deleteQualification(id: any): Observable<Qualification> {
      return this.httpClient.delete<Qualification>(this.baseURL + 'qualifications/' + id, this.httpOptions)
        .pipe(retry(1));
    }

  /*  handleError(error: any)
    {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent)
     {
       errorMessage = error.error.message;
     } else {
       errorMessage = `error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(() => {
       return errorMessage;
     });
    } */
}
