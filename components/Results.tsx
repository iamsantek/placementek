import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react'
import ConfettiGenerator from 'confetti-js'
import { useContext, useEffect } from 'react'
import { BsWhatsapp } from 'react-icons/bs'
import { PlacementContext } from '../context/PlacementContext'
import { CurrentScreen } from '../types/types'

export const Results = () => {
  const { context, setContext } = useContext(PlacementContext)

  const onAction = () => {
    setContext({
      ...context,
      currentScreen: CurrentScreen.Contact
    })
  }

  useEffect(() => {
    const confettiSettings = { target: 'my-canvas' }
    const confetti = new ConfettiGenerator(confettiSettings)
    confetti.render()

    return () => confetti.clear()
  }, [])

  const { results } = context

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
                    <Heading
                        bgGradient='linear(to-l, #7928CA, #FF0080)'
                        bgClip='text'
                        >
                            {results?.level}
                        </Heading>
                </Box>
                <Text fontWeight='500' fontSize="2xl">We have an special offer for you!</Text>
                <Button
                    colorScheme='whatsapp'
                    leftIcon={<BsWhatsapp />}
                    onClick={onAction}
                >
                    Continue
                </Button>
            </Stack>
        </>
  )
}
