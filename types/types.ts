export enum QuestionType {
    AUDIO = 'audio',
    VIDEO = 'video',
    TEXT = 'text'
}

export interface Question {
    type: QuestionType
    id: string;
    text: string;
    options: Options[]
}

export interface AudioQuestion extends Question {
    source: string;
    maxPlays: number;
}

export interface VideoQuestion extends Question {
    source: string;
}

export type Options = {
    id: string,
    value: string
}

export type Results = {
    score: number;
    level: string;
    correctAnswers: number;
}

export interface AnswerKey {
    id: string;
    keys: {
      [key: string]: number;
    }
  }

export type Answers = { [key: string]: string | undefined }

export type ContactFormInputs = {
    email: string,
    fullName: string,
    phoneNumber: string
};

export type Timer = {
    type: 'question' | 'global',
    timeInSeconds: number
}

export type PlacementSettings = {
    timer: Timer
    questions: Question[]
    results: Results,
    isLoading: boolean,
    currentScreen: CurrentScreen
    currentQuestionIndex: number
  }

export type PlacementContext = {
    context: PlacementSettings;
    setContext: (context: PlacementSettings) => void;
}

export enum CurrentScreen {
    Intro,
    Questions,
    Results,
    Contact,
    GoodBye
  }
