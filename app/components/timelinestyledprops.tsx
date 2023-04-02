import {
  Box,
  Flex,
  HStack,
  Text,
  VStack,
  chakra,
  useBreakpointValue,
  useColorModeValue
} from '@chakra-ui/react';

import React from 'react';

export interface CardProps {
  id: number;
  title: string;
  description: string;
  date: string;
}

export const Cardz = ({ id, title, description, date }: CardProps) => {
  // For even id show card on left side
  // For odd id show card on right side
  const isEvenId = id % 2 == 0;
  let borderWidthValue = isEvenId ? '15px 15px 15px 0' : '15px 0 15px 15px';
  let leftValue = isEvenId ? '-15px' : 'unset';
  let rightValue = isEvenId ? 'unset' : '-15px';

  const isMobile = useBreakpointValue({ base: true, md: false });
  if (isMobile) {
    leftValue = '-15px';
    rightValue = 'unset';
    borderWidthValue = '15px 15px 15px 0';
  }

  return (
    <HStack
      flex={1}
      p={{ base: 3, sm: 6 }}
      bg={useColorModeValue('gray.100', 'gray.500')}
      spacing={5}
      rounded="lg"
      alignItems="center"
      pos="relative"
      _before={{
        content: `""`,
        w: '0',
        h: '0',
        borderColor: `transparent ${useColorModeValue('gray.100', 'gray.500')} transparent`,
        borderStyle: 'solid',
        borderWidth: borderWidthValue,
        position: 'absolute',
        left: leftValue,
        right: rightValue,
        display: 'block'
      }}
    >
      <Box>
        <Text fontSize="lg" color={useColorModeValue(isEvenId ?'green.500' : 'blue.500',isEvenId ?'green.300' : 'blue.300') }>
          {date}
        </Text>

        <VStack spacing={2} mb={3} textAlign="left">
          <chakra.h1 color={useColorModeValue('black', 'white')} fontSize="2xl" lineHeight={1.2} fontWeight="bold" w="100%">
            {title}
          </chakra.h1>
          <Text color={useColorModeValue('gray.500', 'gray.300')} fontSize="md">{description}</Text>
        </VStack>
      </Box>
    </HStack>
  );
};

export const LineWithDot = () => {
  return (
    <Flex
      pos="relative"
      alignItems="center"
      mr={{ base: '40px', md: '40px' }}
      ml={{ base: '0', md: '40px' }}
    >
      <chakra.span
        position="absolute"
        left="50%"
        height="calc(100% + 10px)"
        border="1px solid"
        borderColor={useColorModeValue('gray.200', 'gray.700')}
        top="0px"
      ></chakra.span>
      <Box pos="relative" p="10px">
        <Box
          pos="absolute"
          top="0"
          left="0"
          bottom="0"
          right="0"
          width="100%"
          height="100%"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center center"
          bg={useColorModeValue('gray.600', 'gray.200')}
          borderRadius="100px"
          backgroundImage="none"
          opacity={1}
        ></Box>
      </Box>
    </Flex>
  );
};

export const EmptyCard = () => {
  return <Box flex={{ base: 0, md: 1 }} p={{ base: 0, md: 6 }} bg="transparent"></Box>;
};

// export default Milestones;