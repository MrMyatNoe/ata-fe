import "react-datepicker/dist/react-datepicker.css";

import { useState } from "react";
import DatePicker from "react-datepicker";
import { FaChevronDown, FaRegCalendarAlt } from "react-icons/fa";

import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";

export const Header = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <Flex minWidth="max-content" alignItems="center" gap="2">
      <Box>
        <VStack alignItems="start">
          <Text fontSize="lg" fontWeight="bold" color="blue.700">
            Search
          </Text>
          <HStack>
            <Text fontSize="xs" fontWeight="bold" color="gray.500">
              Search results :
            </Text>
            <Text fontSize="sm" fontWeight="bold" color="blue.800">
              123
            </Text>
          </HStack>
        </VStack>
      </Box>
      <Spacer />
      <Box>
        <Flex alignItems="baseline" gap={5}>
          <Text fontSize="sm" fontWeight="bold" color="blue.500">
            Period
          </Text>
          <Select
            placeholder="Transmission"
            size="sm"
            color="blue.800"
            iconColor="blue.800"
            icon={<FaChevronDown />}
            iconSize="sm"
          />
          <Text fontSize="sm" fontWeight="bold" color="blue.500">
            Status
          </Text>
          <Select
            placeholder="Waiting"
            size="sm"
            color="blue.800"
            iconColor="blue.800"
            icon={<FaChevronDown />}
            iconSize="sm"
          />
          <Text fontSize="sm" fontWeight="bold" color="blue.500">
            From
          </Text>
          <InputGroup alignItems="center">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date ?? new Date())}
              customInput={<Input placeholder="Pick a date" size="sm" />}
            />
            <InputRightElement
              children={<FaRegCalendarAlt color="skyblue" />}
            />
          </InputGroup>
          <Text fontSize="sm" fontWeight="bold" color="blue.500">
            To
          </Text>
          <InputGroup alignItems="center">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date ?? new Date())}
              customInput={<Input placeholder="Pick a date" size="sm" />}
            />
            <InputRightElement
              children={<FaRegCalendarAlt color="skyblue" />}
            />
          </InputGroup>
          <Box>
            <Button
              colorScheme="blue"
              size="md"
              borderRadius="20px"
              width="100px"
            >
              Search
            </Button>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};
