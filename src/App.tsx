import { Box, Flex, Grid, GridItem, Text, Icon, Input, Button, Image } from "@chakra-ui/react";
import {
  FiSearch,
  FiBell,
  FiMenu,
  FiHome,
  FiPieChart,
  FiUser,
  FiSettings,
  FiMoreVertical,
} from "react-icons/fi";

function App() {
  const isDark = false; // TODO: Implement dark mode toggle
  const bgColor = isDark ? "gray.800" : "white";
  const textColor = isDark ? "white" : "gray.700";
  const borderColor = isDark ? "gray.700" : "gray.200";

  return (
    <Grid
      minH="100vh"
      templateColumns={{ base: "1fr", md: "250px 1fr" }}
      bg={isDark ? "gray.900" : "gray.50"}
    >
      {/* Sidebar */}
      <GridItem
        as="aside"
        bg={bgColor}
        borderRight="1px"
        borderColor={borderColor}
        p={5}
        display={{ base: "none", md: "block" }}
      >
        <Flex mb={8} align="center">
          <Text fontSize="2xl" fontWeight="bold" color={textColor}>
            PURITY UI
          </Text>
        </Flex>

        <Flex direction="column" gap={4}>
          <Flex align="center" p={3} borderRadius="lg" cursor="pointer" _hover={{ bg: "gray.100" }}>
            <Icon as={FiHome} boxSize={5} color={textColor} />
            <Text ml={4} color={textColor}>
              Dashboard
            </Text>
          </Flex>
          <Flex align="center" p={3} borderRadius="lg" cursor="pointer" _hover={{ bg: "gray.100" }}>
            <Icon as={FiPieChart} boxSize={5} color={textColor} />
            <Text ml={4} color={textColor}>
              Analytics
            </Text>
          </Flex>
          <Flex align="center" p={3} borderRadius="lg" cursor="pointer" _hover={{ bg: "gray.100" }}>
            <Icon as={FiUser} boxSize={5} color={textColor} />
            <Text ml={4} color={textColor}>
              Profile
            </Text>
          </Flex>
          <Flex align="center" p={3} borderRadius="lg" cursor="pointer" _hover={{ bg: "gray.100" }}>
            <Icon as={FiSettings} boxSize={5} color={textColor} />
            <Text ml={4} color={textColor}>
              Settings
            </Text>
          </Flex>
        </Flex>
      </GridItem>

      {/* Main Content */}
      <GridItem as="main" p={6}>
        {/* Header */}
        <Flex justify="space-between" align="center" mb={8}>
          <Flex align="center" gap={4}>
            <Button
              display={{ base: "flex", md: "none" }}
              aria-label="Open menu"
              onClick={() => {}}
              size="md"
              variant="ghost"
            >
              <Icon as={FiMenu} />
            </Button>
            <Flex position="relative" maxW="400px" flex={1}>
              <Input
                pl={10}
                placeholder="Search"
                bg={bgColor}
                border="1px"
                borderColor={borderColor}
                _placeholder={{ color: "gray.400" }}
              />
              <Icon
                as={FiSearch}
                color="gray.400"
                position="absolute"
                left={3}
                top="50%"
                transform="translateY(-50%)"
              />
            </Flex>
          </Flex>

          <Flex align="center" gap={4}>
            <Button aria-label="Notifications" variant="ghost" size="md">
              <Icon as={FiBell} />
            </Button>
            <Button variant="ghost" size="md" borderRadius="full" p={0} minW={10} h={10}>
              <Image
                borderRadius="full"
                boxSize="32px"
                src="https://bit.ly/dan-abramov"
                alt="Profile"
              />
            </Button>
          </Flex>
        </Flex>

        {/* Stats Grid */}
        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6} mb={6}>
          <Box
            p={6}
            bg={bgColor}
            borderRadius="lg"
            boxShadow="sm"
            border="1px"
            borderColor={borderColor}
          >
            <Text color="gray.500" fontSize="sm">
              Total Revenue
            </Text>
            <Text color={textColor} fontSize="2xl" fontWeight="bold" mt={2}>
              $45,000
            </Text>
            <Flex align="center" color="green.500" mt={2}>
              <Icon as={FiPieChart} transform="rotate(-45deg)" />
              <Text ml={2}>23.36%</Text>
            </Flex>
          </Box>

          <Box
            p={6}
            bg={bgColor}
            borderRadius="lg"
            boxShadow="sm"
            border="1px"
            borderColor={borderColor}
          >
            <Text color="gray.500" fontSize="sm">
              New Users
            </Text>
            <Text color={textColor} fontSize="2xl" fontWeight="bold" mt={2}>
              850
            </Text>
            <Flex align="center" color="green.500" mt={2}>
              <Icon as={FiPieChart} transform="rotate(-45deg)" />
              <Text ml={2}>12.5%</Text>
            </Flex>
          </Box>

          <Box
            p={6}
            bg={bgColor}
            borderRadius="lg"
            boxShadow="sm"
            border="1px"
            borderColor={borderColor}
          >
            <Text color="gray.500" fontSize="sm">
              Active Sessions
            </Text>
            <Text color={textColor} fontSize="2xl" fontWeight="bold" mt={2}>
              432
            </Text>
            <Flex align="center" color="red.500" mt={2}>
              <Icon as={FiPieChart} transform="rotate(45deg)" />
              <Text ml={2}>9.05%</Text>
            </Flex>
          </Box>
        </Grid>

        {/* Charts and Tables Grid */}
        <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} gap={6}>
          {/* Sales Overview */}
          <Box
            bg={bgColor}
            borderRadius="xl"
            p={6}
            boxShadow="sm"
            border="1px"
            borderColor={borderColor}
          >
            <Flex justify="space-between" align="center" mb={6}>
              <Box>
                <Text fontSize="lg" fontWeight="bold" color={textColor}>
                  Sales Overview
                </Text>
                <Text fontSize="sm" color="gray.500">
                  Monthly sales performance
                </Text>
              </Box>
              <Button variant="ghost" size="sm">
                <Icon as={FiMoreVertical} />
              </Button>
            </Flex>
            <Box h="300px" bg="gray.50" borderRadius="lg" mb={4}>
              {/* Chart placeholder */}
              <Text p={4} color="gray.500">
                Chart will be implemented separately
              </Text>
            </Box>
          </Box>

          {/* Active Users */}
          <Box
            bg={bgColor}
            borderRadius="xl"
            p={6}
            boxShadow="sm"
            border="1px"
            borderColor={borderColor}
          >
            <Flex justify="space-between" align="center" mb={6}>
              <Box>
                <Text fontSize="lg" fontWeight="bold" color={textColor}>
                  Active Users
                </Text>
                <Text fontSize="sm" color="gray.500">
                  Page views per second
                </Text>
              </Box>
              <Button variant="ghost" size="sm">
                <Icon as={FiMoreVertical} />
              </Button>
            </Flex>

            {/* Table Header */}
            <Grid templateColumns="2fr 1fr 1fr" gap={4} mb={4} px={4}>
              <Text fontWeight="medium" color="gray.500">
                Page Name
              </Text>
              <Text fontWeight="medium" color="gray.500" textAlign="right">
                Views
              </Text>
              <Text fontWeight="medium" color="gray.500" textAlign="right">
                Progress
              </Text>
            </Grid>

            {/* Table Rows */}
            <Box>
              <Grid templateColumns="2fr 1fr 1fr" gap={4} p={4} _hover={{ bg: "gray.50" }}>
                <Text color={textColor} fontWeight="medium">
                  /dashboard
                </Text>
                <Text textAlign="right">3,456</Text>
                <Box>
                  <Box w="full" h="2" bg="gray.100" borderRadius="full">
                    <Box w="70%" h="full" bg="green.500" borderRadius="full" />
                  </Box>
                </Box>
              </Grid>

              <Grid templateColumns="2fr 1fr 1fr" gap={4} p={4} _hover={{ bg: "gray.50" }}>
                <Text color={textColor} fontWeight="medium">
                  /profile
                </Text>
                <Text textAlign="right">2,145</Text>
                <Box>
                  <Box w="full" h="2" bg="gray.100" borderRadius="full">
                    <Box w="45%" h="full" bg="blue.500" borderRadius="full" />
                  </Box>
                </Box>
              </Grid>

              <Grid templateColumns="2fr 1fr 1fr" gap={4} p={4} _hover={{ bg: "gray.50" }}>
                <Text color={textColor} fontWeight="medium">
                  /analytics
                </Text>
                <Text textAlign="right">1,898</Text>
                <Box>
                  <Box w="full" h="2" bg="gray.100" borderRadius="full">
                    <Box w="35%" h="full" bg="orange.500" borderRadius="full" />
                  </Box>
                </Box>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </GridItem>
    </Grid>
  );
}

export default App;
