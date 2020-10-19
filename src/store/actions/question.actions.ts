import { Action } from "@ngrx/store";
import * as fromModel from '../../model'

/**
 * All the constants to define our actions
 */
export const LOAD_QUESTION = '[question] load question';
export const LOAD_QUESTION_FAIL = '[question] load question fail';
export const LOAD_QUESTION_SUCCESS = '[question] load question success';

/**
 * Implementation of all actions that we are handle
 */
export class LoadQuestion implements Action {
    readonly type = LOAD_QUESTION;
}

export class LoadQuestionFail implements Action {
  readonly type = LOAD_QUESTION_FAIL;
  constructor(public payload: any) {}
}

export class LoadQuestionSuccess implements Action {
  readonly type = LOAD_QUESTION_SUCCESS;
  constructor(public payload: fromModel.Question[]) {}
}

export const CREATE_QUESTION = '[question] create question';
export const CREATE_QUESTION_FAIL = '[question] create question fail';
export const CREATE_QUESTION_SUCCESS = '[question] create question success';

export class CreateQuestion implements Action {
  readonly type = CREATE_QUESTION;
}

export class CreateQuestionFail implements Action {
readonly type = CREATE_QUESTION_FAIL;
constructor(public payload: any) {}
}

export class CreateQuestionSuccess implements Action {
readonly type = CREATE_QUESTION_SUCCESS;
constructor(public payload: fromModel.Question) {}
}

export const UPDATE_QUESTION = '[question] update question';
export const UPDATE_QUESTION_FAIL = '[question] update question fail';
export const UPDATE_QUESTION_SUCCESS = '[question] update question success';

export class UpdateQuestion implements Action {
  readonly type = UPDATE_QUESTION;
}

export class UpdateQuestionFail implements Action {
readonly type = UPDATE_QUESTION_FAIL;
constructor(public payload: any) {}
}

export class UpdateQuestionSuccess implements Action {
readonly type = UPDATE_QUESTION_SUCCESS;
constructor(public payload: fromModel.Question) {}
}

export type QuestionActions =
| LoadQuestion
| LoadQuestionFail
| LoadQuestionSuccess
| CreateQuestion
| CreateQuestionFail
| CreateQuestionSuccess
| UpdateQuestion
| UpdateQuestionFail
| UpdateQuestionSuccess
;

