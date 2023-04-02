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
                            <chakra.span display="block">4IR Innovation Leadership and Implementation</chakra.span>
                            <chakra.span
                                fontSize={'xl'}
                                display="block"
                                color="brand.600"
                                _dark={{
                                    color: "gray.500",
                                }}
                            >
                                A NINE-MONTH SUPPLEMENTARY PROGRAM COMPULSORY FOR ALL PIAIC STUDENTS REQUIRED FROM <br />
THE 2ND QUARTER OF THE MAJOR COURSE OF STUDY.
TRAINING INNOVATION LEADERS WITH A COMBINATION OF DIFFERENT LEADERSHIP STYLES TO INFLUENCE TEAM MEMBERS TO PRODUCE CREATIVE IDEAS, PRODUCTS, AND SERVICES.
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
                        fontWeight='medium'>A three-quarter program in Design Thinking, Lean Startup, Agile <br /> Software Development, DevOps, and UX/UI and Bot Design.</chakra.p>
                </Box>


                <chakra.p
                    pb={8}
                    fontSize={'2xl'}
                    fontWeight='bold'>Technical Track</chakra.p>
                <SimpleGrid columns={[1, 2, 3]} spacing='40px'>
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
      title: 'Chakra Hackathon',
      description: `Winner of first ever ChakraUI Hackathon. On sait depuis longtemps que travailler avec du texte lisible et contenant du sens.`
    },
    {
      id: 2,
      date: '1B',
      title: 'Open Source, first contribution',
      description: `Fixing a typo, to fix a bug, contributing to Open Source and collaborating to improve technology for everyone, Ahmad's world changed again!.`
    },
    {
      id: 3,
      date: '1C',
      title: 'Freelancing, started working for myself',
      description:
        'Ahmad starts his own business consulting for companies as a fullstack developer. Clients include UK Government departments, UK banks, global fintechs and startups.'
    },
    {
      id: 4,
      date: '1D',
      title: 'Freelancing, started working for myself',
      description:
        'Ahmad starts his own business consulting for companies as a fullstack developer. Clients include UK Government departments, UK banks, global fintechs and startups.'
    },
    {
      id: 5,
      date: '2A',
      title: 'Freelancing, started working for myself',
      description:
        'Ahmad starts his own business consulting for companies as a fullstack developer. Clients include UK Government departments, UK banks, global fintechs and startups.'
    },
    {
      id: 6,
      date: '2B',
      title: 'Freelancing, started working for myself',
      description:
        'Ahmad starts his own business consulting for companies as a fullstack developer. Clients include UK Government departments, UK banks, global fintechs and startups.'
    },
    {
        id:7,
        date: '2C',
        title: 'Freelancing, started working for myself',
        description:
          'Ahmad starts his own business consulting for companies as a fullstack developer. Clients include UK Government departments, UK banks, global fintechs and startups.'
      },
      {
        id: 8,
        date: '2D',
        title: 'Freelancing, started working for myself',
        description:
          'Ahmad starts his own business consulting for companies as a fullstack developer. Clients include UK Government departments, UK banks, global fintechs and startups.'
      },
      {
        id: 9,
        date: '2E',
        title: 'Freelancing, started working for myself',
        description:
          'Ahmad starts his own business consulting for companies as a fullstack developer. Clients include UK Government departments, UK banks, global fintechs and startups.'
      },
      {
        id: 10,
        date: '2F',
        title: 'Freelancing, started working for myself',
        description:
          'Ahmad starts his own business consulting for companies as a fullstack developer. Clients include UK Government departments, UK banks, global fintechs and startups.'
      },
      {
        id: 11,
        date: '2G',
        title: 'Real-time monitoring through Prometheus',
        description:
          'In this sub module, the student will learn how to use Prometheus as a systems monitoring and alerting toolkit. The student will learn that Prometheus works well for recording any purely numeric time series. It fits both machine-centric monitoring as well as monitoring of highly dynamic service-oriented architectures. In a world of microservices, its support for multi-dimensional data collection and querying is a particular strength.'
      },
      {
        id: 12,
        date: '3A',
        title: 'Lean UX',
        description:
          'The junction of Lean Startup and User Experience-based (UX) design and their symbiotic coexistence—is Lean UX. We will learn how the underlying principles of Lean Startup apply to Lean UX. Lean UX provides a prescriptive framework for building better products, moving design away from pixel perfection, toward iterative learning, smarter effort, and outcome-based results. The focus is that the product managers, business owners, team members and startup employees—along with designers— learn from Lean UX.'
      },
      {
        id: 13,
        date: '3B',
        title: 'Designing and Prototyping Content for Websites and Mobile Apps',
        description:
          'This sub module covers the material required by the creative professionals and UI/UX designers seeking the fastest, easiest, most comprehensive way to learn to develop content for websites and mobile apps. We will go through multiple project-based lessons which will take you step-by-step through key techniques in UI/UX design using different tools. The student will set up a project, create graphics, add images and text, organize content, and work with symbols and libraries.'
      },
      {
        id: 14,
        date: '3C',
        title: 'Designing Bots: Creating Conversational Experiences',
        description:
          'New conversational apps are revolutionizing the way we interact with software. This practical sub module shows you how to design and build great conversational experiences and delightful bots that help people be more productive, whether it’s for a new consumer service or an enterprise efficiency product. The student will learn how to use an effective onboarding process, outline different flows, define a bot personality, and choose the right balance of rich control and text.'
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
