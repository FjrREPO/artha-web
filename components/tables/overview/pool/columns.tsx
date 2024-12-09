import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./ColumnHeader";
import { CoinImage } from "@/components/coin/CoinImage";
import { PoolSchema } from "@/lib/validation/types";
import { CoinSymbol } from "@/components/coin/CoinSymbol";

export function columns(): ColumnDef<PoolSchema>[] {
  return [
    {
      accessorKey: "collateralToken",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Collateral" />
      ),
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          <CoinImage address={row.original.collateralToken.collateralToken || ""} />
          <CoinSymbol address={row.original.collateralToken.collateralToken || ""} />
        </div>
      ),
    },
    {
      accessorKey: "loanToken",
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
      accessorKey: "APY",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="APY"
          className="justify-end"
        />
      ),
    },
    {
      accessorKey: "TVL",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="TVL"
          className="justify-end"
        />
      ),
    }
  ];
}