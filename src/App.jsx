import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Sidebar from "./components/Sidebar";
// import ProfileOverview from './components/ProfileOverview'

function App() {
  return (
    <Flex h="100vh">
      {/* Sidebar - only visible on md and up */}
      <Box
        as="aside"
        bg="red.500"
        display={{ base: "none", md: "block" }}
        w="60"
        h="100vh"
      >
        <Sidebar />
      </Box>

      {/* Main content area */}
      <Box flex="1" overflowY="auto" bg="gray.50">
        {/* Mobile navigation - only visible on base to sm */}
        {/* <Box display={{ base: "block", md: "none" }}> */}
        {/* <MobileNav /> */}
        {/* </Box> */}

        {/* Dashboard content */}
        <Box p={8} maxW="1400px" mx="auto">
          {/* <ProfileOverview /> */}
          {/* <RecentProjects /> */}
          {/* <ClientFeedback /> */}
          {/* <EarningsSummary /> */}
          <Heading as="h1" fontSize={["2xl", "4xl"]} mb={4} color="black">
            Alex Smith
          </Heading>
          <Text fontSize={["lg", "xl"]} mb={4} color="black">
            Welcome back, Alex! Here's an overview of your portfolio.
          </Text>
          <Flex gap="4" direction={["column", "row"]} align="center">
            <Box h="100px" w="300px" border="1px solid black" p={4} borderRadius="md">
              <VStack>
                <Text fontSize="xl" fontWeight="bold" color="black">
                $82,950
                </Text>
                <Text fontSize="sm" color="gray.600">
                Total Earnings
                </Text>
              </VStack>
            </Box>
            <Box h="100px" w="300px" border="1px solid black" p={4} borderRadius="md">
            <VStack>
                <Text fontSize="xl" fontWeight="bold" color="black">
                24
                </Text>
                <Text fontSize="sm" color="gray.600">
                Projects Completed
                </Text>
              </VStack>
            </Box>
            <Box h="100px" w="300px" border="1px solid black" p={4} borderRadius="md">
            <VStack>
                <Text fontSize="xl" fontWeight="bold" color="black">
                4.9/5
                </Text>
                <Text fontSize="sm" color="gray.600">
                Client Satisfaction
                </Text>
              </VStack>
            </Box>
            <Box h="100px" w="300px" border="1px solid black" p={4} borderRadius="md">
            <VStack>
                <Text fontSize="xl" fontWeight="bold" color="black">
                18
                </Text>
                <Text fontSize="sm" color="gray.600">
                Active Clients
                </Text>
              </VStack>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

export default App;
