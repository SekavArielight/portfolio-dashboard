import { Box, Heading, Text, Flex, Avatar, Icon, SimpleGrid, useColorModeValue } from "@chakra-ui/react"
import { FiStar } from "react-icons/fi"

const testimonials = [
  {
    id: 1,
    name: "Sarah Thompson",
    company: "TechCorp Inc.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text: "Alex delivered our project ahead of schedule and exceeded our expectations. His attention to detail and problem-solving skills are exceptional.",
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    company: "StartUp Labs",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    rating: 5,
    text: "Working with Alex was a pleasure. He understood our requirements perfectly and implemented everything with great precision.",
  },
  {
    id: 3,
    name: "Emily Chen",
    company: "Design Masters",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    rating: 4,
    text: "Alex has a great eye for design and technical skills to match. He transformed our concept into a beautiful, functional website.",
  },
]

const TestimonialCard = ({ testimonial }) => {
  const bgColor = useColorModeValue("white", "gray.800")
  const starColor = useColorModeValue("yellow.400", "yellow.300")

  return (
    <Box bg={bgColor} p="6" borderRadius="lg" boxShadow="sm">
      <Flex mb="4">
        {[...Array(5)].map((_, i) => (
          <Icon
            key={i}
            as={FiStar}
            color={i < testimonial.rating ? starColor : "gray.300"}
            fill={i < testimonial.rating ? starColor : "none"}
            w="4"
            h="4"
          />
        ))}
      </Flex>
      <Text fontSize="sm" mb="4">
        "{testimonial.text}"
      </Text>
      <Flex align="center">
        <Avatar size="sm" name={testimonial.name} src={testimonial.avatar} mr="3" />
        <Box>
          <Text fontWeight="bold" fontSize="sm">
            {testimonial.name}
          </Text>
          <Text fontSize="xs" color="gray.500">
            {testimonial.company}
          </Text>
        </Box>
      </Flex>
    </Box>
  )
}

function ClientFeedback() {
  return (
    <Box mb="6" id="feedback">
      <Heading size="lg" mb="4">
        Client Feedback
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing="6">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default ClientFeedback
