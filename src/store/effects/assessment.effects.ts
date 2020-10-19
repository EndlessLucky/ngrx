import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as fromRoot from '../../app/store';
import * as fromAssessmentActions from '../actions/assessment.actions';
import * as fromServices from '../../service/assessment.service'
import { effects } from '../../app/store';

@Injectable()
export class AssessmentEffects {
  constructor(
    private actions$: Actions,
    private assessmentService: fromServices.AssessmentService
  ) {}

    @Effect()
    loadAssessments$ = this.actions$
      .pipe(
        ofType(fromAssessmentActions.LOAD_ASSESSMENT),
        switchMap(() => {
          return this.assessmentService
                .getAssesments()
                .pipe(
                  map(assessments => new fromAssessmentActions.LoadAssessmentSuccess(assessments)),
                  catchError(error => of(new fromAssessmentActions.LoadAssessmentFail(error))
                  ));
        })
      );
}
