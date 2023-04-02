"use client";

import { Box, useColorModeValue, Flex, Image, SimpleGrid, chakra } from '@chakra-ui/react'

import React from 'react'

export default function Achivements() {
    return (
        <Flex
        bg={useColorModeValue('white', 'gray.700')}
            // p={20}
            w="full"
            justifyContent="center"
            alignItems="center"
        // pos="absolute"
        >

            <Box
                shadow="xl"
                bg="white"
                _dark={{
                    bg: "gray.800",
                }}
                px={8}
                py={20}
                mx="auto"
            >
                <chakra.h2
                    mb={4}
                    fontSize={{
                        base: "2xl",
                        md: "4xl",
                    }}
                    pb='4'
                    fontWeight="extrabold"
                    letterSpacing="tight"
                    textAlign={{
                        base: "center",
                        md: "center",
                    }}
                    color={useColorModeValue("black","white")}

                    lineHeight={{
                        md: "shorter",
                    }}
                // textShadow="2px 0 currentcolor"
                >
                    Milestones
                </chakra.h2>
                <SimpleGrid
                    alignItems="start"
                    columns={{
                        base: 1,
                        md: 2,
                    }}
                    mb={24}
                    spacingY={{
                        base: 10,
                        md: 32,
                    }}
                    spacingX={{
                        base: 10,
                        md: 24,
                    }}
                >
                    <Box>
                        <chakra.h2
                            mb={4}
                            fontSize={{
                                base: "2xl",
                                md: "4xl",
                            }}
                            fontWeight="bold"
                            letterSpacing="tight"
                            textAlign={{
                                base: "center",
                                md: "left",
                            }}
                            color={useColorModeValue("black","white")}
                            lineHeight={{
                                md: "shorter",
                            }}
                        // textShadow="2px 0 currentcolor"
                        >
                            President launching the PIAIC website.
                        </chakra.h2>
                        <chakra.p
                            mb={5}
                            textAlign={{
                                base: "center",
                                sm: "left",
                            }}
                            color={useColorModeValue('gray.500', 'gray.300')}
                            fontSize={{
                                md: "lg",
                            }}
                        >
                            President Dr. Arif Alvi launching the official website of the PIAIC on December 9, 2018. From left to right: Mr. Adil Altaf (Director Panacloud), Mr. Zia Ullah Khan (CEO Panacloud), Mr. Hunaid Lakhani (Chancellor Iqra University), President Dr. Arif Alvi, Mr. Sulaiman S. Mehdi (Chairman Pakistan Stock Exchange), Mr. Zeeshan Hanif (CTO Panacloud), Maulana Bashir Farooqui (Founder Saylani Welfare Trust), Mr. Yousuf Lakhani (President Saylani Welfare Trust).
                        </chakra.p>

                    </Box>
                    
                        <Image
                        src='/mile1.jpg'
                        alt='launching Website'/>
                    
                </SimpleGrid>
                <SimpleGrid
                    alignItems="center"
                    columns={{
                        base: 1,
                        md: 2,
                    }}
                    flexDirection="column-reverse"
                    mb={24}
                    spacingY={{
                        base: 10,
                        md: 32,
                    }}
                    spacingX={{
                        base: 10,
                        md: 24,
                    }}
                >
                    <Box
                        order={{
                            base: "initial",
                            md: 2,
                        }}
                    >
                        <chakra.h2
                            mb={4}
                            fontSize={{
                                base: "2xl",
                                md: "4xl",
                            }}
                            fontWeight="bold"
                            letterSpacing="tight"
                            textAlign={{
                                base: "center",
                                md: "left",
                            }}
                            color={useColorModeValue("black","white")}
                            lineHeight={{
                                md: "shorter",
                            }}
                        >
                            First meeting with the President.
                        </chakra.h2>
                        <chakra.p
                            mb={5}
                            textAlign={{
                                base: "center",
                                sm: "left",
                            }}
                            color={useColorModeValue('gray.500', 'gray.300')}
                            fontSize={{
                                md: "lg",
                            }}
                        >
                            First official PIAIC meeting on November 1st, 2018. From left to right: Mr. Zia Ullah Khan (CEO Panacloud), Mr. Kazi Rahat Ali (General Secretary PIAIC), President Dr. Arif Alvi, Mr. Yousuf Lakhani (Presdent Saylani Welfare Trust, Mr. Muhammad Ghazzal (COO Saylani Welfare Trust).
                        </chakra.p>

                    </Box>
                    <Image
                        src='/mile2.jpg'
                        alt='First Official Meeting'/>
                </SimpleGrid>
                <SimpleGrid
                    alignItems="start"
                    columns={{
                        base: 1,
                        md: 2,
                    }}
                    mb={24}
                    spacingY={{
                        base: 10,
                        md: 32,
                    }}
                    spacingX={{
                        base: 10,
                        md: 24,
                    }}
                >
                    <Box>
                        <chakra.h2
                            mb={4}
                            fontSize={{
                                base: "2xl",
                                md: "4xl",
                            }}
                            fontWeight="bold"
                            letterSpacing="tight"
                            textAlign={{
                                base: "center",
                                md: "left",
                            }}
                            color={useColorModeValue("black","white")}
                            lineHeight={{
                                md: "shorter",
                            }}
                        // textShadow="2px 0 currentcolor"
                        >
                            Meeting with Chief Secretary Sindh.
                        </chakra.h2>
                        <chakra.p
                            mb={5}
                            textAlign={{
                                base: "center",
                                sm: "left",
                            }}
                            color={useColorModeValue('gray.500', 'gray.300')}
                            fontSize={{
                                md: "lg",
                            }}
                        >
                            Meeting with Chief Secretary of Sindh, Mr. Mumtaz Ali Shah on December 28th, where he assured the PIAIC management team of his full support for the national cause and offered space at all the public universities in Sindh.
                        </chakra.p>

                    </Box>
                    <Image
                        src='/mile3.jpg'
                        alt='meeting with chief'/>
                </SimpleGrid>
            </Box>
        </Flex>
    )
}