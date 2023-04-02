'use client'

import { Box, Card, CardBody, CardHeader, Container, Flex, Heading, Link, SimpleGrid, Stack, chakra, useBreakpointValue } from '@chakra-ui/react'
import { Cardz, EmptyCard, LineWithDot } from '../components/timelinestyledprops'

import Header from '../components/nav'
import HowItWork from '../components/howitwork'
import { Inter } from 'next/font/google'
import TopFooter from '../components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <Header />
            <Flex
                bg="#edf3f8"
                _dark={{
                    bg: "#3e3e3e",
                }}
                // p={50}
                w="full"
                alignItems="center"
                justifyContent="center"
            >
                <Flex
                    justify="center"
                    bg="white"
                    _dark={{
                        bg: "gray.800",
                    }}
                    w="full"
                >
                    <Box
                        w={{
                            base: "full",
                            md: "75%",
                            lg: "50%",
                        }}
                        px={4}
                        py={20}
                        textAlign={{
                            base: "left",
                            md: "center",
                        }}
                    >
                        <chakra.span
                            fontSize={{
                                base: "3xl",
                                sm: "4xl",
                            }}
                            fontWeight="extrabold"
                            letterSpacing="tight"
                            lineHeight="shorter"
                            color="gray.900"
                            _dark={{
                                color: "gray.100",
                            }}
                            mb={6}
                        >
                            <chakra.span display="block">Artificial Intelligence</chakra.span>
                            <chakra.span
                                fontSize={'xl'}
                                display="block"
                                color="brand.600"
                                _dark={{
                                    color: "gray.500",
                                }}
                            >
                                A ONE YEAR AI PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS. <br />
                                GETTING PAKISTAN READY FOR THE NEW ERA OF COMPUTING ENABLED BY THE RISE OF AI.
                            </chakra.span>
                        </chakra.span>
                    </Box>
                </Flex>
            </Flex>;

            <Box
                p={10}>
                <Box>
                    <chakra.p
                        pb={8}
                        fontSize={'5xl'}
                        textAlign="center"
                        fontWeight='bold'>Program Structure</chakra.p>
                    <chakra.p
                        pb={8}
                        fontSize={'2xl'}
                        textAlign="center"
                        fontWeight='medium'>Four Quarters of Blockchain Course Work</chakra.p>
                </Box>


                <chakra.p
                    pb={8}
                    fontSize={'2xl'}
                    fontWeight='bold'>Technical Track</chakra.p>
                <SimpleGrid columns={[1, 2, 4]} spacing='40px'>
                    <Card boxShadow={"2xl"} variant={'elevated'}>
                        <CardHeader>
                            <Heading size='md'> {'Quarter 1'}</Heading>
                        </CardHeader>
                        <CardBody>
                            <chakra.p>Foundations of Blockchain</chakra.p>
                        </CardBody>
                    </Card>
                    <Card boxShadow={"2xl"} variant={'elevated'}>
                        <CardHeader>
                            <Heading size='md'> {'Quarter 2'}</Heading>
                        </CardHeader>
                        <CardBody>
                            <chakra.p>Smart Contract Development</chakra.p>
                        </CardBody>
                    </Card>
                    <Card boxShadow={"2xl"} variant={'elevated'}>
                        <CardHeader>
                            <Heading size='md'> {'Quarter 3'}</Heading>
                        </CardHeader>
                        <CardBody>
                            <chakra.p>Dapp Development</chakra.p>
                        </CardBody>
                    </Card>
                    <Card boxShadow={"2xl"} variant={'elevated'}>
                        <CardHeader>
                            <Heading size='md'> {'Quarter 4'}</Heading>
                        </CardHeader>
                        <CardBody>
                            <chakra.p>Advanced Blockchain Topics</chakra.p>
                        </CardBody>
                    </Card>
                </SimpleGrid>
            </Box>

            <Box
                p={10}
            >


                <Box

                    as='a'
                    href='/Innovation-leadership/'
                >
                    <chakra.p
                        pb={8}
                        fontSize={'2xl'}
                        fontWeight='bold'>Compulsory Innovation Track</chakra.p>
                    <SimpleGrid columns={[1, 2, 4]} spacing='40px'>
                        <Card boxShadow={"2xl"} variant={'elevated'}>
                            <chakra.img
                                src='/em.gif'
                                w={'150px'}
                                h={'150px'}
                                alignSelf='center'
                            />

                        </Card>
                        <Card boxShadow={"2xl"} variant={'elevated'}>
                            <CardHeader>
                                <Heading size='md'> {'Quarter 1'}</Heading>
                            </CardHeader>
                            <CardBody>
                                <chakra.p>Innovation Methodologies</chakra.p>
                            </CardBody>
                        </Card>
                        <Card boxShadow={"2xl"} variant={'elevated'}>
                            <CardHeader>
                                <Heading size='md'> {'Quarter 2'}</Heading>
                            </CardHeader>
                            <CardBody>
                                <chakra.p>Infrastructure As Code and DevOps</chakra.p>
                            </CardBody>
                        </Card>
                        <Card boxShadow={"2xl"} variant={'elevated'}>
                            <CardHeader>
                                <Heading size='md'> {'Quarter 3'}</Heading>
                            </CardHeader>
                            <CardBody>
                                <chakra.p>Lean UI/UX and Bot Design</chakra.p>
                            </CardBody>
                        </Card>
                    </SimpleGrid>
                </Box>
            </Box>

            <Box>
                <Milestones/>
            </Box>

            
            <TopFooter />
        </>
    )
}


const milestones = [
    {
      id: 1,
      date: 'MARCH 30, 2022',
      title: 'Chakra Hackathon',
      description: `Winner of first ever ChakraUI Hackathon. On sait depuis longtemps que travailler avec du texte lisible et contenant du sens.`
    },
    {
      id: 2,
      date: 'July 30, 2021',
      title: 'Open Source, first contribution',
      description: `Fixing a typo, to fix a bug, contributing to Open Source and collaborating to improve technology for everyone, Ahmad's world changed again!.`
    },
    {
      id: 3,
      date: 'July 30, 2018',
      title: 'Freelancing, started working for myself',
      description:
        'Ahmad starts his own business consulting for companies as a fullstack developer. Clients include UK Government departments, UK banks, global fintechs and startups.'
    },
    {
      id: 4,
      date: 'July 30, 2018',
      title: 'Freelancing, started working for myself',
      description:
        'Ahmad starts his own business consulting for companies as a fullstack developer. Clients include UK Government departments, UK banks, global fintechs and startups.'
    },
    {
      id: 5,
      date: 'July 30, 2018',
      title: 'Freelancing, started working for myself',
      description:
        'Ahmad starts his own business consulting for companies as a fullstack developer. Clients include UK Government departments, UK banks, global fintechs and startups.'
    },
    {
      id: 6,
      date: 'July 30, 2018',
      title: 'Freelancing, started working for myself',
      description:
        'Ahmad starts his own business consulting for companies as a fullstack developer. Clients include UK Government departments, UK banks, global fintechs and startups.'
    }
  ];
  
  const Milestones = () => {
    const isMobile = useBreakpointValue({ base: true, md: false });
    const isDesktop = useBreakpointValue({ base: false, md: true });
  
    return (
      <Container maxWidth="7xl" p={{ base: 2, sm: 10 }}>
        <chakra.h3 fontSize="4xl" fontWeight="bold" mb={18} textAlign="center">
        Detailed Program Structure
        </chakra.h3>
        {milestones.map((milestone) => (
          <Flex key={milestone.id} mb="10px">
            {/* Desktop view(left card) */}
            {isDesktop && milestone.id % 2 === 0 && (
              <>
                <EmptyCard />
                <LineWithDot />
                <Cardz {...milestone} />
              </>
            )}
  
            {/* Mobile view */}
            {isMobile && (
              <>
                <LineWithDot />
                <Cardz {...milestone} />
              </>
            )}
  
            {/* Desktop view(right card) */}
            {isDesktop && milestone.id % 2 !== 0 && (
              <>
                <Cardz {...milestone} />
  
                <LineWithDot />
                <EmptyCard />
              </>
            )}
          </Flex>
        ))}
      </Container>
    );
  };