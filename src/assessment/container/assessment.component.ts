import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Assessment } from '../../model';

import { Store } from "@ngrx/store";
import * as fromStore from '../../store';
import { LoadAssessment } from '../../store/actions/assessment.actions';


@Component({
  selector: 'assessment-tag',
  template: `
    <div>
      test
      {{assessments$ | async | json}}
    </div>
  `
})
export class AssessmentComponent implements OnInit {
  assessments$!: Observable<Assessment[]>;

  constructor(private store: Store<fromStore.ProductsState>) {}

  ngOnInit() {
    this.store.dispatch(new LoadAssessment());
    this.assessments$ = this.store.select(fromStore.getAllAssessments);
  }

}
