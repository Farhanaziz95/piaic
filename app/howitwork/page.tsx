'use client'

import { Box, useColorModeValue } from '@chakra-ui/react'

import Header from '../components/nav'
import HowItWork from '../components/howitwork'
import { Inter } from 'next/font/google'
import TopFooter from '../components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Box bg={useColorModeValue('white', 'gray.700')}>
        <Header />

        <HowItWork />
        <TopFooter />
      </Box>
    </>
  )
}
