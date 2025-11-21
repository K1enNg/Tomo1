import { Quiz } from '../QuestionnaireLogic/quiz';
import { QUIZ_1, QUIZ_2 } from "./flow2/Quizzes"
import { EntryTest_1, EntryTest_2 } from './entryTest/Quizzes';

export const QuizMap = {
    [QUIZ_1.questionId] : QUIZ_1,
    [QUIZ_2.questionId] : QUIZ_2,
    [EntryTest_1.questionId] : EntryTest_1,
    [EntryTest_2.questionId] : EntryTest_2,
} 