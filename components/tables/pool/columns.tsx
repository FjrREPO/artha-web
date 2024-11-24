import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./ColumnHeader";
import { CoinImage } from "@/components/coin/CoinImage";
import { PoolSchema } from "@/lib/validation/types";
import { CoinSymbol } from "@/components/coin/CoinSymbol";
import { formatCurrency } from "@/lib/utils";

export function columns(): ColumnDef<PoolSchema>[] {
  return [
    {
      accessorKey: "collateral",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Collateral" />
      ),
      cell: ({ row }) => {
        console.log(row.original.collateralToken.collateralToken)
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
          <span>{formatCurrency((row.original.totalSupplyAssets ?? 0)/1e6)}</span>
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
            <span>{(lendAPR/1e16).toFixed(2)}%</span>
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
            <span>{row.original.borrowRate!/1e16}%</span>
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