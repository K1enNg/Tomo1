import SingleChoiceQuiz from '../QuizTemplates/SingleChoiceQuiz';
import React from 'react'
import { EntryTest_2 } from "@/constants/entryTest/Quizzes";


const EntryTest2Screen = () => {
  return (
    <SingleChoiceQuiz{...EntryTest_2}/>
  )
}
export default EntryTest2Screen