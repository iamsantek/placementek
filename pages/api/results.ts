// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { AnswerKey, Answers, Results } from '../../types/types'

const answers: AnswerKey[] = [
  {
    id: '1',
    keys: {
      '1-a': 0,
      '1-b': 0,
      '1-c': 1,
      '1-d': 0
    }
  },
  {
    id: '2',
    keys: {
      '2-a': 0,
      '2-b': 0,
      '2-c': 0,
      '2-d': 1
    }
  }
]

const getEnglishLevel = (score: number): string => {
  if (score < 0.5) {
    return 'Beginner'
  } else if (score < 0.8) {
    return 'Intermediate'
  } else {
    return 'Advanced'
  }
}

export default function handler (
  req: NextApiRequest,
  res: NextApiResponse<Results>
) {
  const answersSent = req.body.answers as Answers
  let score: number = 0
  let correctAnswers: number = 0

  Object.entries(answersSent).forEach(([questionId, answer]) => {
    if (!answer) {
      // If the user didn't answer the question, we don't count it towards the score
      return
    }

    const selectedAnswer = answers.find(a => a.id === questionId)?.keys[answer] || 0

    if (selectedAnswer === 1) {
      correctAnswers++
    }

    score += selectedAnswer
  })

  res.status(200).json({
    score,
    level: getEnglishLevel(score),
    correctAnswers
  })
}
