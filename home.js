import React from 'react'
import Layout from '../components/layout'
import { FaSun, FaMoon } from 'react-icons/fa'
import {
  Box,
  Flex,
  Heading,
  useColorMode,
  VStack,
  IconButton,
  Spacer,
} from '@chakra-ui/react'
import ClientForm from '../components/Client/ClientForm'

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'

  return (
    <>
      <Layout>
        <VStack p={5}>
          <Flex w='100%'>
            <Spacer></Spacer>
            <IconButton
              icon={isDark ? <FaSun /> : <FaMoon />}
              isRound='true'
              onClick={toggleColorMode}
            ></IconButton>
          </Flex>

          <ClientForm />
        </VStack>
      </Layout>
    </>
  )
}
