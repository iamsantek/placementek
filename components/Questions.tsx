import { useCallback, useEffect, useState } from 'react'
import { Question } from './question/Question'
import { Answers, Question as IQuestion, Results } from '../types/types'
import { Stack } from '@chakra-ui/react'
import PlacementService from '../services/PlacementService'
import { CurrentProgress } from './question/CurrentProgress'

interface Props {
    onFinish: (results: Results) => void
}

export const Questions = ({ onFinish }: Props) => {
  const [questions, setQuestions] = useState<IQuestion[]>([])
  const [totalQuestions, setTotalQuestions] = useState<number>(0)
  const [answers, setAnswers] = useState<Answers>({})
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  const fetchQuestions = async () => {
    const questions = await PlacementService.fetchQuestions()
    setQuestions(questions)
    setIsLoading(false)
    setQuestions(questions)
    setTotalQuestions(questions.length)
  }

  useEffect(() => {
    fetchQuestions()
  }, [])

  const sendResults = useCallback(async (answers: Answers) => {
    const results = await PlacementService.sendResults(answers)
    onFinish(results)
  }, [onFinish])

  const handleNext = (question: IQuestion, answerId: string) => {
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

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
        <Stack spacing={6} alignContent='center' alignItems='center'>
            <CurrentProgress currentQuestion={currentQuestion} totalQuestions={totalQuestions} />
            <Question
                question={questions[currentQuestion]}
                onAnswer={handleNext}
            />
        </Stack>
  )
}
