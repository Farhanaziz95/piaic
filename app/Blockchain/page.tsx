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
                            <chakra.span display="block">Blockchain Specialist</chakra.span>
                            <chakra.span
                                fontSize={'xl'}
                                display="block"
                                color="brand.600"
                                _dark={{
                                    color: "gray.500",
                                }}
                            >
                                A ONE YEAR BLOCKCHAIN PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS GETTING PAKISTAN READY FOR THE NEW ERA OF BLOCKCHAIN, FINTECH AND SMART CONTRACTS
                            </chakra.span>
                        </chakra.span>
                    </Box>
                </Flex>
            </Flex>

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
        date: '',
        title: 'Digital Money, Bitcoin and Blockchain',
        description: `In this module, students will get an introduction to digital money, bitcoin and the blockchain. Students will learn about trestles systems and proof of work. Students will also learn the difference between private, consortium, and public blockchain networks. This module will also provide an introduction to hashing and cryptography.`
    },
    {
        id: 2,
        date: '',
        title: 'Crypto Tokens',
        description: `In this module, students will learn about crypto tokens, how intrinsic tokens come into existence, how bitcoins, ripples, ethereal, and NXT come into existence. Students will also learn the difference between utility and security tokens. This module will also cover the legal implications of token classification. Students will also learn the eight categories of tokens. In this module, students will learn how to create their own utility tokens.`
    },
    {
        id: 3,
        date: '',
        title: 'Blockchain Revolution',
        description: `In this module, students will learn how permissionless systems work. Students will also learn about enterprise blockchain and the future of finance. This module will cover how blockchain can disrupt industries including finance, banking, insurance, and even music.`
    },
    {
        id: 4,
        date: '',
        title: 'Introduction to Decentralized Apps',
        description: `In this module, students will learn about Ethereum, Decentralized Apps, Smart Contracts, and the EVM. Students will learn the benefits of the Ethereum Decentralized Platform and the fourth generation blockchain.`
    },
    {
        id: 5,
        date: '',
        title: 'Ethereum and Hyperledger Fabric Basics',
        description: `In this module, students will learn about blockchain nodes and how to run them. Students will also learn about the Ethereum ecosystem, Mist, and Faucets. After this completing this module, students will be able to compile, deploy and instantiate contracts. Students will also have an understanding of the different stages of a contract deployment.
        `
    },
    {
        id: 6,
        date: '',
        title: 'Crypto Mining and Operations',
        description: `In this module students will learn the process by which Bitcoins are mined and what roles do miners play in creation of Bitcoins. The details of this module would help students understand in great details how various mining strategies are applied by various miners and the powerful hardware custom built for mining. The students would also learn about the role of consensus in mining and the 51% attacks, how the incentives of mining attract miners and the energy consumption and ecological impact of mining.`
    },
    {
        id: 7,
        date: '',
        title: 'Introduction to Smart Contracts',
        description: `In this module students will be introduced to the programming and development side of Blockchain, especially that of Ethereum. The students will learn how to use a Remix IDE to program in Solidity. The students will go over various Blockchain concepts again such as Blockchain Basics, Blockchain Transactions, and Blockchain Blocks. The students will learn the infrastructural concepts of the Ethereum Blockchain, such as The Ethereum Virtual Machine, how Ethereum Accounts are formed and how Ethereum Transactions occur. They will also go over other concepts like Gas, Storage, Memory and the Stack, Instruction Set, Message Calls, Delegatecall / Callcode and Libraries, Logs, Creating contracts, and Self-destruct.`
    },
    {
        id: 8,
        date: '',
        title: 'Solidity in Depth',
        description: `In this module students will take an in depth look at Solidity language and learn about concepts like mapping, data types, events, operators, parameters, control structures, and error handling.Students will also begin creating Solidity contracts, event handling and layout of memory and storage variables.`
    },
    {
        id: 9,
        date: '',
        title: 'HTML, CSS, and JavaScriptCrash Course',
        description: `In this module the students finally move over to Dapp development. To accomodate Dapp development students will be given a crash course in HTML, CSS, and JavaScript and taught about various concepts of javascript in depth to help understand the interaction of Solidity and Web3.js`
    },
    {
        id: 10,
        date: '',
        title: 'Blockchain WebApplications',
        description: `The students will now be ready to develop a front-end for Solidity contracts. They’ll be taught about the Basics of React, REST API’s, in Node.js, Using Nginx to host Single Page Apps, and using Docker to deploy web apps in the cloud.`
    },
    {
        id: 11,
        date: '',
        title: 'Web3 & Truffle',
        description: `In this module the students will learn how to to work with Web3 & Truffle. They’ll also learn about toolkit to aid development of decentralised applications. This course introduces the two most currently relevant and covers everything from installation and setup to custom configuration and scripting. Building an interface to interact with a smart contract.Setting up event-driven interfaces. It also exposes the students to Adapting Truffle’s default behavior and Writing functional tests for smart contract.`
    },
    {
        id: 12,
        date: '',
        title: 'BaaS (Blockchain-as-a-Service)',
        description: `The students will begin to finally finish off will very high level concepts in Solidity and Blockchain, such as BaaS (Blockchain-as-a-Service). Working with Azure Blockchain as a Service, Deploy an Ethereum Consortium network on Azure, DevOps for Blockchains on Azure, Trying out the Visual Studio Code extension for Smart Contracts, and Building Dapps with Visual Studio.`
    },
    {
        id: 13,
        date: '',
        title: 'The Art of Initial Coin Offering (ICO)',
        description: `In this module the students will move over the the business side of Blockchain and learn about ICO. They will learn what is an ICO, how to create and verify Your Altcoin, What are steps in launching a ICO, how to write an ICO White Paper and how to do ICO marketing?
        `
    },
    {
        id: 14,
        date: '',
        title: 'Blockchain Projects for Islamic Finance -A Match Made in Heaven',
        description: `In the last module of this course the students will also get an opportunity to look at the Blockchain Projects for Islamic Finance. They will learn about developing Sharia-Compliant Financial and Blockchain Products, applications of Smart Contracts in Islamic Finance, private Chains in Islamic Banking, Emirates “Cheque Chain”, Islamic Trade Finance, Capital Markets-Musharaka Mutanaqisa (Diminishing Partnerships), as well as Automatic Sharia Compliance and Commodity Murabaha.`
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