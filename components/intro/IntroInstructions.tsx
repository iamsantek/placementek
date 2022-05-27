import { List, ListItem, ListIcon, Text, Box, Stack } from '@chakra-ui/react'
import { IconType } from 'react-icons'
import { AiFillCheckCircle } from 'react-icons/ai'

interface Instruction {
  title: string;
  description: string;
  icon: IconType
}

const instructions: Instruction[] = [
  {
    title: 'Each question has between 2 and 8 options',
    description: "Only one option are correct. There is no penalty for quessing if you don't know the answer; therefore, make sure you attempt all of the questions.",
    icon: AiFillCheckCircle
  },
  {
    title: 'Total 40 minutes test duration, 2 minutes for each question.',
    description: 'You will only be given 2 minutes for each question. If you exceed the time limit, the current question will be skipped to the next question, and marked as an incorrect answer. \n The clock timing of your test is located at the top of the test window.',
    icon: AiFillCheckCircle
  },
  {
    title: "You can't go back to previous question",
    description: 'Make sure you already answer current question.',
    icon: AiFillCheckCircle
  },
  {
    title: 'The clock timing of your test is located at the top of the test window.',
    description: "You can't go back to previous question",
    icon: AiFillCheckCircle
  },
  {
    title: 'Questions will be displayed one at a time.',
    description: 'A next button is provided at the bottom of the test page for navigating to the next question. Do not press the next button if you have not answered the question.',
    icon: AiFillCheckCircle
  },
  {
    title: 'Please use only latest browser',
    description: 'This test is best viewed using Internet Explorer version 11.0 or higher or Mozilla Firefox 45.0 or higher or Google Chrome 48 or higher.',
    icon: AiFillCheckCircle
  }
]

export const IntroInstruction = () => {
  return (
    <>
      <Stack spacing={3} marginY={7} align='center'>
        <Text
          align='center'
          bgGradient='radial(#3cb371,#59da6b)'
          bgClip='text'
          fontWeight='bold'
        >
          This test must be completed in one session, make sure your internet is reliable also make sure you&apos;re finished before exiting</Text>
      </Stack>
      <List spacing={5} marginY={8}>
        {instructions.map((instructions, index) => (
          <ListItem key={index}>
            <Box display='flex' alignContent='center'>
              <ListIcon as={instructions.icon} color='brand.secondary' alignContent='center' alignSelf={'center'} />
              <Text fontWeight='bold'>{instructions.title}</Text>
            </Box>
            <Box display='flex' flexDirection='column' marginTop={1}>
              <Text fontWeight='thin' color='gray.500'>{instructions.description}</Text>
            </Box>
          </ListItem>

        ))}
      </List>
    </>
  )
}
