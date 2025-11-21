import React from 'react'
import MultiChoiceQuiz from '../QuizTemplates/MultiChoiceQuiz'
import { QUIZ_1 } from '@/constants/flow2/Quizzes'


const Flow2Q1 = () => {
  return (
    <MultiChoiceQuiz {...QUIZ_1}/>
  )
}
export default Flow2Q1