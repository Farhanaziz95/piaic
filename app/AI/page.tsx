'use client'

import { Box, Card, CardBody, CardHeader, Container, Flex, Heading, Link, SimpleGrid, Stack, chakra, useBreakpointValue, useColorModeValue } from '@chakra-ui/react'
import { Cardz, EmptyCard, LineWithDot } from '../components/timelinestyledprops'

import Header from '../components/nav'
import HowItWork from '../components/howitwork'
import { Inter } from 'next/font/google'
import TopFooter from '../components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <Box bg={useColorModeValue('white', 'gray.800')}>
                <Header />
                <Flex
                    bg={useColorModeValue('white', 'gray.800')}
                    // p={50}
                    w="full"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Flex
                        justify="center"
                        bg={useColorModeValue('white', 'gray.800')}
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
                                color={useColorModeValue('gray.900', 'gray.100')}
                                
                                mb={6}
                            >
                                <chakra.span display="block">Artificial Intelligence</chakra.span>
                                <chakra.span
                                    fontSize={'xl'}
                                    display="block"
                                    color={useColorModeValue('brand.600', 'gray.500')}
                                >
                                    A ONE YEAR AI PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS. <br />
                                    GETTING PAKISTAN READY FOR THE NEW ERA OF COMPUTING ENABLED BY THE RISE OF AI.
                                </chakra.span>
                            </chakra.span>
                        </Box>
                    </Flex>
                </Flex>;

                <Box bg={useColorModeValue('white', 'gray.800')}
                    p={10}>
                    <Box bg={useColorModeValue('white', 'gray.800')}>
                        <chakra.p
                            color={useColorModeValue('black', 'white')}
                            pb={8}
                            fontSize={'5xl'}
                            textAlign="center"
                            fontWeight='bold'>Program Structure</chakra.p>
                        <chakra.p
                        color={useColorModeValue('brand.600', 'gray.500')}
                            pb={8}
                            fontSize={'2xl'}
                            textAlign="center"
                            fontWeight='medium'>A four-quarter AI program in Data Science, Machine Learning, and Deep Learning.</chakra.p>
                    </Box>


                    <chakra.p
                        color={useColorModeValue('black', 'white')}
                        pb={8}
                        fontSize={'2xl'}
                        fontWeight='bold'>Technical Track</chakra.p>
                    <SimpleGrid columns={[1, 2, 4]} spacing='40px'>
                        <Card boxShadow={"2xl"} variant={'elevated'}>
                            <CardHeader>
                                <Heading size='md'> {'Quarter 1'}</Heading>
                            </CardHeader>
                            <CardBody>
                                <chakra.p>AI Foundations</chakra.p>
                            </CardBody>
                        </Card>
                        <Card boxShadow={"2xl"} variant={'elevated'}>
                            <CardHeader>
                                <Heading size='md'> {'Quarter 2'}</Heading>
                            </CardHeader>
                            <CardBody>
                                <chakra.p>Introduction to Data Science & Deep Learning</chakra.p>
                            </CardBody>
                        </Card>
                        <Card boxShadow={"2xl"} variant={'elevated'}>
                            <CardHeader>
                                <Heading size='md'> {'Quarter 3'}</Heading>
                            </CardHeader>
                            <CardBody>
                                <chakra.p>Deploying AI Solutions</chakra.p>
                            </CardBody>
                        </Card>
                        <Card boxShadow={"2xl"} variant={'elevated'}>
                            <CardHeader>
                                <Heading size='md'> {'Quarter 4'}</Heading>
                            </CardHeader>
                            <CardBody>
                                <chakra.p>AI In Practice</chakra.p>
                            </CardBody>
                        </Card>
                    </SimpleGrid>
                </Box>

                <Box
                    bg={useColorModeValue('white', 'gray.800')}
                    p={10}
                >


                    <Box
                        bg={useColorModeValue('white', 'gray.800')}
                        as='a'
                        href='/Innovation-leadership/'
                    >
                        <chakra.p
                            color={useColorModeValue('black', 'white')}
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
                    <Milestones />
                </Box>


                <TopFooter />
            </Box>
        </>
    )
}


const milestones = [
    {
        id: 1,
        date: '1A',
        title: 'Version Control with Git',
        description: `You won't find a top programmer, web developer, or AI engineer who doesn't use version control. This is true because version control helps developers produce better results and makes collaboration easy. Around the world, in teams both large and small, Git is an essential part of the toolchain. This module covers Git and Github.`
    },
    {
        id: 2,
        date: '1B',
        title: 'Object Oriented and Functional Programming using Python',
        description: `In the second module of the program, students will learn about basic programming concepts such as lists, dictionaries, classes, functions and loops, and practice writing clean and readable code with exercises for each topic. Students will also learn how to make programs interactive and how to test code safely before adding it to a project. It is a fast-paced, thorough introduction to programming with Python 3.6 that will have students writing programs, solving problems, and making things that work in no time.`
    },
    {
        id: 3,
        date: '1C',
        title: 'Introduction to Linear Algebra and Statistics',
        description: `In this module, students will learn the basic mathematical and statistical concepts that are needed to practice data science and understand deep learning. Students will also implement these concepts in Python and TensorFlow.`
    },
    {
        id: 4,
        date: '2A',
        title: 'Advanced Python Libraries with Anaconda',
        description: `In this module, students will be introduced to Anaconda, the leading open data science platform powered by Python. The open source version of Anaconda is a high performance distribution of Python and R and includes over 100 of the most popular Python and R packages for data science, such as NumPy, Matplotlib, etc.`
    },
    {
        id: 5,
        date: '2B',
        title: 'Data Science Essentials',
        description: `In this module, students will learn key concepts and techniques used to perform data science; including statistical analysis, data cleansing and transformation, and data visualization with Python.`
    },
    {
        id: 6,
        date: '2C',
        title: 'The Fundamentals of Deep Learning with Keras with TensorFlow Backend',
        description: `Before implementing deep-learning algorithms, students will first become familiar with the mathematical blocks of the neural networks theory. Students will get a chance to get their hands dirty writing some simple Keras code right away! Then they will move on to advanced deep learning concepts. This module will also cover some essential advantages of Keras to prove it’s the deep-learning library of choice.`
    },
    {
        id: 7,
        date: '3A',
        title: 'Introduction to Linux and Bash',
        description: `Linux containers are poised to take over the world. In this module, students will begin learning with an introduction of Linux and the command line interface. For many non-technical people, the command line (also referred to as CLI, Terminal, bash, or shell) is a place of mystery. However, knowledge of only a handful of basic commands is enough to start feeling comfortable. In this module, we will cover the basic commands to get you started.`
    },
    {
        id: 8,
        date: '3B',
        title: 'Docker Deep Dive',
        description: `This module provides a soup-to-nuts learning experience for core Docker technologies, including the Docker Engine, Images, Containers, Registries, Networking, Storage, and more. All of the behind the scenes theory is explained, and all concepts are clearly demonstrated on the command line. No prior knowledge of Docker or Linux is required.`
    },
    {
        id: 9,
        date: '3C',
        title: 'Python Microservices Development',
        description: `In recent years, REST (REpresentational State Transfer) has emerged as the standard architectural design for web services and web APIs. In this module, students will learn how easy it is to create a RESTfulweb service using Python and Flask.`
    },
    {
        id: 10,
        date: '3D',
        title: 'Build AI Microservices for ContainerDeployments',
        description: `In this module, students will learn to use containers to simplify AI solution deployments and implement continuous integration and deployment strategies.`
    },
    {
        id: 11,
        date: '4',
        title: 'Artificial Intelligence (AI) in Practice',
        description: `This module is structured around a series of practical code examples, demonstrating on real world problems. PIAIC strongly believes in the value of teaching using concrete examples, anchoring theoretical ideas into actual results and tangible code patterns. These examples all rely on Keras, the Python deep learning library. Students will learn Deep Learning for computer vision, text and sequences, finance, and advanced neural network design.`
    },
];

const Milestones = () => {
    const isMobile = useBreakpointValue({ base: true, md: false });
    const isDesktop = useBreakpointValue({ base: false, md: true });

    return (
        <Container bg={useColorModeValue('white', 'gray.800')} maxWidth="7xl" p={{ base: 2, sm: 10 }}>
            <chakra.h3 color={useColorModeValue('black', 'white')} fontSize="4xl" fontWeight="bold" mb={18} textAlign="center">
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