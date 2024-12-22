import moment from "moment";
import { useMemo, useState } from "react";
import { CgSandClock } from "react-icons/cg";
import { IoIosArrowDown, IoIosArrowForward, IoIosMore } from "react-icons/io";

import { Flex, IconButton } from "@chakra-ui/react";
import { createColumnHelper } from "@tanstack/react-table";

import { Data, dataSamples } from "../types/Data";
import { useMediaBreakpoints } from "./useMediaQuery";

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
  const { isMobile } = useMediaBreakpoints();

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
        cell: ({ getValue }) => (
          <span className="responsive-column account">{getValue()}</span>
        ),
        size: 0,
      }),
      columnHelper.accessor("operation", {
        id: "operation",
        header: () => (
          <span style={{ color: "#688FAB", fontSize: "14px" }}>Operation</span>
        ),
        cell: ({ getValue }) => (
          <span className="responsive-column operation">{getValue()}</span>
        ),
        size: 0,
      }),
      columnHelper.accessor("symbol", {
        id: "symbol",
        header: () => (
          <span style={{ color: "#688FAB", fontSize: "14px" }}>Symbol</span>
        ),
        cell: ({ getValue }) => (
          <span className="responsive-column symbol">{getValue()}</span>
        ),
      }),
      columnHelper.accessor("description", {
        id: "description",
        header: () => (
          <span style={{ color: "#688FAB", fontSize: "14px" }}>
            Description
          </span>
        ),
        cell: ({ getValue }) => (
          <span className="responsive-column description">{getValue()}</span>
        ),
        size: 240,
      }),
      columnHelper.accessor("quantity", {
        id: "quantity",
        header: () => (
          <span style={{ color: "#688FAB", fontSize: "14px" }}>Qty</span>
        ),
        cell: ({ getValue }) => (
          <span className="responsive-column quantity">{getValue()}</span>
        ),
        size: 100,
      }),
      columnHelper.accessor("filledQuantity", {
        id: "filledQuantity",
        header: () => (
          <span style={{ color: "#688FAB", fontSize: "14px" }}>Filled Qty</span>
        ),
        cell: ({ getValue }) => (
          <span className="responsive-column filledQuantity">{getValue()}</span>
        ),
        size: 210,
      }),
      columnHelper.accessor("price", {
        id: "price",
        header: () => (
          <span style={{ color: "#688FAB", fontSize: "14px" }}>Price</span>
        ),
        cell: ({ getValue }) => (
          <span className="responsive-column price">{getValue()}</span>
        ),
        size: 100,
      }),
      columnHelper.accessor("status", {
        id: "status",
        header: () => (
          <span style={{ color: "#688FAB", fontSize: "14px" }}>Status</span>
        ),
        cell: ({ getValue }) => (
          <Flex
            alignItems="center"
            gap="2"
            className="responsive-column status"
          >
            <CgSandClock
              style={{
                borderRadius: "50%",
                color: "#688FAB",
                border: "1px solid #63ABE1",
                padding: "4px",
                fontSize: "22px",
              }}
            />
            {getValue()}
          </Flex>
        ),
      }),
      columnHelper.accessor("date", {
        id: "date",
        header: () => (
          <span style={{ color: "#688FAB", fontSize: "14px" }}>Date</span>
        ),
        cell: ({ getValue }) => (
          <span className="responsive-column date">
            {moment(getValue()).format("YYYY/MM/DD hh:mm:ss")}
          </span>
        ),
        size: 250,
      }),
      columnHelper.accessor("expiration", {
        id: "expiration",
        header: () => (
          <span style={{ color: "#688FAB", fontSize: "14px" }}>Expiration</span>
        ),
        cell: ({ getValue }) => (
          <span className="responsive-column expiration">
            {moment(getValue()).format("YYYY/MM/DD hh:mm:ss")},
          </span>
        ),
        size: 240,
      }),
      columnHelper.accessor("noRef", {
        id: "noRef",
        header: () => (
          <span style={{ color: "#688FAB", fontSize: "14px" }}>No. Ref.</span>
        ),
        cell: ({ getValue }) => (
          <span className="responsive-column noRef">{getValue()}</span>
        ),
        size: 200,
      }),
      columnHelper.accessor("extRef", {
        id: "extRef",
        header: () => (
          <span style={{ color: "#688FAB", fontSize: "14px" }}>Ext. Ref.</span>
        ),
        cell: ({ getValue }) => (
          <span className="responsive-column extRef">
            {formatExtRef(getValue())}
          </span>
        ),
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

  const filteredColumns = useMemo(() => {
    return isMobile
      ? columns.filter(
          (column) =>
            column.id &&
            ["expand", "account", "operation", "symbol", "status"].includes(
              column.id
            )
        )
      : columns;
  }, [columns, isMobile]);

  return {
    columns: filteredColumns,
    data: filteredData,
    count: filteredData.length,
  };
};
