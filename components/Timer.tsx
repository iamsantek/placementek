import { useContext } from 'react'
import { PlacementContext } from '../context/PlacementContext'
import { CurrentProgress } from './question/CurrentProgress'
import { useTimer } from 'reactjs-countdown-hook'

interface Props {
    onTimerFinish: () => void
}

export const Timer = ({ onTimerFinish }: Props) => {
  const { timer: { timeInSeconds } } = useContext(PlacementContext)
  const {
    seconds,
    minutes,
    counter
  } = useTimer(timeInSeconds, onTimerFinish)

  return (
        <CurrentProgress current={counter} total={timeInSeconds || 0} label={`${minutes}:${seconds}`} />
  )
}
