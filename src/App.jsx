import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  Button,
  Card,
  Image,
  Avatar,
  HStack,
  Stack,
  Strong,
  // FormControl,
  // FormLabel,
  // Input,
  // Textarea,
} from "@chakra-ui/react";
import React from "react";
import Sidebar from "./components/Sidebar";
// import ProfileOverview from './components/ProfileOverview'

function App() {
  return (
    <Flex h="100vh">
      {/* Sidebar - only visible on md and up */}
      <Box
        as="aside"
        bg="black"
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
          <Heading as="h1" fontSize={["2xl", "4xl"]} mb={2} color="black">
          God'swill Sekav Apya
          </Heading>
          <Text fontSize={["lg", "xl"]} mb={4} color="black">
            Welcome back, Sekav! Here's an overview of your portfolio.
          </Text>

          <Flex gap="4" direction={["column", "row"]} align="center">
            <Box
              h="100px"
              w="300px"
              border="1px solid black"
              p={4}
              borderRadius="md"
            >
              <VStack>
                <Text fontSize="xl" fontWeight="bold" color="black">
                  $82,950
                </Text>
                <Text fontSize="sm" color="gray.600">
                  Total Earnings
                </Text>
              </VStack>
            </Box>
            <Box
              h="100px"
              w="300px"
              border="1px solid black"
              p={4}
              borderRadius="md"
            >
              <VStack>
                <Text fontSize="xl" fontWeight="bold" color="black">
                  24
                </Text>
                <Text fontSize="sm" color="gray.600">
                  Projects Completed
                </Text>
              </VStack>
            </Box>
            <Box
              h="100px"
              w="300px"
              border="1px solid black"
              p={4}
              borderRadius="md"
            >
              <VStack>
                <Text fontSize="xl" fontWeight="bold" color="black">
                  4.9/5
                </Text>
                <Text fontSize="sm" color="gray.600">
                  Client Satisfaction
                </Text>
              </VStack>
            </Box>
            <Box
              h="100px"
              w="300px"
              border="1px solid black"
              p={4}
              borderRadius="md"
            >
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

          <Heading
            as="h1"
            fontSize={["2xl", "4xl"]}
            mb={2}
            color="black"
            mt={8}
          >
            Recent Projects
          </Heading>
          <Text fontSize={["lg", "xl"]} mb={4} color="black">
            A peek behind the curtain—these handpicked projects are where
            passion met purpose. From bold designs to clever code and compelling
            words, each piece tells a story of creativity, collaboration, and
            craft. Dive in and explore the wonder made real.
          </Text>

          <Flex gap="4" direction={["column", "row"]} align="center">
            <Card.Root w="300px" overflow="hidden">
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
              />
              <Card.Body gap="2">
                <Card.Title>Furniture Website</Card.Title>
                <Card.Description>
                  A clean, responsive e-commerce site designed to showcase
                  handcrafted furniture with style and simplicity.
                </Card.Description>
                {/* <Text
                  textStyle="2xl"
                  fontWeight="medium"
                  letterSpacing="tight"
                  mt="2"
                >
                  $450
                </Text> */}
              </Card.Body>
              <Card.Footer gap="2">
                <Button variant="solid">React</Button>
                <Button variant="solid">Tailwind CSS</Button>
              </Card.Footer>
            </Card.Root>
            <Card.Root w="300px" overflow="hidden">
              <Image
                src="https://images.unsplash.com/photo-1668600372358-e61485420d2f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Medical Personnel operating a tablet"
              />
              <Card.Body gap="2">
                <Card.Title>Health Management System</Card.Title>
                <Card.Description>
                  A streamlined platform for managing patient records,
                  appointments, and billing — built for efficiency and care.
                </Card.Description>
                {/* <Text
                  textStyle="2xl"
                  fontWeight="medium"
                  letterSpacing="tight"
                  mt="2"
                >
                  $450
                </Text> */}
              </Card.Body>
              <Card.Footer gap="2">
                <Button variant="solid">Next.js</Button>
                <Button variant="solid">Chakra UI</Button>
              </Card.Footer>
            </Card.Root>
            <Card.Root w="300px" overflow="hidden">
              <Image
                src="https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3J5cHRvY3VycmVuY3l8ZW58MHx8MHx8fDA%3D"
                alt="Crypto Trading Platform"
              />
              <Card.Body gap="2">
                <Card.Title>Crypto Trading Platform</Card.Title>
                <Card.Description>
                  A secure and user-friendly platform for trading
                  cryptocurrencies, featuring real-time data and analytics.
                </Card.Description>
                {/* <Text
                  textStyle="2xl"
                  fontWeight="medium"
                  letterSpacing="tight"
                  mt="2"
                >
                  $450
                </Text> */}
              </Card.Body>
              <Card.Footer gap="2">
                <Button variant="solid">Next.js</Button>
                <Button variant="solid">Material UI</Button>
              </Card.Footer>
            </Card.Root>
          </Flex>

          <Heading
            as="h1"
            fontSize={["2xl", "4xl"]}
            mb={6}
            color="black"
            mt={8}
          >
            Client Feedback
          </Heading>
          <Flex gap="4" direction={["column", "row"]} align="center">
            <Card.Root width="300px">
              <Card.Body>
                <HStack mb="6" gap="3">
                  <Avatar.Root>
                    <Avatar.Image src="https://images.unsplash.com/photo-1511806754518-53bada35f930" />
                    <Avatar.Fallback name="Nate Foss" />
                  </Avatar.Root>
                  <Stack gap="0">
                    <Text fontWeight="semibold" textStyle="sm">
                      Nate Foss
                    </Text>
                    <Text color="fg.muted" textStyle="sm">
                      @natefoss
                    </Text>
                  </Stack>
                </HStack>
                <Card.Description>
                  “Professional, detail-oriented, and easy to work with. The
                  project turned out better than we imagined.”
                </Card.Description>
              </Card.Body>
            </Card.Root>
            <Card.Root width="300px">
              <Card.Body>
                <HStack mb="6" gap="3">
                  <Avatar.Root>
                    <Avatar.Image src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZlbWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" />
                    <Avatar.Fallback name="Aisha Ali" />
                  </Avatar.Root>
                  <Stack gap="0">
                    <Text fontWeight="semibold" textStyle="sm">
                      Aisha Ali
                    </Text>
                    <Text color="fg.muted" textStyle="sm">
                      @aisha_ali
                    </Text>
                  </Stack>
                </HStack>
                <Card.Description>
                  “Super responsive and talented! Our website finally reflects
                  the heart of our brand.”
                </Card.Description>
              </Card.Body>
            </Card.Root>
            <Card.Root width="300px">
              <Card.Body>
                <HStack mb="6" gap="3">
                  <Avatar.Root>
                    <Avatar.Image src="https://images.unsplash.com/photo-1595085610896-fb31cfd5d4b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmVtYWxlJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" />
                    <Avatar.Fallback name="Sarah Miller" />
                  </Avatar.Root>
                  <Stack gap="0">
                    <Text fontWeight="semibold" textStyle="sm">
                      Sarah Miller
                    </Text>
                    <Text color="fg.muted" textStyle="sm">
                      @sara_miller
                    </Text>
                  </Stack>
                </HStack>
                <Card.Description>
                  “Absolutely impressed with the quality and speed. Delivered
                  exactly what we needed — and more!”
                </Card.Description>
              </Card.Body>
            </Card.Root>
          </Flex>

          {/* <Heading
            as="h1"
            fontSize={["2xl", "4xl"]}
            mb={6}
            color="black"
            mt={8}
          >
            Feel Free to Reach Out
          </Heading>
          <Box
            bg="black"
            p={6}
            rounded="md"
            shadow="md"
            w="full"
            maxW="lg"
            mx="auto"
          >
            <VStack spacing={4}>
              <form action="">
              <FormControl id="name" isRequired>
                <FormLabel>Your Name</FormLabel>
                <Input placeholder="John Doe" />
              </FormControl>

              <FormControl id="email" isRequired>
                <FormLabel>Email Address</FormLabel>
                <Input type="email" placeholder="you@example.com" />
              </FormControl>

              <FormControl id="message" isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea placeholder="Write your message here..." rows={4} />
              </FormControl>

              <Button colorScheme="blue" w="full">
                Send Message
              </Button>
              </form>
            </VStack>
          </Box> */}

          <Box
            as="footer"
            py={4}
            px={6}
            // bg="gray.100"
            borderTop="1px solid"
            borderColor="gray.200"
            mt={8}
            mb={-8}
          >
            <Flex justify="center" align="center">
              <Text fontSize="sm" color="gray.950">
                © {new Date().getFullYear()} God'swill Sekav Apya.
              </Text>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}

export default App;
