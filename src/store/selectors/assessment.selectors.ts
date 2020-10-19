import { createSelector } from "@ngrx/store";

import * as fromRoot from '../../app/store';
import * as fromFeature from '../reducers';
import * as fromAssessmentReducers from '../reducers/assessment.reducers'

import { Assessment } from "../../model/assessment.model";
import { ProductsState } from '../reducers/index';

export const getAssessmentState = (state: ProductsState) => state.assessments;


// export const getAssessmentState = createSelector(
//   fromFeature.reducers as any,
//   (state: fromFeature.ProductsState) => state.assessments
// );

export const getAssessmentsEntities = createSelector(
  getAssessmentState,
  fromAssessmentReducers.getAssessmentsEntities
)

export const getSelectedAssessment = createSelector(
  getAssessmentsEntities,
  fromRoot.getRouterState,
  (entities, router): Assessment => {
    return router.state && entities[router.state.params.id];
  }
);

export const getAllAssessments = createSelector(
  getAssessmentsEntities,
  entities => {
    console.log(entities);
    return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
  }
);

export const getAssessmentsLoaded = createSelector(
  getAssessmentState,
  fromAssessmentReducers.getAssessmentsLoaded
);

export const getAssessmentLoading = createSelector(
  getAssessmentState,
  fromAssessmentReducers.getAssessmentsLoading
)
