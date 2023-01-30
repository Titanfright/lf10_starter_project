import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, retry} from "rxjs";
import {Qualification} from "./Qualification";

@Injectable({
  providedIn: 'root',
})
export class QualificationApiService {
  //Define the Qualification API
  baseURL = '/backend';

  constructor(private httpClient: HttpClient
              ) {
  }

  bearer = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIzUFQ0dldiNno5MnlQWk1EWnBqT1U0RjFVN0lwNi1ELUlqQWVGczJPbGU0In0.eyJleHAiOjE2NzU4MDcwNjYsImlhdCI6MTY3NTgwMzQ2NiwianRpIjoiOGUxOWM2ZTctODExYy00ZDAwLWE3ODQtZDUwMjEyMzE1OWEzIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5zenV0LmRldi9hdXRoL3JlYWxtcy9zenV0IiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjU1NDZjZDIxLTk4NTQtNDMyZi1hNDY3LTRkZTNlZWRmNTg4OSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImVtcGxveWVlLW1hbmFnZW1lbnQtc2VydmljZSIsInNlc3Npb25fc3RhdGUiOiJmYmQ0Y2Y3Yi03MTRjLTQyMDktYTA3Zi0zYjJlNjM4NjM3ZDkiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1zenV0IiwidW1hX2F1dGhvcml6YXRpb24iLCJ1c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInByZWZlcnJlZF91c2VybmFtZSI6InVzZXIifQ.SjcjgmidCYYYSN0g8AvF6YyD1urRGc9Ou1pTXqZ2plXN9jy0YPpT_26jQypBed2YeOyN6GwqtbmgUK5wnqDo3EdfnVjr6466EO8co6obyeNGsetT-n90_ViFb9HQNI4uNvzo5CesZJAZXoKZ58AQXuLx2k-Kh87CUcPPB1Zl36yLSx__aRt3uPs4wW6G4-dr_i1qLv9fZtCX9teIHY_M1Yn_7Kg3PDOh-7ioPqRt5HN_SmvSTTB1sHrRCLgl-QqShgeoo2DPExy6T-O53pwiDVbP0zLqpTHcQ_CplrTlclRUFSwLdp3w1Q7WEGJkUi1W_VVmHKuQto7hmx7joAYXIw';

  /*===================
     CRUD Methods
  ====================*/
  httpOptions = {
    headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${this.bearer}`)
      .set('Accept', 'application/json')
  }


  getQualifications(): Observable<Qualification> {
    return this.httpClient.get<Qualification>(this.baseURL + '/qualifications')
      .pipe(retry(1));
  }

  getQualificationById(designation: string): Observable<Qualification> {
    let array2 = {
      headers: this.httpOptions.headers,
      body: JSON.stringify({"designation": designation})
    };
    return this.httpClient.get<Qualification>(this.baseURL + '/qualifications', array2)
      .pipe(retry(1));
  }

  createQualification(qualification: any): Observable<Qualification> {
    return this.httpClient.post<Qualification>(this.baseURL + '/qualifications'
      , JSON.stringify(qualification), this.httpOptions)
      .pipe(retry(1));
  }

  editQualification(id: any, qualification: any): Observable<Qualification> {
    return this.httpClient.put<Qualification>(this.baseURL + '/qualifications',
      JSON.stringify(qualification), this.httpOptions)
      .pipe(retry(1));
  }

  deleteQualification(designation: string): Observable<Qualification> {
    let array2 = {
      headers: this.httpOptions.headers,
      body: JSON.stringify({"designation": designation})
    };
    return this.httpClient.delete<Qualification>(this.baseURL + '/qualifications', array2)
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
