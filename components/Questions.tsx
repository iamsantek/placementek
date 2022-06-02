import { useCallback, useContext, useEffect, useState } from 'react'
import { Question } from './question/Question'
import { Answers, CurrentScreen, Question as IQuestion } from '../types/types'
import { Center, Progress, Spinner, Stack, Text } from '@chakra-ui/react'
import PlacementService from '../services/PlacementService'
import { PlacementContext } from '../context/PlacementContext'
import { Timer } from './Timer'

export const Questions = () => {
  const [answers, setAnswers] = useState<Answers>({})
  const { context, setContext } = useContext(PlacementContext)

  const sendResults = useCallback(async (answers: Answers) => {
    setContext({
      ...context,
      isLoading: true
    })
    const results = await PlacementService.sendResults(answers)
    setContext({
      ...context,
      results,
      isLoading: false,
      currentScreen: CurrentScreen.Results
    })
  }, [setContext, context])

  const { questions, timer, isLoading } = context

  const handleNext = (question: IQuestion, answerId: string | undefined) => {
    const updatedAnswers = {
      ...answers,
      [question.id]: answerId
    }

    if (context.currentQuestionIndex === questions.length - 1) {
      sendResults(updatedAnswers)
      return
    }

    setAnswers(updatedAnswers)
    setContext({
      ...context,
      currentQuestionIndex: context.currentQuestionIndex + 1
    })
  }

  const handleTimerFinish = () => {
    if (timer.type === 'question') {
      handleNext(
        questions[context.currentQuestionIndex],
        undefined
      )
    } else {
      sendResults(answers)
    }
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
    <Stack spacing={6} display='flex' alignContent='center' minWidth={['100%', 'container.md']}>
      <Progress value={(context.currentQuestionIndex + 1 / questions.length) * 100} colorScheme='green' />
      <Center flexDirection='column' gap={3}>
        <Timer onTimerFinish={handleTimerFinish} />
        <Text>Question {context.currentQuestionIndex + 1} of {questions.length || 0}</Text>
      </Center>
      <Question
        question={questions[context.currentQuestionIndex] as IQuestion}
        onAnswer={handleNext}
      />
    </Stack>
  )
}
