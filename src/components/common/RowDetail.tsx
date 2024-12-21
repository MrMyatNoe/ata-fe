import moment from "moment";
import { CiShare1 } from "react-icons/ci";

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
  return (
    <Box>
      <Stack dir="column" spacing="1" gap="4">
        <Box>
          <HStack>
            <Text as="h4" color="blue" fontWeight="bold">
              FIRST-NAME LAST-NAME ( {firstName} - {lastName} )
            </Text>
            <Button
              borderColor="blue.500"
              size="md"
              borderRadius="20px"
              width="200px"
              fontSize="sm"
              variant="outline"
              rightIcon={<CiShare1 />}
            >
              Full Review Details
            </Button>
          </HStack>
        </Box>
        <HStack gap={5} dir="row">
          <Box>
            <VStack align="start">
              <Text fontSize="sm">Net Amount: </Text>
              <Text fontSize="sm" fontWeight="bold">
                {netAmount.toFixed(2)} USD
              </Text>
              <Text fontSize="sm">Reference Number: </Text>
              <Text fontSize="sm" fontWeight="bold">
                {referenceNumber}
              </Text>
            </VStack>
          </Box>
          <Spacer />
          <Box>
            <VStack align="start">
              <Text fontSize="sm">Price: </Text>
              <Text fontSize="sm" fontWeight="bold">
                {price.toFixed(2)}
              </Text>
              <Text fontSize="sm">Date / Time: </Text>
              <Text fontSize="sm" fontWeight="bold">
                {moment(dateTime).format("YYYY/MM/DD HH:mm:ss")}
              </Text>
            </VStack>
          </Box>
          <Spacer />
          <Box>
            <VStack align="start">
              <Text fontSize="sm">Exchange Rate: </Text>
              <Text fontSize="sm" fontWeight="bold">
                {exchangeRate.toFixed(4)}
              </Text>
              <Text fontSize="sm">Telephone: </Text>
              <Text fontSize="sm" fontWeight="bold">
                {telephone}
              </Text>
            </VStack>
          </Box>
          <Spacer />
          <Box>
            <VStack align="start">
              <Text fontSize="sm">O/S Limit: </Text>
              <Text fontSize="sm" fontWeight="bold">
                {osLimit.toFixed(1)}
              </Text>
              <Text fontSize="sm">User ID: </Text>
              <Text fontSize="sm" fontWeight="bold">
                {userId}
              </Text>
            </VStack>
          </Box>
          <Spacer />
        </HStack>
      </Stack>
      <Stack
        alignItems="start"
        p="4"
        justifyContent="start"
        bg="yellow.100"
        mt="2"
        borderRadius="2"
      >
        <Text fontSize="sm" fontWeight="bold" as="h5" colorScheme="blue.500">
          Warnings
        </Text>
        <UnorderedList p="4" textAlign="start" alignItems="start">
          <ListItem>Warning 12</ListItem>
          <ListItem>Warning 222222</ListItem>
          <ListItem>Warning 3</ListItem>
        </UnorderedList>
      </Stack>
    </Box>
  );
}
