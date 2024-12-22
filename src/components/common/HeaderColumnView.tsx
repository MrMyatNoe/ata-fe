import moment from "moment";
import React from "react";
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

import { Operation, Status } from "../../types/Data";

interface HeaderColumnViewProps {
  period: Operation;
  setPeriod: (value: Operation) => void;
  status: Status;
  setStatus: (value: Status) => void;
  fromDate: Date;
  setFromDate: (date: Date) => void;
  toDate: Date;
  setToDate: (date: Date) => void;
  handleSearch: () => void;
  filterCount: number;
}

const HeaderColumnView: React.FC<HeaderColumnViewProps> = ({
  period,
  setPeriod,
  status,
  setStatus,
  fromDate,
  setFromDate,
  toDate,
  setToDate,
  handleSearch,
  filterCount,
}) => {
  return (
    <Flex
      direction="column"
      minWidth="max-content"
      alignItems="center"
      gap="2"
      mb={2}
    >
      <Box>
        <VStack alignItems="start">
          <Text fontSize="lg" fontWeight="bold" color="#214963">
            Search
          </Text>
          <HStack>
            <Text fontSize="xs" fontWeight="bold" color="gray.500">
              Search results :
            </Text>
            <Text fontSize="sm" fontWeight="bold" color="#59788A">
              {filterCount}
            </Text>
          </HStack>
        </VStack>
      </Box>
      <Spacer />
      <Box>
        <Flex direction="column" alignItems="baseline" gap={3}>
          <Flex direction="row" alignItems="baseline" gap={3} w={"100%"}>
            <Flex w={"50%"} gap={2}>
              <Text fontSize="sm" fontWeight="bold" color="#5C87A5">
                Period
              </Text>
              <Select
                placeholder="All"
                size="sm"
                color="#5C87A5"
                iconColor="#5C87A5"
                icon={<FaChevronDown />}
                iconSize="sm"
                value={period}
                onChange={(e) => setPeriod(e.target.value as Operation)}
                borderRadius={6}
                borderWidth={2}
                fontWeight={500}
              >
                {Object.values(Operation)
                  .filter((op) => op !== Operation.All)
                  .map((op) => (
                    <option
                      key={op}
                      value={op}
                      style={{ color: "#385C74", fontWeight: "bold" }}
                    >
                      {op.charAt(0).toUpperCase() + op.slice(1)}
                    </option>
                  ))}
              </Select>
            </Flex>
            <Flex w={"50%"} gap={2}>
              <Text fontSize="sm" fontWeight="bold" color="#5C87A5" pl={2}>
                Status
              </Text>
              <Select
                placeholder="All"
                size="sm"
                color="#385C74"
                iconColor="#59788A"
                icon={<FaChevronDown />}
                iconSize="sm"
                value={status}
                onChange={(e) => setStatus(e.target.value as Status)}
                borderRadius={6}
                borderWidth={2}
                fontWeight={500}
              >
                {Object.values(Status)
                  .filter((st) => st !== Status.All)
                  .map((st) => (
                    <option
                      key={st}
                      value={st}
                      style={{ color: "#385C74", fontWeight: "bold" }}
                    >
                      {st.charAt(0).toUpperCase() + st.slice(1)}
                    </option>
                  ))}
              </Select>
            </Flex>
          </Flex>
          <Flex direction="row" alignItems="baseline" gap={3}>
            <Text fontSize="sm" fontWeight="bold" color="#5C87A5">
              From
            </Text>
            <InputGroup alignItems="center">
              <DatePicker
                portalId="date-popper"
                selected={fromDate}
                onChange={(date) => setFromDate(date ?? new Date())}
                customInput={
                  <Input
                    placeholder="Pick a date"
                    size="sm"
                    value={moment(fromDate).format("dd/mm/YYYY")}
                  />
                }
                className="date-picker-input"
                dateFormat={"dd/MM/yyyy"}
              />
              <InputRightElement
                children={<FaRegCalendarAlt />}
                className="date-picker-icon"
              />
            </InputGroup>
            <Text fontSize="sm" fontWeight="bold" color="#5C87A5" pl={2}>
              To
            </Text>
            <InputGroup alignItems="center">
              <DatePicker
                portalId="date-popper"
                selected={toDate}
                onChange={(date) => setToDate(date ?? new Date())}
                customInput={
                  <Input
                    placeholder="Pick a date"
                    size="sm"
                    value={moment(toDate).format("DD/MM/YYYY")}
                  />
                }
                className="date-picker-input"
                dateFormat={"dd/MM/yyyy"}
              />
              <InputRightElement
                children={<FaRegCalendarAlt />}
                className="date-picker-icon"
              />
            </InputGroup>
          </Flex>
          <Box>
            <Button
              color="#fff"
              bgColor={"#0D70C4"}
              size="md"
              borderRadius="20px"
              width="110px"
              onClick={handleSearch}
              fontSize="14px"
            >
              Search
            </Button>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default HeaderColumnView;
