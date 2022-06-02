import { createContext } from 'react'
import { CurrentScreen, PlacementSettings, PlacementContext as PlacementContextType } from '../types/types'

export const defaultPlacementConfiguration: PlacementSettings = {
  timer: {
    type: 'question',
    timeInSeconds: 0
  },
  questions: [],
  results: {
    score: 0,
    level: '',
    correctAnswers: 0
  },
  isLoading: true,
  currentScreen: CurrentScreen.Intro,
  currentQuestionIndex: 0
}

export const PlacementContext = createContext<PlacementContextType>({
  context: defaultPlacementConfiguration,
  setContext: () => {}
})
