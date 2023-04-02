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
                                <chakra.span display="block">Internet of Things and
                                    AI Specialist</chakra.span>
                                <chakra.span
                                    fontSize={'xl'}
                                    display="block"
                                    color={useColorModeValue('brand.600', 'gray.500')}
                                >
                                    A FIFTEEN MONTHS IOT AND AI PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS GETTING PAKISTAN READY FOR THE NEW ERA OF INTERNET OF THINGS AND AI
                                </chakra.span>
                            </chakra.span>
                        </Box>
                    </Flex>
                </Flex>;

                <Box
                    bg={useColorModeValue('white', 'gray.800')}
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
                            fontWeight='medium'>Six Quarters of IOT Course Work</chakra.p>
                    </Box>


                    <chakra.p
                    color={useColorModeValue('black', 'white')}
                        pb={8}
                        fontSize={'2xl'}
                        fontWeight='bold'>Technical Track</chakra.p>
                    <SimpleGrid columns={[1, 2, 3]} spacing='40px'>
                        <Card boxShadow={"2xl"} variant={'elevated'}>
                            <CardHeader>
                                <Heading size='md'> {'Quarter 1'}</Heading>
                            </CardHeader>
                            <CardBody>
                                <chakra.p>Introduction to IoT Concepts and Rust Programming</chakra.p>
                            </CardBody>
                        </Card>
                        <Card boxShadow={"2xl"} variant={'elevated'}>
                            <CardHeader>
                                <Heading size='md'> {'Quarter 2'}</Heading>
                            </CardHeader>
                            <CardBody>
                                <chakra.p>Embedded Rust and Real-time Systems Programming</chakra.p>
                            </CardBody>
                        </Card>
                        <Card boxShadow={"2xl"} variant={'elevated'}>
                            <CardHeader>
                                <Heading size='md'> {'Quarter 3'}</Heading>
                            </CardHeader>
                            <CardBody>
                                <chakra.p>Micro Services Development for IoT Edge and IoT Cloud using Web Assembly, Node.js, Docker and KubeEdge technologies</chakra.p>
                            </CardBody>
                        </Card>
                        <Card boxShadow={"2xl"} variant={'elevated'}>
                            <CardHeader>
                                <Heading size='md'> {'Quarter 4'}</Heading>
                            </CardHeader>
                            <CardBody>
                                <chakra.p>Voice Computing for Device Control</chakra.p>
                            </CardBody>
                        </Card>
                        <Card boxShadow={"2xl"} variant={'elevated'}>
                            <CardHeader>
                                <Heading size='md'> {'Quarter 5'}</Heading>
                            </CardHeader>
                            <CardBody>
                                <chakra.p>Artificial Intelligence (AI) for Internet of Things (IoT)</chakra.p>
                            </CardBody>
                        </Card>
                        <Card boxShadow={"2xl"} variant={'elevated'}>
                            <CardHeader>
                                <Heading size='md'> {'Quarter 6'}</Heading>
                            </CardHeader>
                            <CardBody>
                                <chakra.p>Blockchain and IOTA Technologies for IoT (Optional)</chakra.p>
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
        title: 'What Is IoT?',
        description: `This course will start by providing a definition of the term. We will talk about how various trends have enabled the Internet of Things, and how it changes the way programming is done. We will also discuss some of the ramifications that IoT is having on society today.`
    },
    {
        id: 2,
        date: '1B',
        title: 'Embedded Systems',
        description: `In this module we explore some of the details involved in the design and implementation of IoT devices. Unlike traditional computer-based systems, IoT devices are “embedded” within other devices in order to provide enhanced functionality without exposing the user to the complexities of a computer. The users interact with the device in a natural way, similar to their interactions with any other objects in the world. In this module we will discuss the structure of embedded systems and describe these interactions with the physical world.`
    },
    {
        id: 3,
        date: '1C',
        title: 'Hardware and Software for IoT',
        description: `IoT devices are implemented using both hardware and software components. Dedicated hardware components are used to implement the interface with the physical world, and to perform tasks which are more computationally complex. Microcontrollers are used to execute software that interprets inputs and controls the system. This module discusses the roles of both the hardware and software components in the system.`
    },
    {
        id: 4,
        date: '1D',
        title: 'Networking and the Internet for IoT',
        description: `This course will start by providing a definition of the term. We will talk about how various trends have enabled the Internet of Things, and how it changes the way programming is done. We will also discuss some of the ramifications that IoT is having on society today.`
    },
    {
        id: 5,
        date: '1E',
        title: 'Edge and Cloud Computing for IoT',
        description: `In IoT architecture, edge computing is a distributed computing paradigm which brings computer data storage closer to the location where it is needed. Computation is largely or completely performed on distributed device nodes. Edge computing pushes applications, data and computing power (services) away from centralized cloud points to locations closer to the user. Edge computing does not need contact with any centralized cloud, although in IoT archetectures it interacts with one.
        `
    },
    {
        id: 6,
        date: '1F',
        title: 'Version Control with Git',
        description: `You won't find a top programmer, web developer, or AI enginner who doesn't use version control. Because it helps you produce better results and makes collaboration easy. Around the world, in teams large and small, Git is an essential part of the tool chain. We will start learning our learning process by covering Git and Github.`
    },
    {
        id: 7,
        date: '1G',
        title: 'Fundamentals of Rust Programming',
        description: `This module explores key Rust concepts in depth, such as ownership, the type system, error handling, and fearless concurrency. This Rust programming language introduction will also show you how to: - Grasp important concepts unique to Rust, like ownership, borrowing, and lifetimes - Use Cargo, Rust’s built-in package manager, to build and maintain your code, including downloading and building dependencies - Effectively use Rust’s zero-cost abstractions and employ your own You’ll learn to develop reliable code that’s speed and memory efficient, while avoiding the infamous and arcane programming pitfalls common at the systems level.`
    },
    {
        id: 8,
        date: '2',
        title: 'Embedded Rust and Real-time Systems Programming',
        description: `A hands-on module teaches the Rust programming language in the context of embedded systems. As well as giving students a full grounding in the Rust programming language, this module teaches delegates how to program a modern embedded microcontroller using real-time development tools. The examples and exercises are tuned to the practical requirements of embedded microcontroller programming. What will you learn? The syntax and semantics of the Rust language for embedded programming The principles of embedded software programming and real-time programming How to program an embedded microcontroller in Rust A practical introduction to real-time development tools How to debug a Rust program on an STM32F3 Discovery device How to access memory-mapped peripherals using Rust How to write interrupt handlers in Rust An introduction to Real Time For the Masses (RTFM) framework An introduction to low power software design Best practices for embedded programming`
    },
    {
        id: 9,
        date: '3A',
        title: 'Introduction to Linux and Bas',
        description: `Linux containers are poised to take over the world; we will start this module with an introduction of Linux and the command line. For many non-technical people, the command line (also referred to as CLI, Terminal, bash, or shell) is a place of mystery. However, you only have to know a handful of basic commands to start feeling comfortable. In this module we will cover the basic commands to get you started.`
    },
    {
        id: 10,
        date: '3B',
        title: 'Docker Deep Dive',
        description: `This module provides a soup-to-nuts learning experience for core Docker technologies, including the Docker Engine, Images, Containers, Registries, Networking, Storage, and more. All of the behind the scenes theory is explained, and all concepts are clearly demonstrated on the command line. No prior knowledge of Docker or Linux is required.`
    },
    {
        id: 11,
        date: '3C',
        title: 'Fundamentals of Kubernetes for Edge and Cloud Computing',
        description: `The Kubernetes container orchestration system safely manages the structure and flow of a distributed application, organizing containers and services for maximum efficiency. Kubernetes serves as an operating system for your clusters, eliminating the need to factor the underlying network and server infrastructure into your designs. In this quarter we will teach you to use Kubernetes to deploy container-based distributed IoTapplications.`
    },
    {
        id: 12,
        date: '3D',
        title: 'Developing Cloud Native IoT Microservices',
        description: `This module teaches you how to build microservices using Node.js and WebAssembly/Rust. It starts by introducing Node's powerful traits and shows you how they map to the features of microservices using JavaScript and WebAssembly/Rust. You'll explore key development techniques, meet the rich ecosystem of companion tools and libraries, and get a glimpse into its inner workings. In recent years REST (REpresentational State Transfer) has emerged as the standard architectural design for web services and web APIs. In this module we are going to show you how easy it is to create a RESTful web service using Node.js, WebAssembly/Rust and the Express microframework. We will also learn gRPC and GraphQL based microservices. By the end of the module, you'll be able to use JavaScript/WebAssembly to build a Node microservice and know how to test it, hook it up to a database, and automate the development process.`
    },
    {
        id: 13,
        date: '3E',
        title: 'Fundamentals of KubeEdge',
        description: `The key goal for KubeEdge is extending Kubernetes ecosystem from cloud to edge. KubeEdge provides a containerized edge computing platform, which is inherently scalable. The rise of AI makes edge computing more important. Complex models trained in the cloud are deployed at the edge for inferencing. In this module we will go through the fundaments of KubeEdge technology.`
    },
    {
        id: 14,
        date: '4',
        title: 'Voice Computing for Device Control',
        description: `In this module we will learn to control IoT devices with the Google Assistant by building apps that integrate Smart functionality.`
    },
    {
        id: 15,
        date: '5',
        title: 'Artificial Intelligence (AI) for Internet of Things (IoT)',
        description: `Before implementing deep-learning algorithms in this quarter, we will first familiarize ourselves with mathematical blocks of neural networks theory. We going to start by getting our hands dirty writing some simple TensorFlow 2.0 code in Rust. And then move on to advanced deep learning concepts applicable to IoT projects. This module will also cover some essential advantages of TensorFlow 2.0 to convince you it’s the deep-learning library of choice.`
    },
    {
        id: 16,
        date: '6',
        title: 'Blockchain and IOTA Technologies for IoT (Optional)',
        description: `In last optional quarter we will discuss and implement an emerging aspect of the blockchain economy, machine-to-machine (M2M) transactions. We will cover, how machines can use IOTA blockchain to become autonomous market participants with their own bank accounts. We will then merge these blockcain concepts with artificial intelligence (AI) concepts learned in the previous quarters. These combine IoT, AI and Blockchain technologies allow machines in the Internet of Things to be able to lease themselves out, schedule and pay for their own maintenance, purchase their own replacement parts and keep their own transactional records, using blockchain.`
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