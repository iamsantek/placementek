import { useRadio, Box, Text, Square } from '@chakra-ui/react'

export function ChoiceOption (props: any) {
  const { getInputProps, getCheckboxProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  return (
    <Box as='label'>
      <input {...input} />
      <Box
        {...checkbox}
        cursor='pointer'
        borderWidth='1px'
        borderRadius='md'
        boxShadow='md'
        _checked={{
          bg: 'brand.400',
          color: 'white'
        }}
        _focus={{
          transform: 'scale(1.03)'
        }}
        px={5}
        py={3}
        flexDirection='row'
        display='flex'
        gap={3}
        alignContent='center'
        alignItems='center'
      >
        <Square h={7} w={7} border='1px' borderColor='gray.100'>
          <Text>{props.letter}</Text>
        </Square>
        {props.children}
      </Box>
    </Box>
  )
}
