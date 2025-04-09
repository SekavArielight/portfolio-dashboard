import React from "react"
import { Box, Heading, Text, SimpleGrid, Badge, Flex, Image, Button, Icon, useColorModeValue } from "@chakra-ui/react"
import { FiExternalLink, FiGithub } from "react-icons/fi"

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A modern e-commerce platform built with React and Chakra UI",
    image: "https://via.placeholder.com/400x200",
    tags: ["React", "Redux", "Chakra UI"],
    status: "Completed",
    statusColor: "green",
  },
  {
    id: 2,
    title: "Dashboard UI Kit",
    description: "A comprehensive dashboard UI kit with 50+ components",
    image: "https://via.placeholder.com/400x200",
    tags: ["React", "JavaScript", "Styled Components"],
    status: "Completed",
    statusColor: "green",
  },
  {
    id: 3,
    title: "Social Media App",
    description: "A social media application with real-time messaging",
    image: "https://via.placeholder.com/400x200",
    tags: ["React", "Firebase", "Tailwind CSS"],
    status: "In Progress",
    statusColor: "blue",
  },
]

const ProjectCard = ({ project }) => {
  const bgColor = useColorModeValue("white", "gray.800")

  return (
    <Box bg={bgColor} borderRadius="lg" overflow="hidden" boxShadow="sm">
      <Box position="relative">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} w="full" h="160px" objectFit="cover" />
        <Badge position="absolute" top="3" right="3" colorScheme={project.statusColor} borderRadius="full" px="2">
          {project.status}
        </Badge>
      </Box>
      <Box p="4">
        <Heading size="md" mb="2">
          {project.title}
        </Heading>
        <Text color="gray.600" fontSize="sm" mb="3" noOfLines={2}>
          {project.description}
        </Text>
        <Flex wrap="wrap" gap="2" mb="4">
          {project.tags.map((tag) => (
            <Badge key={tag} colorScheme="gray" fontSize="xs">
              {tag}
            </Badge>
          ))}
        </Flex>
        <Flex gap="2">
          <Button size="sm" leftIcon={<Icon as={FiExternalLink} />} variant="outline" flex="1">
            Preview
          </Button>
          <Button size="sm" leftIcon={<Icon as={FiGithub} />} variant="outline" flex="1">
            Code
          </Button>
        </Flex>
      </Box>
    </Box>
  )
}

function RecentProjects() {
  return (
    <Box mb="6" id="projects">
      <Flex justify="space-between" align="center" mb="4">
        <Heading size="lg">Recent Projects</Heading>
        <Button size="sm" colorScheme="blue">
          View All
        </Button>
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default RecentProjects
