import { useCallback, useEffect, useState } from 'react'
import { Question } from './question/Question'
import { Answers, PlacementConfiguration, Question as IQuestion, Results } from '../types/types'
import { Center, Progress, Spinner, Stack, Text } from '@chakra-ui/react'
import PlacementService from '../services/PlacementService'
import { defaultPlacementConfiguration, PlacementContext } from '../context/PlacementContext'
import { Timer } from './Timer'

interface Props {
  onFinish: (results: Results) => void
}

export const Questions = ({ onFinish }: Props) => {
  const [totalQuestions, setTotalQuestions] = useState<number>(0)
  const [answers, setAnswers] = useState<Answers>({})
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [placementConfiguration, setPlacementConfiguration] = useState<PlacementConfiguration>(defaultPlacementConfiguration)

  const sendResults = useCallback(async (answers: Answers) => {
    setIsLoading(true)
    const results = await PlacementService.sendResults(answers)
    onFinish(results)
    setIsLoading(false)
  }, [onFinish])

  const handleNext = (question: IQuestion, answerId: string | undefined) => {
    const updatedAnswers = {
      ...answers,
      [question.id]: answerId
    }

    if (currentQuestion === totalQuestions - 1) {
      sendResults(updatedAnswers)
      return
    }

    setAnswers(updatedAnswers)
    setCurrentQuestion(currentQuestion + 1)
  }

  const handleTimerFinish = () => {
    if (placementConfiguration?.timer.type === 'question') {
      handleNext(
        placementConfiguration.questions[currentQuestion],
        undefined
      )
    } else {
      sendResults(answers)
    }
  }

  const fetchQuestions = async () => {
    const configuration = await PlacementService.fetchQuestions()
    setIsLoading(false)
    setTotalQuestions(configuration.questions.length)
    setPlacementConfiguration({
      ...configuration
    })
  }

  const onChangeBrowserTab = () => {
    // TODO: Check if the user is on the same tab
    if (document.visibilityState === 'visible') {
      console.log('Active')
    } else {
      console.log('Inactive')
    }
  }

  useEffect(() => {
    document.addEventListener('visibilitychange', onChangeBrowserTab)

    return () => {
      document.removeEventListener('visibilitychange', onChangeBrowserTab)
    }
  }, [])

  useEffect(() => {
    fetchQuestions()
  }, [])

  useEffect(() => {

  }, [currentQuestion])

  if (isLoading) {
    return (
      <Center>
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='brand.primary'
          size='xl'
        />
      </Center>
    )
  }

  return (
    <PlacementContext.Provider value={placementConfiguration}>
      <Stack spacing={6} display='flex' alignContent='center' minWidth={['100%', 'container.md']}>
        <Progress value={(currentQuestion + 1 / totalQuestions) * 100} colorScheme='brand' />
        <Center flexDirection='column' gap={3}>
          <Timer onTimerFinish={handleTimerFinish} />
          <Text>Question {currentQuestion + 1} of {placementConfiguration?.questions.length || 0}</Text>
        </Center>
        <Question
          question={placementConfiguration?.questions[currentQuestion] as IQuestion}
          onAnswer={handleNext}
        />
      </Stack>
    </PlacementContext.Provider>
  )
}
