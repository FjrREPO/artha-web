import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./ColumnHeader";
import { AuctionActivitySchema } from "@/lib/validation/types";

export function columns(): ColumnDef<AuctionActivitySchema>[] {
  return [
    {
      accessorKey: "activityType",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="Activity Type"
        />
      ),
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          <span className="capitalize">{row.original.activityType}</span>
        </div>
      ),
    },
    {
      accessorKey: "price",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="Price"
        />
      ),
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          <span>{row.original.price}</span>
        </div>
      ),
    },
    {
      accessorKey: "from",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="From"
        />
      ),
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          <span className="font-medium">{row.original.from}</span>
        </div>
      ),
    },
    {
      accessorKey: "to",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="To"
        />
      ),
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          <span className="font-medium">{row.original.to}</span>
        </div>
      ),
    },
    {
      accessorKey: "date",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="Date"
          className="justify-end"
        />
      ),
      cell: ({ row }) => (
        <div className="text-right">
          <span>{row.original.date}</span>
        </div>
      ),
    }
  ];
}