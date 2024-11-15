import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { Button } from "../../../ui/button";
import SkeletonWrapper from "@/components/loader/SkeletonWrapper";
import { Label } from "@/components/ui/label";
import { PoolSchema } from "@/lib/validation/types";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  handleRefresh: () => void;
  isLoading: boolean;
}

export function DataTable<TData extends PoolSchema, TValue>({
  columns,
  data,
  handleRefresh,
  isLoading,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data: data || [],
    columns,
    state: {
      sorting,
      columnFilters,
    },
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 6,
      },
    },
  });

  return (
    <div className="z-10">
      <div className="flex flex-wrap items-end justify-between gap-2 mb-4 z-10">
        <div className="flex flex-wrap justify-between w-full items-center gap-2">
          <Label className="text-2xl font-normal">Top Pool</Label>
          <div className="flex gap-2">
            <Button onClick={handleRefresh} variant={"default"}>Refresh Table</Button>
            <Button variant={"default"} onClick={() => window.location.href = '/pool'}>See All</Button>
          </div>
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header, headerIndex) => {
                  return (
                    <TableHead
                      key={header.id}
                      className={`${headerIndex === 0
                          ? 'flex justify-start'
                          : headerIndex === headerGroup.headers.length - 1
                            ? 'flex justify-end'
                            : 'justify-center'
                        }`}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  onClick={() => window.location.href = `/pool/${row.original.id}`}
                  className="cursor-pointer"
                >
                  {row.getVisibleCells().map((cell, cellIndex) => (
                    <TableCell
                      key={cell.id}
                      className={`${cellIndex === 0
                        ? 'flex justify-start'
                        : cellIndex === row.getVisibleCells().length - 1
                          ? 'flex justify-end'
                          : 'justify-center'
                        }`}
                    >
                      <SkeletonWrapper isLoading={isLoading}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </SkeletonWrapper>
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  Data not found, please connect wallet or make a transaction first.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
