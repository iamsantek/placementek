import { Button, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react'
import { useContext } from 'react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { PlacementContext } from '../context/PlacementContext'
import PlacementService from '../services/PlacementService'
import { ContactFormInputs, CurrentScreen } from '../types/types'

export const ContactForm = () => {
  const { control, register, handleSubmit } = useForm<ContactFormInputs>()
  const { context, setContext } = useContext(PlacementContext)
  const { results } = context

  const sendContactForm = async (form: ContactFormInputs) => {
    await PlacementService.sendContactForm(form, results)

    setContext({
      ...context,
      currentScreen: CurrentScreen.GoodBye
    })
  }

  const onSubmit: SubmitHandler<ContactFormInputs> = data => sendContactForm(data)

  return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={6}>
                <FormControl isRequired>
                    <FormLabel htmlFor='email'>Email</FormLabel>
                    <Input id='email' type='email' placeholder="juan@gmail.com" {...register('email')} />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel htmlFor='first-name'>Full name</FormLabel>
                    <Input id='first-name' placeholder='Juan' {...register('fullName')} />
                </FormControl>
                <FormControl isRequired>
                <FormLabel htmlFor='phoneNumber'>Phone number</FormLabel>
                    <Controller
                        name="phoneNumber"
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { onChange, value } }) => (
                            <PhoneInput
                                country='ar'
                                value={value}
                                onChange={onChange}
                                countryCodeEditable={false}
                                inputStyle={{
                                  height: '2.5rem',
                                  width: '100%',
                                  border: '1px solid #E2E8F0'
                                }}
                                buttonStyle={{
                                  border: '1px solid #E2E8F0',
                                  backgroundColor: 'gray.100'
                                }}
                            />
                        )}
                    />
                </FormControl>
                <Button
                    type="submit"
                >
                    🚀 Send me ful results
                </Button>
            </Stack>
        </form>
  )
}
