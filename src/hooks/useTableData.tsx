import moment from "moment";
import { useMemo, useState } from "react";
import { CgSandClock } from "react-icons/cg";
import { CiCircleMore } from "react-icons/ci";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

import { Flex, IconButton } from "@chakra-ui/react";
import { createColumnHelper } from "@tanstack/react-table";

import { Data, dataSamples } from "../types/Data";

const columnHelper = createColumnHelper<Data>();
export const useTableData = () => {
  const [data, setData] = useState(dataSamples);

  const columns = useMemo(
    () => [
      columnHelper.display({
        id: "expand",
        cell: ({ row }) =>
          row.getCanExpand() ? (
            <IconButton
              aria-label="Expand row"
              icon={
                row.getIsExpanded() ? <IoIosArrowDown /> : <IoIosArrowForward />
              }
              size="sm"
              colorScheme="black"
              variant="solid"
              color="gray.600"
              onClick={row.getToggleExpandedHandler()}
            />
          ) : null,
        size: 100,
      }),
      columnHelper.accessor("id", {
        id: "id",
        header: "Id",
      }),
      columnHelper.accessor("account", {
        id: "account",
        header: "Account",
      }),
      columnHelper.accessor("operation", {
        id: "operation",
        header: "Operation",
      }),
      columnHelper.accessor("symbol", {
        id: "symbol",
        header: "Symbol",
      }),
      columnHelper.accessor("description", {
        id: "description",
        header: "Description",
      }),
      columnHelper.accessor("quantity", {
        id: "quantity",
        header: "Quantity",
      }),
      columnHelper.accessor("filledQuantity", {
        id: "filledQuantity",
        header: "Filled Quantity",
      }),
      columnHelper.accessor("price", {
        id: "price",
        header: "Price",
      }),
      columnHelper.accessor("status", {
        id: "status",
        header: "Status",
        cell: ({ getValue }) => (
          <Flex alignItems="center" gap="2">
            <CgSandClock style={{ borderRadius: "50%" }} />
            {getValue()}
          </Flex>
        ),
      }),
      columnHelper.accessor("date", {
        id: "date",
        header: "Date",
        cell: ({ getValue }) =>
          moment(getValue()).format("YYYY/MM/DD hh:mm:ss"),
      }),
      columnHelper.accessor("expiration", {
        id: "expiration",
        header: "Expiration",
        cell: ({ getValue }) =>
          moment(getValue()).format("YYYY/MM/DD hh:mm:ss"),
      }),
      columnHelper.accessor("noRef", {
        id: "noRef",
        header: "No Ref",
      }),
      columnHelper.accessor("extRef", {
        id: "extRef",
        header: "Ext Ref",
      }),
      columnHelper.display({
        id: "actions",
        cell: () => (
          <IconButton aria-label="More" icon={<CiCircleMore />} size="sm" />
        ),
      }),
    ],
    []
  );

  return { columns, data };
};
