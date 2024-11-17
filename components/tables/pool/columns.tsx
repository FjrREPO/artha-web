import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./ColumnHeader";
import { CoinImage } from "@/components/coin/CoinImage";
import { PoolSchema } from "@/lib/validation/types";
import { CoinSymbol } from "@/components/coin/CoinSymbol";

export function columns(): ColumnDef<PoolSchema>[] {
  return [
    {
      accessorKey: "collateral",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Collateral" />
      ),
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          <CoinImage address={row.original.collateralToken || ""} />
          <CoinSymbol address={row.original.collateralToken || ""} />
        </div>
      ),
    },
    {
      accessorKey: "borrow",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Borrow" />
      ),
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          {row.original.loanToken ? (
            <>
              <CoinImage address={row.original.loanToken || ""} />
              <CoinSymbol address={row.original.loanToken || ""} />
            </>
          ) : (
            <span>No Token</span>
          )}
        </div>
      ),
    },
    {
      accessorKey: "Total Supplied",
    },
    {
      accessorKey: "Lend APR",
    },
    {
      accessorKey: "Borrow APR",
    },
    {
      accessorKey: "Utilization Rate",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="Utilization Rate"
          className="justify-end"
        />
      ),
    }
  ];
}