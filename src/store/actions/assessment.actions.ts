import { Action } from "@ngrx/store";
import * as fromModel from '../../model'

/**
 * All the constants to define our actions
 */
export const LOAD_ASSESSMENT = '[assessment] load assessment';
export const LOAD_ASSESSMENT_FAIL = '[assessment] load assessment fail';
export const LOAD_ASSESSMENT_SUCCESS = '[assessment] load assessment success';

/**
 * Implementation of all actions that we are handle
 */
export class LoadAssessment implements Action {
    readonly type = LOAD_ASSESSMENT;
}

export class LoadAssessmentFail implements Action {
  readonly type = LOAD_ASSESSMENT_FAIL;
  constructor(public payload: any) {}
}


export class LoadAssessmentSuccess implements Action {
  readonly type = LOAD_ASSESSMENT_SUCCESS;
  constructor(public payload: fromModel.Assessment[]) {}
}

export const CREATE_ASSESSMENT = '[assessment] create assessment';
export const CREATE_ASSESSMENT_FAIL = '[assessment] create assessment fail';
export const CREATE_ASSESSMENT_SUCCESS = '[assessment] create assessment success';

export class CreateAssessment implements Action {
  readonly type = CREATE_ASSESSMENT;
}

export class CreateAssessmentFail implements Action {
readonly type = CREATE_ASSESSMENT_FAIL;
constructor(public payload: any) {}
}

export class CreateAssessmentSuccess implements Action {
readonly type = CREATE_ASSESSMENT_SUCCESS;
constructor(public payload: fromModel.Assessment) {}
}

export const UPDATE_ASSESSMENT = '[assessment] update assessment';
export const UPDATE_ASSESSMENT_FAIL = '[assessment] update assessment fail';
export const UPDATE_ASSESSMENT_SUCCESS = '[assessment] update assessment success';

export class UpdateAssessment implements Action {
  readonly type = UPDATE_ASSESSMENT;
}

export class UpdateAssessmentFail implements Action {
readonly type = UPDATE_ASSESSMENT_FAIL;
constructor(public payload: any) {}
}

export class UpdateAssessmentSuccess implements Action {
readonly type = UPDATE_ASSESSMENT_SUCCESS;
constructor(public payload: fromModel.Assessment) {}
}

export type AssessmentActions =
| LoadAssessment
| LoadAssessmentFail
| LoadAssessmentSuccess
| CreateAssessment
| CreateAssessmentFail
| CreateAssessmentSuccess
| UpdateAssessment
| UpdateAssessmentFail
| UpdateAssessmentSuccess
;

