import { Heading, Stack, Text, Button } from '@chakra-ui/react'

interface Props {
    onStart: () => void;
}

export const Intro = ({ onStart } : Props) => (
    <Stack>
        <Heading>Placementek</Heading>
        <Text>
            This is a brief introduction about the placement app.
        </Text>
        <Text>
            Each question represents a question type available in the app.
        </Text>
        <Text>
            The documentation and possible configurations are available on the github page.
        </Text>
        <Button onClick={() => onStart()}>
            Let&apos;s start
        </Button>
    </Stack>

)
