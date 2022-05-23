// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { questions } from '../../constants/questions'
import { QuestionType } from '../../types/types'

type Options = {
  id: string,
  value: string
}

type Question = {
  type: QuestionType
  id: string;
  text: string;
  options: Options[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Question[]>
) {


  res.status(200).json(questions)
}
