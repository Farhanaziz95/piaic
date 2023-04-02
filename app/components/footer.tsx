'use client'

import {
    Box,
    Container,
    Flex,
    HStack,
    IconButton,
    Image,
    Input,
    Link,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    chakra,
    useColorModeValue,
} from '@chakra-ui/react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

import { BiMailSend } from 'react-icons/bi';
import { ReactNode } from 'react';

const SocialButton = ({
    children,
    label,
    href,
}: {
    children: ReactNode;
    label: string;
    href: string;
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('White', 'black')}
            rounded={'full'}
            boxShadow='dark-lg'
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};




const Logo = (props: any) => {
    return (
        <>
            <Flex>
                <svg height={82} version="1.0" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 370.000000 570.000000"
                    preserveAspectRatio="xMidYMid meet">

                    <g transform="translate(0.000000,570.000000) scale(0.100000,-0.100000)"
                        fill="#ad1028" stroke="none">
                        <path d="M2235 5530 c-185 -15 -340 -48 -550 -120 -149 -51 -371 -159 -490
-238 -477 -318 -782 -818 -890 -1462 -34 -201 -45 -342 -45 -575 0 -667 156
-1365 472 -2115 65 -155 241 -511 248 -503 13 15 40 129 99 428 70 349 112
511 176 667 101 248 225 432 407 603 166 157 350 271 638 395 606 261 1002
596 1220 1029 198 393 206 840 22 1206 -234 467 -734 729 -1307 685z m325
-685 c204 -49 357 -190 426 -395 29 -85 27 -271 -4 -370 -62 -194 -181 -364
-365 -517 -168 -140 -320 -227 -629 -363 -363 -159 -610 -323 -845 -562 -56
-56 -112 -116 -126 -133 -14 -16 -27 -28 -30 -25 -8 9 -46 290 -58 435 -14
169 -6 477 16 625 101 671 459 1101 1064 1275 192 55 397 66 551 30z"/>
                    </g>
                </svg>
                <svg height={82} version="1.0" xmlns="http://www.w3.org/2000/svg"
                    viewBox="300 100 991.000000 570.000000"
                    preserveAspectRatio="xMidYMid meet">

                    <g transform="translate(0.000000,570.000000) scale(0.100000,-0.100000)"
                        fill={useColorModeValue('black', 'white')} stroke="none">

                        <path d="M3653 3083 l-53 -4 0 -390 0 -389 85 0 85 0 0 144 0 143 81 7 c133
11 217 61 255 152 20 48 18 160 -5 209 -42 91 -116 126 -280 130 -64 1 -140 1
-168 -2z m268 -161 c41 -45 41 -118 1 -163 -23 -26 -36 -31 -88 -36 l-61 -5
-6 68 c-9 92 -9 159 1 168 4 4 34 6 66 4 51 -4 63 -9 87 -36z"/>
                        <path d="M7568 2897 c-26 -8 -55 -20 -65 -27 -49 -37 -77 -69 -101 -115 -25
-46 -27 -59 -27 -170 0 -113 2 -123 28 -171 49 -88 129 -122 261 -111 53 4
169 37 184 51 3 3 -5 27 -16 53 -23 54 -22 53 -123 27 -39 -10 -77 -14 -93
-10 -35 9 -76 49 -76 74 0 16 10 21 58 26 69 8 166 52 204 92 75 81 60 211
-32 263 -48 27 -140 35 -202 18z m103 -117 c27 -15 25 -70 -4 -98 -26 -25 -88
-52 -118 -52 -20 0 -21 4 -15 43 13 84 81 137 137 107z"/>
                        <path d="M8767 2900 c-40 -12 -94 -56 -112 -90 -22 -43 -19 -118 8 -165 18
-31 40 -49 111 -86 93 -49 106 -60 106 -96 0 -47 -82 -48 -173 -1 -22 11 -40
18 -42 16 -8 -9 -45 -103 -45 -114 0 -22 109 -57 192 -62 65 -3 85 -1 123 18
104 50 138 188 67 271 -15 18 -58 47 -97 65 -81 37 -108 62 -103 96 2 19 10
24 41 26 21 2 59 -4 85 -12 25 -9 49 -16 53 -16 8 0 54 109 48 114 -2 2 -33
13 -68 25 -66 21 -144 26 -194 11z"/>
                        <path d="M9432 2897 c-121 -44 -195 -190 -178 -355 12 -111 58 -186 136 -220
52 -23 179 -19 263 8 37 11 70 27 73 35 3 7 -3 34 -14 59 l-20 44 -62 -19
c-68 -21 -131 -25 -161 -9 -16 9 -49 58 -49 73 0 3 30 10 67 17 130 22 220 85
243 169 20 77 -14 157 -84 190 -48 24 -158 28 -214 8z m132 -123 c23 -22 20
-48 -10 -83 -25 -30 -88 -55 -123 -49 -17 3 -17 7 -6 53 21 80 96 123 139 79z"/>
                        <path d="M4553 2889 c-66 -12 -110 -37 -153 -86 -54 -62 -75 -128 -73 -233 2
-135 43 -219 126 -259 77 -38 169 -22 232 39 l30 29 24 -45 c27 -50 30 -51
114 -15 l45 19 -27 54 c-25 51 -26 59 -29 260 -3 183 -5 208 -20 212 -20 6
-129 23 -187 29 -22 3 -59 1 -82 -4z m122 -239 c-1 -103 -3 -119 -25 -159 -47
-84 -100 -101 -138 -43 -13 21 -17 49 -17 132 0 152 28 191 130 187 l50 -2 0
-115z"/>
                        <path d="M5356 2885 c-21 -7 -54 -28 -72 -46 -19 -18 -35 -31 -38 -28 -2 2
-11 19 -20 37 -23 45 -37 48 -101 21 -42 -17 -54 -27 -49 -38 43 -97 47 -126
52 -329 l4 -203 77 3 76 3 0 175 c0 189 4 208 58 258 27 26 81 32 100 13 8 -8
14 -79 17 -229 l5 -217 78 -3 78 -3 -3 238 c-3 218 -5 241 -24 278 -39 74
-142 105 -238 70z"/>
                        <path d="M6049 2887 c-120 -45 -189 -158 -189 -307 0 -173 80 -279 212 -280
69 0 104 12 144 51 l31 30 27 -45 27 -45 52 20 c28 12 58 23 65 26 15 7 16 6
-7 45 -30 51 -41 137 -41 318 l0 167 -57 12 c-95 20 -223 23 -264 8z m145
-113 c13 -5 16 -24 16 -108 0 -121 -11 -165 -52 -211 -35 -41 -75 -46 -104
-14 -16 18 -19 37 -19 139 0 105 2 122 21 147 34 46 91 65 138 47z"/>
                        <path d="M8140 2893 c-8 -4 -34 -14 -58 -24 l-43 -19 20 -38 c31 -60 41 -143
41 -329 l0 -173 80 0 80 0 0 178 c0 159 2 180 20 210 25 41 61 55 106 43 l33
-9 15 51 c30 104 30 104 4 111 -73 19 -159 -2 -196 -49 -12 -16 -24 -26 -25
-24 -2 2 -14 21 -26 42 -23 38 -26 39 -51 30z"/>
                        <path d="M6650 2662 c0 -216 1 -230 23 -272 32 -63 65 -83 141 -88 146 -9 250
59 295 193 18 53 25 101 29 197 2 69 2 142 -2 162 l-7 36 -79 0 -79 0 5 -52
c3 -29 7 -61 9 -71 6 -29 -12 -200 -26 -245 -26 -87 -93 -127 -135 -81 -17 19
-19 41 -22 235 l-3 214 -75 0 -74 0 0 -228z"/>
                        <path d="M5522 1742 c-94 -34 -163 -106 -197 -207 -23 -67 -31 -238 -15 -317
24 -124 92 -210 191 -243 66 -22 194 -22 261 1 71 23 147 99 179 179 21 54 24
76 24 210 0 147 -1 151 -31 215 -58 123 -132 170 -274 177 -66 3 -97 -1 -138
-15z m191 -139 c19 -9 38 -34 55 -71 25 -52 27 -68 27 -182 0 -110 -3 -131
-23 -172 -27 -55 -56 -76 -114 -84 -58 -7 -125 27 -150 77 -39 77 -47 237 -18
341 29 102 125 141 223 91z"/>
                        <path d="M3643 1743 l-42 -4 6 -387 c3 -213 7 -389 9 -391 2 -2 72 -4 156 -4
118 -1 166 3 209 16 149 46 225 148 244 329 8 78 -8 192 -36 258 -25 58 -90
123 -149 149 -78 34 -242 48 -397 34z m297 -156 c78 -38 110 -108 110 -242 0
-180 -61 -255 -207 -258 l-68 -2 -3 269 -2 268 62 -7 c35 -3 83 -16 108 -28z"/>
                        <path d="M4697 1743 c-7 -12 -297 -771 -297 -778 0 -3 37 -5 81 -3 l81 3 33
90 32 90 130 3 130 3 32 -96 33 -95 84 0 c61 0 84 3 83 13 0 6 -67 183 -148
392 l-147 380 -61 3 c-34 2 -64 -1 -66 -5z m97 -325 c16 -51 31 -101 33 -110
5 -16 -3 -18 -72 -18 -57 0 -76 3 -73 13 3 6 20 56 37 110 18 53 36 97 40 97
3 0 19 -42 35 -92z"/>
                    </g>
                </svg>
            </Flex>
        </>
    );
};



const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    );
};

export default function TopFooter() {
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container as={Stack} maxW={'6xl'} py={10}>
                <SimpleGrid
                    templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
                    spacing={8}>
                    <Stack spacing={6}>
                        <Text fontSize="2xl" fontWeight="900">
                            Strategic Partners
                        </Text>
                        <Box>
                            {/* <Logo color={useColorModeValue('gray.700', 'white')} /> */}
                            <HStack>
                                <Image
                                    src='/panacloud.svg'
                                    boxSize="150px" />

                                <Image
                                    src='/saylani.png'
                                    width="150px" />
                            </HStack>
                        </Box>
                        {/* <Text fontSize={'sm'}>
                            short about
                        </Text> */}

                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Company</ListHeader>
                        <Link href={'/About/'}>About us</Link>
                        <Link href={'/howitwork/'}>How It Works</Link>
                        <Link href={'/WIT/'}>WIT</Link>
                        <Link href={'https://portal.piaic.org/signup'}>Apply</Link>
                        <Link href={'https://portal.piaic.org/'}>Student Portal</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Programs</ListHeader>
                        <Link href={'/AI/'}>Artificial Intelligence</Link>
                        <Link href={'/Cloud/'}>Cloud Native & Mobile Web Computing</Link>
                        <Link href={'/Blockchain'}>Blockchain</Link>
                        <Link href={'/IOT/'}>Internet Of Things</Link>
                        <Link href={'https://panaverse-dao-syllabus-nu.vercel.app/'}>Web 3.0 & Metaverse Developer</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Stay up to date</ListHeader>
                        <Stack direction={'row'}>
                            <Input
                                placeholder={'Your email address'}
                                bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                                border={0}
                                _focus={{
                                    bg: 'whiteAlpha.300',
                                }}
                            />
                            <IconButton
                                bg={useColorModeValue('green.400', 'green.800')}
                                color={useColorModeValue('white', 'gray.800')}
                                _hover={{
                                    bg: 'green.600',
                                }}
                                aria-label="Subscribe"
                                icon={<BiMailSend />}
                            />
                        </Stack>
                    </Stack>
                </SimpleGrid>
            </Container>
            <Container
                as={Stack}
                bg={useColorModeValue('gray.50', 'gray.900')}
                maxW={'8xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>
                <Text color={useColorModeValue('gray.900', 'gray.50')}>© 2023 Nth-x-Solutions. All rights reserved</Text>
                <Stack direction={'row'} spacing={6}>
                    <SocialButton label={'Twitter'} href={'https://twitter.com/piaicofficial'}>
                        <FaTwitter />
                    </SocialButton>
                    <SocialButton label={'YouTube'} href={'https://www.youtube.com/channel/UC2Makv_pLAtvrjHNgg-pBLg'}>
                        <FaYoutube />
                    </SocialButton>
                    <SocialButton label={'Instagram'} href={'https://www.instagram.com/piaicofficial'}>
                        <FaInstagram />
                    </SocialButton>
                    <SocialButton label={'Facebook'} href={'https://www.facebook.com/groups/piaic'}>
                        <FaFacebookF />
                    </SocialButton>
                </Stack>
            </Container>
        </Box>
    );
}