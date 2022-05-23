import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'

interface Props {
    currentQuestion: number
    totalQuestions: number
}

export const CurrentProgress = ({ currentQuestion, totalQuestions }: Props) => (
    <CircularProgress value={(currentQuestion / totalQuestions) * 100} color='brand.400' thickness='12px'>
    <CircularProgressLabel>{Math.round((currentQuestion / totalQuestions) * 100)}%</CircularProgressLabel>
    </CircularProgress>
)
