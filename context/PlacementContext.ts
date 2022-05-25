import { createContext } from 'react'
import { PlacementConfiguration } from '../types/types'

export const defaultPlacementConfiguration: PlacementConfiguration = {
  timer: {
    type: 'question',
    timeInSeconds: 30
  },
  questions: []
}

export const PlacementContext = createContext<PlacementConfiguration>(defaultPlacementConfiguration)
