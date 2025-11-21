import { QuizType } from "./quiz";

export interface Answer<T = any> {
    questionId: string;  
    type: QuizType;  
    value: T;           
}