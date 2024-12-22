import moment from "moment";
import { CiShare1 } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

import {
  Box,
  Button,
  HStack,
  ListItem,
  Spacer,
  Stack,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";

import { Data } from "../../types/Data";

export default function RowDetail({ data }: { data: Data }) {
  const {
    firstName,
    lastName,
    netAmount,
    price,
    exchangeRate,
    osLimit,
    referenceNumber,
    dateTime,
    telephone,
    userId,
  } = data;

  const handleAccepted = () => {
    console.log("accepted");
  };

  const handleRejected = () => {
    console.log("rejected");
  };

  const handleViewDetails = () => {
    console.log("view details");
  };

  return (
    <Box bgColor={"#FAFAFF"} ml={"15px"} pl={"15px"}>
      <Stack dir="column" spacing="1" gap="4">
        <Box>
          <HStack>
            <Text as="h4" color="#3387FC" fontWeight="bold">
              FIRST-NAME LAST-NAME ( {firstName} - {lastName} )
            </Text>
            <Button
              borderColor="gray.500"
              size="md"
              borderRadius="20px"
              width="180px"
              fontSize="sm"
              variant="outline"
              rightIcon={<CiShare1 fontWeight={"bold"} />}
              color={"#3387FC"}
              height={"32px"}
              onClick={handleViewDetails}
            >
              Full Review Details
            </Button>
            <Spacer />
            <Button
              color="#fff"
              bgColor={"#0D70C4"}
              size="md"
              borderRadius="20px"
              width="110px"
              onClick={handleAccepted}
              fontSize="14px"
            >
              ACCEPT
            </Button>
            <Button
              borderColor="#CA303D"
              size="md"
              borderRadius="20px"
              width="120px"
              fontSize="sm"
              variant="outline"
              rightIcon={<IoIosArrowDown fontWeight={"bold"} />}
              color={"#CA303D"}
              height={"32px"}
              onClick={handleRejected}
            >
              Reject
            </Button>
          </HStack>
        </Box>
        <HStack gap={5} dir="row">
          <Box>
            <VStack align="start">
              <HStack>
                <Text fontSize="sm">Net Amount: </Text>
                <Text fontSize="sm" fontWeight="bold">
                  {netAmount.toFixed(2)} USD
                </Text>
              </HStack>
              <HStack>
                <Text fontSize="sm">Reference Number: </Text>
                <Text fontSize="sm" fontWeight="bold">
                  {referenceNumber}
                </Text>
              </HStack>
            </VStack>
          </Box>
          <Spacer />
          <Box>
            <VStack align="start">
              <HStack>
                <Text fontSize="sm">Price: </Text>
                <Text fontSize="sm" fontWeight="bold">
                  {price.toFixed(2)}
                </Text>
              </HStack>
              <HStack>
                <Text fontSize="sm">Date / Time: </Text>
                <Text fontSize="sm" fontWeight="bold">
                  {moment(dateTime).format("YYYY/MM/DD HH:mm:ss")}
                </Text>
              </HStack>
            </VStack>
          </Box>
          <Spacer />
          <Box>
            <VStack align="start">
              <HStack>
                <Text fontSize="sm">Exchange Rate: </Text>
                <Text fontSize="sm" fontWeight="bold">
                  {exchangeRate.toFixed(4)}
                </Text>
              </HStack>
              <HStack>
                <Text fontSize="sm">Telephone: </Text>
                <Text fontSize="sm" fontWeight="bold">
                  {telephone}
                </Text>
              </HStack>
            </VStack>
          </Box>
          <Spacer />
          <Box>
            <VStack align="start">
              <HStack>
                <Text fontSize="sm">O/S Limit: </Text>
                <Text fontSize="sm" fontWeight="bold">
                  {osLimit.toFixed(1)}
                </Text>
              </HStack>
              <HStack>
                <Text fontSize="sm">User ID: </Text>
                <Text fontSize="sm" fontWeight="bold">
                  {userId}
                </Text>
              </HStack>
            </VStack>
          </Box>
          <Spacer />
        </HStack>
      </Stack>
      <Stack
        alignItems="start"
        p="4"
        justifyContent="start"
        bg="#F5F5F5"
        mt="4"
        borderRadius="2"
      >
        <Text fontSize="sm" fontWeight="bold" as="h5" colorScheme="blue.500">
          Warning(s)
        </Text>
        <UnorderedList
          p="6 4 0 6"
          textAlign="start"
          alignItems="start"
          color={"#000"}
          fontSize={"sm"}
        >
          <ListItem>
            To Trade this security in this account, a currency conversion will
            made at the current rate.
          </ListItem>
          <ListItem>A Similar Order has already been submitted.</ListItem>
          <ListItem>
            Your trasanction will be processed the following busniess day.
          </ListItem>
          <ListItem>
            It is not possible to calculate the buying of this order.
          </ListItem>
          <ListItem>
            A Cancellation will not be possible during business hours on market
            orders. You can call a representative for more information.
          </ListItem>
          <ListItem>
            For the above-mentioned reason(s), your order will be processed by
            one of our representatives.
          </ListItem>
        </UnorderedList>
      </Stack>
    </Box>
  );
}
