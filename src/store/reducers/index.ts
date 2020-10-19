import { getAssessmentState } from './../selectors/assessment.selectors';
import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";

import * as fromAssessmentsReducer from './assessment.reducers';
import * as fromQuestionsReducer from './question.reducers';

export interface ProductsState {
  assessments: fromAssessmentsReducer.AssessmentState;
  questions: fromQuestionsReducer.QuestionState;
}


export const reducers: ActionReducerMap<ProductsState> = {
  assessments: fromAssessmentsReducer.reducer as any,
  questions: fromQuestionsReducer.reducer as any,
}
