import { Heading, Stack, Text } from '@chakra-ui/react'
import { ContactForm } from './ContactForm'

interface Props {
    onFinish: () => void;
}

const ContactScreen = ({ onFinish }: Props) => {
  return (
        <Stack>
            <Heading>We&apos;re almost done!</Heading>
            <Text maxWidth="50%"></Text>
            <ContactForm
                onFinish={onFinish}
            />
        </Stack>
  )
}

export default ContactScreen
