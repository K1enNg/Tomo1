import React from 'react'
import QuizTitle from '../QuizTemplates/QuizTitle'
import { QUIZ_TITLE_2 } from '@/constants/flow2/QuizTitles'


const FlowTitle2Screen = () => {
  return (
    <QuizTitle{...QUIZ_TITLE_2}/>
  )
}
export default FlowTitle2Screen