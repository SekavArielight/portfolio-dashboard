"use client"

import {
  Box,
  Flex,
  IconButton,
  Avatar,
  Text,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
  Icon,
  Link,
} from "@chakra-ui/react"
import { FiMenu, FiHome, FiFolder, FiStar, FiDollarSign, FiMail, FiSettings } from "react-icons/fi"

// Navigation items with section IDs - same as sidebar
const navItems = [
  { icon: FiHome, label: "Dashboard", href: "#overview" },
  { icon: FiFolder, label: "Projects", href: "#projects" },
  { icon: FiStar, label: "Testimonials", href: "#feedback" },
  { icon: FiDollarSign, label: "Earnings", href: "#earnings" },
  { icon: FiMail, label: "Messages", href: "#" },
  { icon: FiSettings, label: "Settings", href: "#" },
]

const NavItem = ({ icon, children, href, onClick, ...rest }) => {
  return (
    <Link
      href={href}
      _hover={{ textDecoration: "none" }}
      onClick={(e) => {
        // Prevent default behavior for anchor links
        if (href.startsWith("#")) {
          e.preventDefault()
          // Smooth scroll to the section
          const element = document.getElementById(href.substring(1))
          if (element) {
            element.scrollIntoView({ behavior: "smooth" })
          }
          if (onClick) onClick()
        }
      }}
      w="full"
    >
      <Flex
        align="center"
        px="4"
        py="3"
        cursor="pointer"
        role="group"
        fontWeight="medium"
        transition=".15s ease"
        color="gray.500"
        _hover={{
          bg: "blue.50",
          color: "blue.500",
        }}
        rounded="md"
        w="full"
        {...rest}
      >
        {icon && (
          <Icon
            mr="2"
            boxSize="4"
            as={icon}
            transition=".2s ease"
            _groupHover={{
              color: "blue.500",
            }}
          />
        )}
        {children}
      </Flex>
    </Link>
  )
}

function MobileNav() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box px="4" py="2" bg="white" borderBottomWidth="1px" borderBottomColor="gray.200">
      <Flex justify="space-between" align="center">
        <IconButton aria-label="Open menu" icon={<FiMenu />} variant="ghost" onClick={onOpen} />
        <Text fontWeight="bold">Dashboard</Text>
        <Avatar size="sm" name="Alex Johnson" src="https://via.placeholder.com/40" />
      </Flex>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            <Flex align="center">
              <Avatar size="sm" name="Alex Johnson" src="https://via.placeholder.com/40" />
              <Box ml="3">
                <Text fontSize="sm" fontWeight="bold">
                  Alex Johnson
                </Text>
                <Text fontSize="xs" color="gray.500">
                  Frontend Developer
                </Text>
              </Box>
            </Flex>
          </DrawerHeader>
          <DrawerBody p="0">
            <VStack align="stretch" spacing="0" py="2">
              {navItems.map((item) => (
                <NavItem key={item.label} icon={item.icon} href={item.href} onClick={onClose}>
                  {item.label}
                </NavItem>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

export default MobileNav
