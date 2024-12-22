import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { MdOutlineMoreVert } from "react-icons/md";

import {
  Box,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  Text,
} from "@chakra-ui/react";
import { flexRender, Header } from "@tanstack/react-table";

import { Data } from "../../types/Data";

export type TableHeaderProps = { header: Header<Data, unknown> };
export default function TableHeader({
  header,
}: {
  header: Header<Data, unknown>;
}) {
  const isSorted = header.column.getIsSorted();
  return (
    <th
      style={{ width: header.getSize(), position: "relative" }}
      colSpan={header.colSpan}
    >
      <Menu>
        <Box className="table-headings">
          <Flex justifyContent={"flex-start"} gap={1} alignItems="start">
            <Text fontSize="s">
              {header.isPlaceholder
                ? null
                : flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
            </Text>
            {isSorted && (
              <Box>
                {isSorted === "asc" && <FaChevronUp />}
                {isSorted === "desc" && <FaChevronDown />}
              </Box>
            )}
          </Flex>
          <MenuButton
            as={IconButton}
            aria-label="options"
            icon={<MdOutlineMoreVert />}
            style={{
              color: "black",
              position: "relative",
              top: "-2px",
            }}
            className="menu"
            size="sm"
            colorScheme="black"
          />
          <Portal>
            <MenuList color="black">
              <MenuItem
                fontSize="sm"
                onClick={header.column.getToggleSortingHandler()}
              >
                {isSorted === "asc" ? "Sort Desc" : "Sort Asc"}
              </MenuItem>
            </MenuList>
          </Portal>
        </Box>
      </Menu>
    </th>
  );
}
