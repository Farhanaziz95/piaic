'use client'

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';

import Header  from '../components/nav'
import ImageGellary from "../components/imagegellary"
import { Inter } from 'next/font/google'
import TopFooter  from '../components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Header />

    <Stack minH={'50vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'green.400',
                zIndex: -1,
              }}>
              WOMEN
            </Text>
            <br />{' '}
            <Text color={'green.400'} as={'span'}>
            INCLUSION IN TECHNOLOGY
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            The project board is an exclusive resource for contract work. It's
            perfect for freelancers, agencies, and moonlighters.
          </Text>
          
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            '/wit/WIT.jpeg'
          }
        />
      </Flex>
    </Stack>

    <Container maxW={'7xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 3, md: 6 }}>
          
          <Text  fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
          The Women Empowerment Division of the Presidential Initiative for Artificial Intelligence & Computing is committed to the empowerment and autonomy of women in Pakistan. <br /><br />

The single most important channel for the empowerment of women is education. The Women Empowerment Division is committed to providing the best technical education in the world with the flexibility to allow just about anyone to participate and improve their lives. The primary objective of the Women Empowerment Division is to provide a platform via which women can receive education and training to jumpstart their careers in the global technology industry.<br /><br />

The Women Inclusion in Technology project is the largest initiative on women education in Pakistan. The main of the project is to drive female participation in the technology industry in Pakistan from less than 5% to 30% over the next two years. Via this project, PIAIC is propagating awareness and training on the latest, most state-of-the-art technologies to women in Pakistan. The Women Empowerment Division will aid highly skilled women in technology to establish themselves as entrepreneurs and leaders in the technology industry not only in Pakistan but also around the world.
          </Text>
         =
        </Stack>
      </Container>


    <ImageGellary />
    <TopFooter />
    </>
  )
}
