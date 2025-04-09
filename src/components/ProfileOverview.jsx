import React from 'react';
import {
  Box,
  Flex,
  Avatar,
  Text,
  VStack,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';

const ProfileOverview = () => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.800')}
      p={6}
      rounded="md"
      shadow="sm"
      w="full"
    >
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align={{ base: 'center', md: 'flex-start' }}
        gap={6}
      >
        <Avatar
          size="xl"
          name="Jane Freelancer"
          src="https://bit.ly/dan-abramov"
        />

        <VStack align={{ base: 'center', md: 'flex-start' }} spacing={1}>
          <Text fontSize="xl" fontWeight="bold">
            Jane Freelancer
          </Text>
          <Text fontSize="sm" color="gray.500">
            UX/UI Designer
          </Text>
          <Text fontSize="sm" color="gray.600" textAlign={{ base: 'center', md: 'left' }}>
            Passionate about creating user-friendly interfaces and delightful digital experiences.
          </Text>
        </VStack>
      </Flex>
    </Box>
  );
};

export default ProfileOverview;
