import { Box, Container, Flex, HStack, Image, List, ListItem, Stack, Text, VStack, chakra } from '@chakra-ui/react';

const overviewList = [
    {
        id: 1,
        label: '',
        subLabel: ''
    },
    {
        id: 2,
        label: 'Requirements.',
        subLabel: ''
    },
    {
        id: 3,
        label: 'Program Structure.',
        subLabel: 'All programs are one year long in duration. Each program is divided into four quarters (12 weeks each). Classes are held once a week. In the initial stages, classes will be held only on Sundays. There will 6 sections of classes available, including Artificial Intelligence, Cloud Native and Mobile Web Computing, Blockchain, Internet of Things, 5G and Software Defined Networking and Quantum Computing . Each class will be 3 hours in duration per week, for a total of 36 hours per quarter or 144 hours for the entire year.'
    },
    {
        id: 4,
        label: 'Program Duration and Structure.',
        subLabel: 'All programs are one year long in duration. Each program is divided into four quarters (12 weeks each). Classes are held once a week. In the initial stages, classes will be held only on Sundays. There will 6 sections of classes available, including Artificial Intelligence, Cloud Native and Mobile Web Computing, Blockchain, Internet of Things, 5G and Software Defined Networking and Quantum Computing . Each class will be 3 hours in duration per week, for a total of 36 hours per quarter or 144 hours for the entire year.'
    },
    {
        id: 2,
        label: 'Payment and Accountability.',
        subLabel: 'Please note, all fees will be collected by Saylani Welfare Trust, the most trusted NGO in Pakistan. Saylani has strict audit processes already in place to ensure proper accountability of funds.'
    },
    {
        id: 2,
        label: 'Certification Selection',
        subLabel: 'Please note, this is a highly prestigious program. Due to the high level of difficulty, only 10% of students will be awarded the PIAIC certifications.'
    },
    {
        id: 2,
        label: 'Admissions and Technical Support Contact Information.',
        subLabel: `For questions related to admissions, you may call us on the PIAIC Helpline: +92-308-2220203 between 10 AM - 6 PM.
        Please note we are closed on Fridays.
        For technical questions related to coursework, you may contact us via email at education@piaic.org.`
    },
];

export default function HowItWork() {
    return (
        <>
            <Box py={'16'}>
                <chakra.h2 fontSize="4xl" fontWeight="bold" textAlign="center" mb={2}>
                    How it works?
                </chakra.h2>
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    spacing={{ base: 0, md: 3 }}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Flex
                        fontWeight="bold"
                        boxShadow="md"
                        color="white"
                        bg="green.400"
                        rounded="full"
                        justifyContent="center"
                        alignItems="center"
                        fontSize={'4xl'}
                        w={20}
                        h={20}
                    >
                        1

                    </Flex>

                    <Text fontSize="xl">

                        Sequence.
                    </Text>
                    <Text fontSize="md" color="gray.500" ml={12}>
                        PIAIC will launch classes in the following locations, one city at a time, in the following order.
                    </Text>


                </Stack>
                <Flex
                    alignItems={'center'}
                    justifyContent='center'
                    alignContent={'center'}

                >
                    <Image
                        //   boxSize={{ base: 'auto', md: 'lg' }}
                        objectFit="cover"
                        minH={'30vh'}
                        src="/hiw.png"
                        rounded="lg"

                    />
                </Flex>
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    spacing={{ base: 0, md: 3 }}
                    justifyContent="center"
                    alignItems="center"
                    py={'2'}
                >
                    <Flex
                        fontWeight="bold"
                        boxShadow="md"
                        color="white"
                        bg="green.400"
                        rounded="full"
                        justifyContent="center"
                        alignItems="center"
                        fontSize={'4xl'}
                        w={20}
                        h={20}
                    >
                        2

                    </Flex>

                    <Text fontSize="xl">

                        Requirements.
                    </Text>
                    <Text fontSize="md" color="gray.500" ml={12}>
                        To participate in the program and become eligible for the most prestigious credentials for AI, <br /> Cloud and Blockchain technologies in the world, students must complete the following process
                    </Text>

                </Stack>
                <Flex
                    alignItems={'center'}
                    justifyContent='center'
                    alignContent={'center'}

                >
                    <List>
                        <ListItem>1- Signup at PIAIC Portal.</ListItem>
                        <ListItem>2- Submit the online application.</ListItem>
                        <ListItem>3- Pass the entrance exam which consists of multiple choice English and Mathematics questions. Results are determined based on percentile.</ListItem>
                        <ListItem>4- Pass all PIAIC exams with an average score of at least 70%.</ListItem>
                    </List>
                </Flex>


                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    spacing={{ base: 0, md: 3 }}
                    justifyContent="center"
                    alignItems="center"
                    py={'2'}
                >
                    <Flex
                        fontWeight="bold"
                        boxShadow="md"
                        color="white"
                        bg="green.400"
                        rounded="full"
                        justifyContent="center"
                        alignItems="center"
                        fontSize={'4xl'}
                        w={20}
                        h={20}
                    >
                        3

                    </Flex>

                    <Text fontSize="xl">

                        Program <br /> Structure.
                    </Text>
                    <Text fontSize="md" color="gray.500" ml={12}>
                        All programs are one year long in duration. Each program is divided into four quarters <br />
                        (12 weeks each). Classes are held once a week. In the initial stages, classes will be held <br />
                        only on Sundays. There will 6 sections of classes available, including Artificial Intelligence, <br />
                        Cloud Native and Mobile Web Computing, Blockchain, Internet of Things, 5G and<br />
                        Software Defined Networking and Quantum Computing . Each class will<br /> be 3 hours  in duration per week, for a total of
                        36 hours per quarter or 144 hours for the entire year.
                    </Text>

                </Stack>

                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    spacing={{ base: 0, md: 3 }}
                    justifyContent="center"
                    alignItems="center"
                    py={'2'}
                >
                    <Flex
                        fontWeight="bold"
                        boxShadow="md"
                        color="white"
                        bg="green.400"
                        rounded="full"
                        justifyContent="center"
                        alignItems="center"
                        fontSize={'4xl'}
                        w={20}
                        h={20}
                    >
                        4

                    </Flex>

                    <Text fontSize="xl">

                        Fee Structure and <br /> Distance Learning Option.
                    </Text>
                    <Text fontSize="md" color="gray.500" ml={12}>

                        Those students who wish to participate in the program online can check the distance learning <br />
                        option in the application form. Please note that distance learning students must also take<br />
                        proctored exams on site, just like the onsite students.
                        <br />
                        The fee structure for onsite students is PKR 1,000 per month for 12 months, payable in 4 <br />
                        installments of PKR 3,000, before the start of each quarter.
                        <br />
                        The fee structure for distance learning students is PKR 500 per month for 12 months,<br />
                        payable in 4 installments of PKR 1,500, before the start of each quarter.
                    </Text>

                </Stack>

                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    spacing={{ base: 0, md: 3 }}
                    justifyContent="center"
                    alignItems="center"
                    py={'2'}
                >
                    <Flex
                        fontWeight="bold"
                        boxShadow="md"
                        color="white"
                        bg="green.400"
                        rounded="full"
                        justifyContent="center"
                        alignItems="center"
                        fontSize={'4xl'}
                        w={20}
                        h={20}
                    >
                        5

                    </Flex>

                    <Text fontSize="xl">

                        Payment & <br />Accountability.
                    </Text>
                    <Text fontSize="md" color="gray.500" ml={12}>
                        Please note, all fees will be collected by Saylani Welfare Trust, the most trusted NGO <br /> in Pakistan. Saylani has strict audit processes already in place to ensure proper accountability of funds.
                    </Text>

                </Stack>


                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    spacing={{ base: 0, md: 3 }}
                    justifyContent="center"
                    alignItems="center"
                    py={'2'}
                >
                    <Flex
                        fontWeight="bold"
                        boxShadow="md"
                        color="white"
                        bg="green.400"
                        rounded="full"
                        justifyContent="center"
                        alignItems="center"
                        fontSize={'4xl'}
                        w={20}
                        h={20}
                    >
                        6

                    </Flex>

                    <Text fontSize="xl">

                        Certification <br /> Selection.
                    </Text>
                    <Text fontSize="md" color="gray.500" ml={12}>
                        Please note, this is a highly prestigious program. Due to the high level of difficulty, <br /> only 10% of students will be awarded the PIAIC certifications.
                    </Text>

                </Stack>

                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    spacing={{ base: 0, md: 3 }}
                    justifyContent="center"
                    alignItems="center"
                    py={'2'}
                >
                    <Flex
                        fontWeight="bold"
                        boxShadow="md"
                        color="white"
                        bg="green.400"
                        rounded="full"
                        justifyContent="center"
                        alignItems="center"
                        fontSize={'4xl'}
                        w={20}
                        h={20}
                    >
                        7

                    </Flex>

                    <Text fontSize="xl">

                        Admissions and Technical<br /> Support Contact Information.
                    </Text>
                    <Text fontSize="md" color="gray.500" ml={12}>
                        For questions related to admissions, you may call us on the PIAIC Helpline: +92-308-2220203 <br /> between 10 AM - 6 PM.
                        Please note we are closed on Fridays.<br />
                        For technical questions related to coursework, <br />you may contact us via email at education@piaic.org.
                    </Text>

                </Stack>


            </Box>



            
        </>
    );
};
