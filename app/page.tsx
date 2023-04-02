'use client'

import { Box, Button, Card, CardBody, CardFooter, CardHeader, Heading, SimpleGrid, chakra } from '@chakra-ui/react'

import Achivements from './components/achivements'
import BottomFooter from './components/footer'
import Header from './components/nav'
import HomeHero from './components/homehero'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import TopFooter from './components/footer'
import VideoSection from './components/videosection'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header />
      <HomeHero />
      <Box
        p={10}>
        <Box>
          <chakra.p
            pb={8}
            fontSize={'5xl'}
            textAlign="center"
            fontWeight='bold'>Available Programs</chakra.p>

        </Box>

        <SimpleGrid columns={[1, 2, 4]} spacing='40px'>
          <Card boxShadow={"2xl"} variant={'elevated'}>
            <CardHeader>
              <Heading  textAlign={'center'} size='md'> {'Artificial Intelligence'}</Heading>
            </CardHeader>
            <CardBody textAlign={'center'}>
              <chakra.p textAlign={'center'}>A one year AI program designed for absolute beginenrs. Getting Pakistan ready for the new era of computing enabled by the rise of AI.</chakra.p>
              
            </CardBody>
            <CardFooter justifyContent={'center'}>
            <Button
                as={'a'}
                href="/AI/"
                fontWeight={"bold"}
                boxShadow={'dark-lg'}
                _hover={{ bg: 'green.300', }} _focus={{ bg: 'green.300', }} bg='green.400' width={"150px"}>Learn More</Button>
            </CardFooter>
          </Card>
          <Card boxShadow={"2xl"} variant={'elevated'}>
            <CardHeader>
              <Heading  textAlign={'center'} size='md'> {'Cloud Native Web'}</Heading>
            </CardHeader>
            <CardBody textAlign={'center'}>
              <chakra.p textAlign={'center'}>A one year Cloud Native and Mobile Web computing program designed for absolute beginenrs. Getting Pakistan ready for the new era of microservices and multi-cloud native computing.</chakra.p>
              
            </CardBody>
            <CardFooter justifyContent={'center'}>
            <Button
                as={'a'}
                href="/Cloud/"
                fontWeight={"bold"}
                boxShadow={'dark-lg'}
                _hover={{ bg: 'green.300', }} _focus={{ bg: 'green.300', }} bg='green.400' width={"150px"}>Learn More</Button>
            </CardFooter>
          </Card>
          <Card boxShadow={"2xl"} variant={'elevated'}>
            <CardHeader>
              <Heading textAlign={'center'} size='md'> {'Blockchain Specialist'}</Heading>
            </CardHeader>
            <CardBody textAlign={'center'}>
              <chakra.p textAlign={'center'}>A one year Blockchain specialist program designed for absolute beginenrs. Getting Pakistan ready for the new era of Blockchain, Fintech and Smart Contracts.</chakra.p>
              
            </CardBody>
            <CardFooter justifyContent={'center'}>
            <Button
                as={'a'}
                href="/Blockchain/"
                fontWeight={"bold"}
                boxShadow={'dark-lg'}
                _hover={{ bg: 'green.300', }} _focus={{ bg: 'green.300', }} bg='green.400' width={"150px"}>Learn More</Button>
            </CardFooter>
          </Card>
          <Card boxShadow={"2xl"} variant={'elevated'}>
            <CardHeader>
              <Heading textAlign={'center'} size='md'> {'Metaverse and Web 3.0'}</Heading>
            </CardHeader>
            <CardBody >
              <chakra.p textAlign={'center'}>A one year Metaverse and Web 3.0 program designed for absolute beginenrs. Getting Pakistan ready for the new era of computing enabled by the rise of Web 3.0.</chakra.p>
              
            </CardBody>
            <CardFooter justifyContent={'center'}>
            <Button
                as={'a'}
                href="https://panaverse-dao-syllabus-nu.vercel.app/"
                fontWeight={"bold"}
                boxShadow={'dark-lg'}
                _hover={{ bg: 'green.300', }} _focus={{ bg: 'green.300', }} bg='green.400' width={"150px"}>Learn More</Button>
            </CardFooter>
          </Card>
        </SimpleGrid>
      </Box>
      <VideoSection />
      <Achivements />
      <TopFooter />
    </>
  )
}
