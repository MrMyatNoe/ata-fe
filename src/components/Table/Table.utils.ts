import { rankItem } from "@tanstack/match-sorter-utils";
import { FilterFn } from "@tanstack/react-table";

import { Data } from "../../types/Data";

export const customFilter: FilterFn<Data> = (
  rows,
  columnId,
  value,
  addMeta
) => {
  const itemRank = rankItem(rows.getValue(columnId), value);
  addMeta({ itemRank });
  return itemRank.passed;
};
