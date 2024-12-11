import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./ColumnHeader";
import { CoinImage } from "@/components/coin/CoinImage";
import { PoolSchema } from "@/lib/validation/types";
import { CoinSymbol } from "@/components/coin/CoinSymbol";
import { formatNumberWithDots } from "@/lib/utils";
import { normalize } from "@/lib/helper/bignumber";

export function columns(): ColumnDef<PoolSchema>[] {
  return [
    {
      accessorKey: "collateral",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Collateral" />
      ),
      cell: ({ row }) => {
        return (
        <div className="flex items-center gap-2">
          <CoinImage address={row.original.collateralToken.collateralToken || ""} />
          <CoinSymbol address={row.original.collateralAddress || ""} />
        </div>
      )},
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
              <CoinImage address={row.original.loanToken.loanToken || ""} />
              <CoinSymbol address={row.original.loanToken.loanToken || ""} />
            </>
          ) : (
            <span>No Token</span>
          )}
        </div>
      ),
    },
    {
      accessorKey: "Total Supplied",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="Total Supplied"
        />
      ),
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          <span>{formatNumberWithDots(Number(normalize(row.original.totalSupplyAssets ?? 0, 6)))}</span>
        </div>
      )
    },
    {
      accessorKey: "Lend APR",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="Lend APR"
        />
      ),
      cell: ({ row }) => {
        const lendAPR = (row.original.borrowRate! ?? 0) * (row.original.totalBorrowAssets! ?? 0) / (row.original.totalSupplyAssets! ?? 0)
        return (
          <div className="flex items-center gap-2">
            <span>{Number(normalize(lendAPR, 16)).toFixed(2)}%</span>
          </div>
        )
      }
    },
    {
      accessorKey: "Borrow APR",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="Borrow APR"
          className="justify-center"
        />
      ),
      cell: ({ row }) => {
        return (
          <div className="flex items-center gap-2 justify-center">
            <span>{normalize(row.original.borrowRate ?? 0, 16)}%</span>
          </div>
        )
      }
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
      cell: ({ row }) => {
        const utilizationRate = (row.original.totalBorrowAssets! ?? 0) / (row.original.totalSupplyAssets! ?? 0)
        return (
          <div className="flex items-center gap-2 justify-end">
            <span>{(utilizationRate*100).toFixed(2)}%</span>
          </div>
        )
      }
    }
  ];
}