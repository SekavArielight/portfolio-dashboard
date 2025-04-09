import {
  Box,
  Heading,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Divider,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react"

const transactions = [
  {
    id: 1,
    client: "TechCorp Inc.",
    project: "Website Redesign",
    date: "May 15, 2023",
    amount: "$3,500",
    status: "Paid",
  },
  {
    id: 2,
    client: "StartUp Labs",
    project: "Mobile App UI",
    date: "Apr 28, 2023",
    amount: "$2,800",
    status: "Paid",
  },
  {
    id: 3,
    client: "Design Masters",
    project: "E-commerce Platform",
    date: "Apr 10, 2023",
    amount: "$4,200",
    status: "Pending",
  },
]

function EarningsSummary() {
  const bgColor = useColorModeValue("white", "gray.800")

  return (
    <Box mb="6" id="earnings">
      <Heading size="lg" mb="4">
        Earnings Summary
      </Heading>
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing="6">
        <Box bg={bgColor} p="6" borderRadius="lg" boxShadow="sm">
          <Heading size="md" mb="4">
            Financial Overview
          </Heading>
          <SimpleGrid columns={{ base: 1, sm: 2 }} spacing="6" mb="6">
            <Stat>
              <StatLabel>Monthly Earnings</StatLabel>
              <StatNumber>$8,540</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                23.36%
              </StatHelpText>
            </Stat>
            <Stat>
              <StatLabel>YTD Earnings</StatLabel>
              <StatNumber>$42,500</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                12.05%
              </StatHelpText>
            </Stat>
          </SimpleGrid>
          <Divider mb="4" />
          <SimpleGrid columns={{ base: 1, sm: 2 }} spacing="6">
            <Stat>
              <StatLabel>Pending Payments</StatLabel>
              <StatNumber>$4,200</StatNumber>
              <StatHelpText>1 invoice pending</StatHelpText>
            </Stat>
            <Stat>
              <StatLabel>Average Project Value</StatLabel>
              <StatNumber>$3,500</StatNumber>
              <StatHelpText>Last 6 months</StatHelpText>
            </Stat>
          </SimpleGrid>
        </Box>

        <Box bg={bgColor} p="6" borderRadius="lg" boxShadow="sm">
          <Heading size="md" mb="4">
            Recent Transactions
          </Heading>
          <Box overflowX="auto">
            <Table variant="simple" size="sm">
              <Thead>
                <Tr>
                  <Th>Client</Th>
                  <Th>Project</Th>
                  <Th>Date</Th>
                  <Th isNumeric>Amount</Th>
                  <Th>Status</Th>
                </Tr>
              </Thead>
              <Tbody>
                {transactions.map((tx) => (
                  <Tr key={tx.id}>
                    <Td fontWeight="medium">{tx.client}</Td>
                    <Td>{tx.project}</Td>
                    <Td>{tx.date}</Td>
                    <Td isNumeric>{tx.amount}</Td>
                    <Td>
                      <Badge colorScheme={tx.status === "Paid" ? "green" : "yellow"} borderRadius="full" px="2">
                        {tx.status}
                      </Badge>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  )
}

export default EarningsSummary
