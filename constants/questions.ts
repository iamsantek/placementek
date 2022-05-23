import { AudioQuestion, Question, QuestionType } from '../types/types'

export const questions: Question[] = [
  {
    type: QuestionType.AUDIO,
    id: '1',
    text: 'I am a audio question',
    options: [
      { id: '1-a', value: 'Video' },
      { id: '1-b', value: 'Image' },
      { id: '1-c', value: 'Audio' },
      { id: '1-d', value: 'Text' }
    ],
    source: '/audio.mp3',
    maxPlays: 2
  } as AudioQuestion
]
