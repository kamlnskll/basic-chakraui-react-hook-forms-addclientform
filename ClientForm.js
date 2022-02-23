import {
  Flex,
  FormControl,
  Button,
  Input,
  ButtonGroup,
  Center,
  VStack,
  HStack,
  Heading,
} from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'
import React from 'react'
import { useForm } from 'react-hook-form'

export default function ClientForm() {
  const { register, handleSubmit, errors, reset } = useForm()

  // Modify onSubmit to post data whereever you need - i.e. your database.

  const onSubmit = (data) => console.log(data)

  return (
    <>
      <HStack>
        <Heading>Add New Client</Heading>
        <Button rounded={'25px'} backgroundColor='red.400'>
          <CloseIcon />
        </Button>
      </HStack>

      <Flex
        backgroundColor={'gray.100'}
        color={'black.100'}
        padding={'5%'}
        borderRadius={20}
      >
        <FormControl onSubmit={handleSubmit(onSubmit)}>
          <VStack>
            <HStack>
              <Input
                type='text'
                placeholder='First Name'
                {...register('firstName')}
                border={'1px'}
                borderColor={''}
              />
              <Input
                type='text'
                placeholder='Last Name'
                {...register('lastName')}
              />
            </HStack>
            <HStack>
              <Input type='text' placeholder='Email' {...register('email')} />
              <Input
                type='text'
                placeholder='Phone Number'
                {...register('phoneNumber')}
              />
            </HStack>
            <HStack>
              <Input
                type='text'
                placeholder='Address'
                {...register('address')}
              />
              <Input type='text' placeholder='Unit #' {...register('unit')} />
            </HStack>
            <HStack>
              <Input type='text' placeholder='City' {...register('city')} />
              <Input
                type='text'
                placeholder='Province'
                {...register('province')}
              />
            </HStack>
            <Input type='text' placeholder='Company' {...register('company')} />
          </VStack>
          <Center>
            <ButtonGroup mt={5} spacing={'3rem'} color={'black.400'}>
              <Button
                type='submit'
                backgroundColor={'green.300'}
                onClick={handleSubmit(onSubmit)}
              >
                Submit
              </Button>
              <Button
                backgroundColor={'orange.300'}
                type='reset'
                onClick={() =>
                  reset({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phoneNumber: '',
                    address: '',
                    unit: '',
                    city: '',
                    province: '',
                    company: '',
                  })
                }
              >
                Reset Fields
              </Button>
            </ButtonGroup>
          </Center>
        </FormControl>
      </Flex>
    </>
  )
}
