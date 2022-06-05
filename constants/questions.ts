import { AudioQuestion, CurrentScreen, PlacementSettings, Question, QuestionType } from '../types/types'

export const questions: Question[] = [
  {
    type: QuestionType.AUDIO,
    id: '1',
    text: 'I am an audio question, and the right answer is Audio.',
    options: [
      { id: '1-a', value: 'Video' },
      { id: '1-b', value: 'Image' },
      { id: '1-c', value: 'Audio' },
      { id: '1-d', value: 'Text' }
    ],
    source: '/audio.mp3',
    maxPlays: 2
  } as AudioQuestion,
  {
    type: QuestionType.TEXT,
    id: '2',
    text: 'This is a text question and the right answer is Text.',
    options: [
      { id: '2-a', value: 'Video' },
      { id: '2-b', value: 'Image' },
      { id: '2-c', value: 'Audio' },
      { id: '2-d', value: 'Text' }
    ]
  }
]

export const configuration: PlacementSettings = {
  timer: {
    type: 'question',
    timeInSeconds: 30
  },
  questions,
  results: {
    score: 0,
    level: '',
    correctAnswers: 0
  },
  isLoading: false,
  currentScreen: CurrentScreen.Intro,
  currentQuestionIndex: 0
}
