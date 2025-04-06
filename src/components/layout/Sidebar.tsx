import { Box, Flex, VStack, Text, Icon, Link } from "@chakra-ui/react";
import { FiHome, FiTrendingUp, FiCompass, FiStar, FiSettings } from "react-icons/fi";

interface NavItemProps {
  icon: React.ElementType;
  children: string;
}

const NavItem = ({ icon, children }: NavItemProps) => {
  return (
    <Link href="#" style={{ textDecoration: "none" }} _focus={{ boxShadow: "none" }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
      >
        <Icon
          mr="4"
          fontSize="16"
          _groupHover={{
            color: "white",
          }}
          as={icon}
        />
        {children}
      </Flex>
    </Link>
  );
};

export default function Sidebar() {
  return (
    <Box
      bg="white"
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
      </Flex>
      <VStack gap={4} align="stretch" mt={6}>
        <NavItem icon={FiHome}>Dashboard</NavItem>
        <NavItem icon={FiTrendingUp}>Analytics</NavItem>
        <NavItem icon={FiCompass}>Explore</NavItem>
        <NavItem icon={FiStar}>Favorites</NavItem>
        <NavItem icon={FiSettings}>Settings</NavItem>
      </VStack>
    </Box>
  );
}
