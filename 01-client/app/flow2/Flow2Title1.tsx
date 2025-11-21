import React from 'react'
import QuizTitle from '../QuizTemplates/QuizTitle'
import { QUIZ_TITLE_1 } from '@/constants/flow2/QuizTitles'


const FlowTitle1Screen = () => {
  return (
    <QuizTitle{...QUIZ_TITLE_1}/>
  )
}
export default FlowTitle1Screen