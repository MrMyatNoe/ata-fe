import moment from "moment";
import { useMemo, useState } from "react";
import { CgSandClock } from "react-icons/cg";
import { IoIosArrowDown, IoIosArrowForward, IoIosMore } from "react-icons/io";

import { Flex, IconButton } from "@chakra-ui/react";
import { createColumnHelper } from "@tanstack/react-table";

import { Data, dataSamples } from "../types/Data";

const columnHelper = createColumnHelper<Data>();

const formatExtRef = (extRef: string) => {
  if (extRef.length < 9) return extRef;
  return `2-${extRef.slice(1, 8)}1-0000`;
};
export const useTableData = (searchCriteria: {
  period: string;
  status: string;
  fromDate: Date;
  toDate: Date;
}) => {
  const [data, setData] = useState(dataSamples);

  console.log("search creteria", searchCriteria);
  const filteredData = useMemo(() => {
    return data.filter((item) => {
      const matchesPeriod =
        searchCriteria.period === "all" || !searchCriteria.period
          ? true
          : item.operation.toLowerCase() ===
            searchCriteria.period.toLowerCase();
      const matchesStatus =
        searchCriteria.status === "all" || !searchCriteria.status
          ? true
          : item.status.toLowerCase() === searchCriteria.status.toLowerCase();
      const matchesFromDate = searchCriteria.fromDate
        ? moment(item.dateTime).isSameOrAfter(moment(searchCriteria.fromDate))
        : true;
      const matchesToDate = searchCriteria.toDate
        ? moment(item.dateTime).isSameOrBefore(moment(searchCriteria.toDate))
        : true;
      return matchesPeriod && matchesStatus && matchesFromDate && matchesToDate;
    });
  }, [data, searchCriteria]);

  console.log("filtered data", filteredData);
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
        size: 0,
      }),
      columnHelper.accessor("account", {
        id: "account",
        header: () => (
          <span style={{ color: "#688FAB", fontSize: "14px" }}>Account</span>
        ),
      }),
      columnHelper.accessor("operation", {
        id: "operation",
        header: () => (
          <span style={{ color: "#688FAB", fontSize: "14px" }}>Operation</span>
        ),
      }),
      columnHelper.accessor("symbol", {
        id: "symbol",
        header: () => (
          <span style={{ color: "#688FAB", fontSize: "14px" }}>Symbol</span>
        ),
      }),
      columnHelper.accessor("description", {
        id: "description",
        header: () => (
          <span style={{ color: "#688FAB", fontSize: "14px" }}>
            Description
          </span>
        ),
        size: 250,
      }),
      columnHelper.accessor("quantity", {
        id: "quantity",
        header: () => (
          <span style={{ color: "#688FAB", fontSize: "14px" }}>Qty</span>
        ),
      }),
      columnHelper.accessor("filledQuantity", {
        id: "filledQuantity",
        header: () => (
          <span style={{ color: "#688FAB", fontSize: "14px" }}>Filled Qty</span>
        ),
        size: 200,
      }),
      columnHelper.accessor("price", {
        id: "price",
        header: () => (
          <span style={{ color: "#688FAB", fontSize: "14px" }}>Price</span>
        ),
      }),
      columnHelper.accessor("status", {
        id: "status",
        header: () => (
          <span style={{ color: "#688FAB", fontSize: "14px" }}>Status</span>
        ),
        cell: ({ getValue }) => (
          <Flex alignItems="center" gap="2">
            <CgSandClock style={{ borderRadius: "50%" }} />
            {getValue()}
          </Flex>
        ),
      }),
      columnHelper.accessor("date", {
        id: "date",
        header: () => (
          <span style={{ color: "#688FAB", fontSize: "14px" }}>Date</span>
        ),
        cell: ({ getValue }) =>
          moment(getValue()).format("YYYY/MM/DD hh:mm:ss"),
        size: 250,
      }),
      columnHelper.accessor("expiration", {
        id: "expiration",
        header: () => (
          <span style={{ color: "#688FAB", fontSize: "14px" }}>Expiration</span>
        ),
        cell: ({ getValue }) =>
          moment(getValue()).format("YYYY/MM/DD hh:mm:ss"),
        size: 250,
      }),
      columnHelper.accessor("noRef", {
        id: "noRef",
        header: () => (
          <span style={{ color: "#688FAB", fontSize: "14px" }}>No. Ref.</span>
        ),
        size: 200,
      }),
      columnHelper.accessor("extRef", {
        id: "extRef",
        header: () => (
          <span style={{ color: "#688FAB", fontSize: "14px" }}>Ext. Ref.</span>
        ),
        cell: ({ getValue }) => formatExtRef(getValue()),
        size: 250,
      }),
      columnHelper.display({
        id: "actions",
        cell: () => (
          <IconButton
            aria-label="More"
            icon={<IoIosMore />}
            size="xs"
            variant={"ghost"}
            color="#267ec9"
            borderRadius={"50%"}
            bg={"#EFF5FB"}
          />
        ),
        size: 0,
      }),
    ],
    []
  );

  return { columns, data: filteredData, count: filteredData.length };
};
