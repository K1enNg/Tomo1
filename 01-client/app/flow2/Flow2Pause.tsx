import React from 'react'
import QuizTitle from '../Flow2QuizTitle'
import { QUIZ_PAUSE } from '@/constants/flow2/QuizTitles'


const FlowTitlePauseScreen = () => {
  return (
    <QuizTitle{...QUIZ_PAUSE}/>
  )
}
export default FlowTitlePauseScreen