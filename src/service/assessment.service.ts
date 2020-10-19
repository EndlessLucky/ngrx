import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import * as fromModel from '../model'

@Injectable({
  providedIn: 'root'
})
export class AssessmentService {
  constructor(
    private http: HttpClient
  ) {}

  getAssesments() : Observable<fromModel.Assessment[]>  {
    return this.http.
      get<fromModel.Assessment[]>(`http://localhost:5000/assets/db.json`).
      pipe(
        map((res: any) => res.assessments),
        catchError((error: any) => this.handleError(error))
      );
  }

  createAssessment(payload: fromModel.Assessment) : Observable<fromModel.Assessment>  {
    return this.http.
      post<fromModel.Assessment>(`http://localhost:3000/assessments`, payload).
      pipe(catchError((error: any) => this.handleError(error)));
  }

  handleError(error: any) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
