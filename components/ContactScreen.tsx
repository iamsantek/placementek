import { Heading, Stack, Text } from '@chakra-ui/react'
import { ContactForm } from './ContactForm'

const ContactScreen = () => {
  return (
        <Stack>
            <Heading>We&apos;re almost done!</Heading>
            <Text maxWidth="50%"></Text>
            <ContactForm />
        </Stack>
  )
}

export default ContactScreen
