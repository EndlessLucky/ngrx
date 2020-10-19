import * as fromQuestionActions from '../actions/question.actions'
import { Question } from "../../model/question.model";

export interface QuestionState {
  entities: { [id: number]: Question};
  loaded: boolean;
  loading: boolean;
}

export const initialState: QuestionState = {
  entities: {},
  loaded: false,
  loading: false
}

export function reducer(
  state = initialState,
  action: fromQuestionActions.QuestionActions
): QuestionState {
  switch (action.type) {

    case fromQuestionActions.LOAD_QUESTION: {
      return {
        ...state,
        loading: true
      }
    }

    case fromQuestionActions.LOAD_QUESTION_SUCCESS: {
      return {
        ...state,
        loaded: true
      }
    }

    case fromQuestionActions.LOAD_QUESTION_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      }
    }

    case fromQuestionActions.UPDATE_QUESTION_SUCCESS:
    case fromQuestionActions.CREATE_QUESTION_SUCCESS: {
      const question = action.payload;
      const entities = {
        ...state.entities,
        [question.id]: question
      }
      return {
        ...state,
        entities
      }
    }
  }
  return state;
}

export const getQuestionsEntities = (state: QuestionState) => state.entities;
export const getQuestionsLoading = (state: QuestionState) => state.loading;
export const getQuestionsLoaded = (state: QuestionState) => state.loaded;

