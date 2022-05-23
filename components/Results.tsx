import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react'
import { Results as IResults } from '../types/types'
import ConfettiGenerator from 'confetti-js'
import { useEffect } from 'react'
import { BsWhatsapp } from 'react-icons/bs'

interface Props {
    results: IResults | undefined
    onAction: () => void
}

export const Results = ({ results, onAction }: Props) => {
  useEffect(() => {
    const confettiSettings = { target: 'my-canvas' }
    const confetti = new ConfettiGenerator(confettiSettings)
    confetti.render()

    return () => confetti.clear()
  }, []) // add the var dependencies or not

  return (
        <>
            <canvas id="my-canvas" style={{ zIndex: 1, position: 'absolute', left: 0, height: 'full' }} />
            <Stack
                zIndex={999}
                display='flex'
                justifyContent='center'
                alignItems='center'
                spacing={10}
            >
                <Text fontWeight='500' fontSize="2xl">Your level is</Text>
                <Box borderColor='red.700' border='1px' p={[5, 5]}>
                    <Heading>{results?.level}</Heading>
                </Box>
                <Text fontWeight='500' fontSize="2xl">We have an special offer for you!</Text>
                <Button
                    colorScheme='whatsapp'
                    leftIcon={<BsWhatsapp />}
                    onClick={() => onAction()}
                >
                    Continue
                </Button>
            </Stack>
        </>
  )
}
