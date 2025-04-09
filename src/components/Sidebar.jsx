import React from 'react';
import { Box, VStack, Text } from '@chakra-ui/react';

const Sidebar = () => {
  return (
    <Box
      as="aside"
      // w="200px"
      // h="100vh"
      // bg="gray.100"
      // borderRight="1px solid"
      // borderColor="gray.200"
      display={{ base: 'none', md: 'block' }}
      position="fixed"
      p={10}
    >
      <VStack align="start" spacing={4}>
        <Text fontWeight="bold" fontSize="lg">
          Dashboard
        </Text>
        <Text>Overview</Text>
        <Text>Users</Text>
        <Text>Reports</Text>
        <Text>Settings</Text>
      </VStack>
    </Box>
  );
};

export default Sidebar;
