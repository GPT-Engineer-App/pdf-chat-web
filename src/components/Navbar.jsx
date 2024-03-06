import React from "react";
import { Flex, Box, Text, Link } from "@chakra-ui/react";
import { FaHome, FaRobot } from "react-icons/fa";

const Navbar = () => {
  return (
    <Flex bg="brand.900" color="white" px={5} py={3} justifyContent="space-between" alignItems="center">
      <Box>
        <Text fontSize="lg" fontWeight="bold">
          AI Features
        </Text>
      </Box>
      <Flex alignItems="center" justifyContent="center" gap="4">
        <Link href="/" display="flex" alignItems="center">
          <FaHome /> <Text ml={2}>Home</Text>
        </Link>
        <Link href="#!" display="flex" alignItems="center">
          <FaRobot /> <Text ml={2}>Feature 1</Text>
        </Link>
        <Link href="#!" display="flex" alignItems="center">
          <FaRobot /> <Text ml={2}>Feature 2</Text>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Navbar;
