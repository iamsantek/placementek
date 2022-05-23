export enum QuestionType {
    AUDIO = "audio",
    VIDEO = "video",
    TEXT = "text"
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
    level: string
}

export interface AnswerKey {
    id: string;
    keys: {
      [key: string]: number;
    }
  }

export type Answers = { [key: string]: string }

export type ContactFormInputs = {
    email: string,
    fullName: string,
    phoneNumber: string
};
