import { Button, Container, Box, Image } from '@chakra-ui/react'
import { IntroInstruction } from './IntroInstructions'

interface Props {
    onStart: () => void;
}

export const Intro = ({ onStart }: Props) => (
    <Container>
        <Box display='flex' mx='auto' width={['90%', '75%']}>
            <Image src='/logo.png' alt='Placementek logo' />
        </Box>
        <IntroInstruction />
        <Box display='flex' alignContent='center' justifyContent='center' alignItems='center'>
            <Button color='whiteAlpha.800' size={'lg'} bg='brand.primary' _hover={{ bg: 'whiteAlpha.900', border: '1px solid', borderColor: 'gray.900', color: 'gray.900', transform: 'scale(1.05)' }} onClick={() => onStart()}>
                Let&apos;s start
            </Button>

        </Box>
    </Container>

)
