import { Button, FormControl, FormHelperText, FormLabel, Input, Stack } from '@chakra-ui/react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import PlacementService from '../services/PlacementService'
import { ContactFormInputs } from '../types/types'

interface Props {
    onFinish: (data: ContactFormInputs) => void;
}

export const ContactForm = ({ onFinish } : Props) => {
  const { control, register, handleSubmit, watch, formState: { errors } } = useForm<ContactFormInputs>()
  const onSubmit: SubmitHandler<ContactFormInputs> = data => sendCourses()

  const sendCourses = async () => {
    const formData = watch()
    const sendCourse = await PlacementService.sendForm(formData)
    console.log({ sendCourse })
    onFinish()
  }

  return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={6}>
                <FormControl isRequired>
                    <FormLabel htmlFor='email'>Email</FormLabel>
                    <Input id='email' type='email' placeholder="juan@gmail.com" {...register('email')} />
                    {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
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
                                width='100%'
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
