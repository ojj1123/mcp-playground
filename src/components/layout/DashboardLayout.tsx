import { Box, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import Sidebar from "./Sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <Flex minH="100vh" bg="gray.50">
      <Sidebar />
      <Box flex="1" overflow="auto">
        {/* <Navbar /> */}
        <Box as="main" p={6}>
          {children}
        </Box>
      </Box>
    </Flex>
  );
}
