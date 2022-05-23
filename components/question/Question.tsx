import { Heading, Stack, Button, useRadioGroup } from '@chakra-ui/react'
import { useMemo, useState } from 'react'
import { ChoiceOption } from '../ChoiceOption'
import { AudioQuestion, Question as IQuestion, QuestionType, VideoQuestion as IVideoQuestion } from '../../types/types'
import { AudioQuestions } from './AudioQuestion'
import { VideoQuestion } from './VideoQuestion'

interface Props {
    question: IQuestion;
    onAnswer: (question: IQuestion, answerId: string) => void;
}

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

export const Question = ({ question, onAnswer }: Props) => {
  const [answer, setAnswer] = useState<string>()
  const { getRadioProps } = useRadioGroup({
    name: question?.id,
    onChange: setAnswer
  })

  const questionTypeComponents = useMemo(() => ({
    [QuestionType.AUDIO]: <AudioQuestions question={question as AudioQuestion} />,
    [QuestionType.TEXT]: <></>,
    [QuestionType.VIDEO]: <VideoQuestion question={question as IVideoQuestion} />
  }), [question])

  return (
        <Stack spacing={10}>
            {questionTypeComponents[question.type]}
            <Heading fontWeight='900' color='brand.500'>{question.text}</Heading>
            <Stack spacing={4}>
                {question.options.map((_, index) => {
                  const radio = getRadioProps({ value: _.id })
                  return (
                        <ChoiceOption key={_.id} {...radio} letter={alphabet[index]}>
                            {_.value}
                        </ChoiceOption>
                  )
                })}
                <Button
                    color={'brand.300'}
                    isDisabled={!answer}
                    onClick={() => onAnswer(question, answer!)}
                >
                    Next
                </Button>
            </Stack>
        </Stack>
  )
}
