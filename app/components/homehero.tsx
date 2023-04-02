"use client";

import { Box, Button, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'

import React from 'react'

export default function HomeHero() {
    return (
        <Box backgroundImage={"BackHero.jpg"} overflow={"hidden"} backgroundSize={"cover"} >
            <Box w='100%' px={"20px"} >
                <Stack direction={{base:"column", lg:"row"}} alignItems={"center"}>
                    <Box w={{ base: "100%", lg: "60%" }} textColor={"black"} py={"50px"}>
                        <Heading fontSize={"55px"} color={"green.400"}>
                            Presidential Initiative
                        </Heading>
                        <Heading fontSize={"45px"} fontWeight={"medium"}>
                            for Artificial Intelligence and Computing
                        </Heading>
                        <Text lineHeight={"5"} my={"15px"} fontSize={"17px"}>
                        The mission of PIAIC is to reshape Pakistan by revolutionizing education, research, and business by adopting latest, cutting-edge technologies. Experts are calling this the 4th industrial revolution. We want Pakistan to become a global hub for AI, data science, cloud native computing, edge computing, blockchain, augmented reality, and internet of things
                        </Text>
                        <Button
                            as={'a'}
                            href="https://portal.piaic.org/signup"
                            fontWeight={"bold"}
                            boxShadow={'dark-lg'}
                            _hover={{ bg: 'green.300', }} _focus={{ bg: 'green.300', }} bg='green.400' width={"150px"}>Apply Now</Button>
                        
                    </Box>
                    <Box w={{ base: "100%", lg: "40%" }} pt={{base:"20px", lg:"40px"}}>
                        <Flex flex={1} alignItems={"end"} justify={{base:"center", lg:"end"}}>
                            <Image
                                src='/pav.png' alt="President" />
                        </Flex>
                    </Box>
                </Stack>
            </Box>

        </Box>
    )
}