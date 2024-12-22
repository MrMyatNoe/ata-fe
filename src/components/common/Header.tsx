import "react-datepicker/dist/react-datepicker.css";
import "./Header.css";

import moment from "moment";
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

import { Operation, Status } from "../../types/Data";

export const Header = ({
  onSearch,
  filterCount,
}: {
  onSearch: (criteria: any) => void;
  filterCount: number;
}) => {
  const [period, setPeriod] = useState<Operation>(Operation.All);
  const [status, setStatus] = useState<Status>(Status.All);
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());

  const handleSearch = () => {
    const criteria = {
      period,
      status,
      fromDate: moment(fromDate).format("YYYY-MM-DD"),
      toDate: moment(toDate).format("YYYY-MM-DD"),
    };
    onSearch(criteria);
  };

  return (
    <Flex minWidth="max-content" alignItems="center" gap="2" mb={2}>
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
        <Flex alignItems="baseline" gap={3}>
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
            <option value={Operation.All}>All</option>
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
            <option value={Status.All}>All</option>
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
          <Text fontSize="sm" fontWeight="bold" color="#5C87A5" pl={2}>
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
