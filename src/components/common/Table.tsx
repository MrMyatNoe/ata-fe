import "./table.css";

import { Box } from "@chakra-ui/react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { useTableData } from "../../hooks/useTableData";
import { Data } from "../../types/Data";
import RowDetail from "./RowDetail";
import { customFilter } from "./Table.utils";
import TableHeader from "./TableHeader";

export function Table() {
  const { data, columns } = useTableData();
  const table = useReactTable<Data>({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    filterFns: {
      fuzzy: customFilter,
    },
    globalFilterFn: customFilter, //TODO - globalFilterFn
    getRowCanExpand: () => true,
  });
  return (
    <Box flex="1" overflow="auto">
      <table style={{ overflow: "auto" }}>
        <thead>
          {table.getHeaderGroups().map((headerGroup: any) => {
            return (
              <tr>
                {headerGroup.headers.map((header: any) => {
                  return <TableHeader header={header} />;
                })}
              </tr>
            );
          })}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row: any) => {
            return (
              <>
                <tr>
                  {row.getVisibleCells().map((cell: any) => {
                    return (
                      <td key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    );
                  })}
                </tr>
                {row.getIsExpanded() && (
                  <tr>
                    <td colSpan={row.getVisibleCells().length}>
                      <RowDetail data={row.original} />
                    </td>
                  </tr>
                )}
              </>
            );
          })}
        </tbody>
      </table>
    </Box>
  );
}
