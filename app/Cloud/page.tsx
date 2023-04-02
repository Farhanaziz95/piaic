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
                            <chakra.span display="block">Cloud Native and Mobile Web Computing Specialist</chakra.span>
                            <chakra.span
                                fontSize={'xl'}
                                display="block"
                                color="brand.600"
                                _dark={{
                                    color: "gray.500",
                                }}
                            >
                                A ONE YEAR CLOUD COMPUTING PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS. <br />
                                GETTING PAKISTAN READY FOR THE NEW ERA OF MICROSERVICES AND MULTI-CLOUD NATIVE COMPUTING.
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
        date: '1A',
        title: 'Introduction to Cloud Native Computing',
        description: `Cloud native computing uses open-source software stacks to deploy applications as microservices, packaging each part into its own container and dynamically orchestrating those containers to optimize resource utilization. In the last 15 years, cloud application delivery has moved from being bound to physical servers to running on virtual machines with a full operating system and now to containers with Docker, where developers can specify every aspect of deployment.
        `
    },
    {
        id: 2,
        date: '1B',
        title: 'Introduction to Linux and Bash using Python',
        description: `Linux containers are poised to take over the world; we will start our course with an introduction of Linux and the command line. For many non-technical people, the command line (also referred to as CLI, Terminal, bash, or shell) is a place of mystery. However, you only have to know a handful of basic commands to start feeling comfortable. In this module we will cover the basic commands to get you started.`
    },
    {
        id: 3,
        date: '1C',
        title: 'Docker Deep Dive',
        description: `This course provides a soup-to-nuts learning experience for core Docker technologies, including the Docker Engine, Images, Containers, Registries, Networking, Storage, and more. All of the behind the scenes theory is explained, and all concepts are clearly demonstrated on the command line. No prior knowledge of Docker or Linux is required.`
    },
    {
        id: 4,
        date: '1D',
        title: 'JavaScript/TypeScript Programming',
        description: `JavaScript is the default language of the web and the first universal programming language. In this module, students will dig through all the genuinely elegant parts of JavaScript, including syntax, objects, functions, inheritance, arrays, methods, etc. This module will build a solid foundation in functional and object-oriented programming using JavaScript (ES 2016) and TypeScript using Node.js. Assuming no prior programming experience on the part of the student, this module starts by focusing on the fundamentals of composing code with JavaScript. Introduction to only server based JavaScript/TypeScript is covered i.e. Node.js. Students will also learn about the syntax and structure of the language including operators and expressions, control structures, methods, and arrays using Node.`
    },
    {
        id: 5,
        date: '2A',
        title: 'Developing Microservices using Node.js and Express',
        description: `This module includes how to build microservices using Node.js. It starts by introducing Node’s powerful traits and shows students how they map to the features of microservices using JavaScript. Students will explore key development techniques, meet the rich ecosystem of companion tools and libraries, and get a glimpse into its inner workings. In recent years, REST (REpresentational State Transfer) has emerged as the standard architectural design for web services and web APIs. In this module, students will see how easy it is to create a RESTful web service using Node.js, TypeScript and the Express micro-framework. Students will also learn gRPC and GraphQL based microservices. By the end of the module, students will be able to use JavaScript/Typescript to build a Node microservice and know how to test it, hook it up to a database, and automate the development process.`
    },
    {
        id: 6,
        date: '2B',
        title: 'Version Control with Git',
        description: `You won’t find a top programmer, cloud developer, or AI engineer who doesn’t use version control. This is true because version control helps developers produce better results and makes collaboration easy. Around the world, in teams both large and small, Git is an essential part of the toolchain. This module covers Git and Github.`
    },
    {
        id: 7,
        date: '2C',
        title: 'Cloud Automation using Ansible',
        description: `Ansible is an open-source IT automation engine which can remove drudgery from work life and will also dramatically improve the scalability, consistency, and reliability of your IT environment. In this module, students will start to explore how to automate repetitive cloud administration tasks using Ansible.`
    },
    {
        id: 8,
        date: '3A',
        title: 'Kubernetes in Practice',
        description: `The Kubernetes container orchestration system safely manages the structure and flow of a distributed application, organizing containers and services for maximum efficiency. Kubernetes serves as an operating system for your clusters, eliminating the need to factor the underlying network and server infrastructure into your designs. In this quarter, students will learn to use Kubernetes to deploy container-based distributed applications. The module will start with an overview of Docker and Kubernetes before building the first Kubernetes cluster. We’ll gradually expand the student's initial application, adding features and deepening knowledge of Kubernetes architecture and operation. Students will explore high-value topics like monitoring, tuning, and scaling. By the end of the quarter, students will be able to appear in the Certified Kubernetes Application Developer (CKAD) exam.`
    },
    {
        id: 9,
        date: '4A',
        title: 'Cloud Native Application Development',
        description: `In this quarter we will develop an understanding of core cloud native services, uses, and architecture best practices. We will develop proficiency in developing, deploying, and debugging cloud native applications using Istio, Knative, Prometheus, NATS, and TiKV, etc. We will also focus on understanding of application lifecycle management, ability to use a CI/CD pipeline to deploy applications, and ability to write code using cloud native security best practices.
        `
    },
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