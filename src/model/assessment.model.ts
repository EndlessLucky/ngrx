
import { Question } from "./question.model";

export interface Assessment {
  id: number,
  nameAssessment: string,
  completed: string,
  questions: Question[];
}
