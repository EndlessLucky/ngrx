import * as fromAssessmentActions from '../actions/assessment.actions'
import { Assessment } from "../../model/assessment.model";

export interface AssessmentState {
  entities: { [id: number]: Assessment};
  loaded: boolean;
  loading: boolean;
}

export const initialState: AssessmentState = {
  entities: {},
  loaded: false,
  loading: false
}

export function reducer(
  state = initialState,
  action: fromAssessmentActions.AssessmentActions
): AssessmentState {
  switch (action.type) {

    case fromAssessmentActions.LOAD_ASSESSMENT: {
      return {
        ...state,
        loading: true
      }
    }

    case fromAssessmentActions.LOAD_ASSESSMENT_SUCCESS: {
      return {
        ...state, entities: action.payload,
        loaded: true
      }
    }

    case fromAssessmentActions.LOAD_ASSESSMENT_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      }
    }

    case fromAssessmentActions.UPDATE_ASSESSMENT_SUCCESS:
    case fromAssessmentActions.CREATE_ASSESSMENT_SUCCESS: {
      const assessment = action.payload;
      const entities = {
        ...state.entities,
        [assessment.id]: assessment
      }
      return {
        ...state,
        entities
      }
    }
  }
  return state;
}

export const getAssessmentsEntities = (state: AssessmentState) => state.entities;
export const getAssessmentsLoading = (state: AssessmentState) => state.loading;
export const getAssessmentsLoaded = (state: AssessmentState) => state.loaded;

