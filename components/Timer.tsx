import { useContext, useEffect } from 'react'
import { PlacementContext } from '../context/PlacementContext'
import { CurrentProgress } from './question/CurrentProgress'
import { useTimer } from 'reactjs-countdown-hook'

interface Props {
  onTimerFinish: () => void
}

export const Timer = ({ onTimerFinish }: Props) => {
  const { context: { currentQuestionIndex, timer: { timeInSeconds, type } } } = useContext(PlacementContext)

  const {
    seconds,
    minutes,
    counter,
    reset
  } = useTimer(timeInSeconds, onTimerFinish)

  useEffect(() => {
    if (type === 'question') {
      reset()
    }
  }, [currentQuestionIndex, type])

  return (
    <CurrentProgress current={counter} total={timeInSeconds || 0} label={`${minutes}:${seconds}`} />
  )
}
