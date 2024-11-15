import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./ColumnHeader";
import { AuctionHistorySchema } from "@/lib/validation/types";

export function columns(): ColumnDef<AuctionHistorySchema>[] {
  return [
    {
      accessorKey: "event",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="Event"
        />
      ),
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          <span className="capitalize">{row.original.event}</span>
        </div>
      ),
    },
    {
      accessorKey: "amount",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="Amount"
        />
      ),
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          <span>{row.original.amount ? row.original.amount.toLocaleString() : "0"}</span>
        </div>
      ),
    },
    {
      accessorKey: "address",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="Address"
        />
      ),
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          <span className="font-medium">{row.original.address}</span>
        </div>
      ),
    },
    {
      accessorKey: "loanId",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="Loan ID"
        />
      ),
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          <span className="font-medium">{row.original.loanId}</span>
        </div>
      ),
    },
    {
      accessorKey: "date",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="Date"
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