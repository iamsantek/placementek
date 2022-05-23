// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ContactFormInputs } from '../../types/types'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const formData = req.body as ContactFormInputs


  res.status(200).json({name: "200"})
}
