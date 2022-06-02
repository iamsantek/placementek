// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { configuration } from '../../constants/questions'
import { PlacementSettings } from '../../types/types'

export default function handler (
  req: NextApiRequest,
  res: NextApiResponse<PlacementSettings>
) {
  res.status(200).json(configuration)
}
