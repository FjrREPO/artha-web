import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./ColumnHeader";
import { EarnSchema, PoolSchema } from "@/lib/validation/types";
import { CoinImage } from "@/components/coin/CoinImage";
import { CoinSymbol } from "@/components/coin/CoinSymbol";
import SkeletonWrapper from "@/components/loader/SkeletonWrapper";

export function columns({ dataPool, isLoadingPool }: { dataPool: PoolSchema[], isLoadingPool: boolean }): ColumnDef<EarnSchema>[] {
  return [
    {
      accessorKey: "#",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="#"
        />
      ),
      cell: ({ row }) => (
        <span>{row.index + 1}</span>
      ),
    },
    {
      accessorKey: "Asset",
    },
    {
      accessorKey: "Name",
    },
    {
      accessorKey: "pools",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="Pools"
        />
      ),
      cell: ({ row }) => {
        return (
          <SkeletonWrapper isLoading={isLoadingPool}>
            <div className="flex flex-wrap gap-1">
              {row.original.pools && row.original.pools.map((pool) => {
                const findPoolById = dataPool && dataPool.find((datPool) => datPool.id === pool.id);
                return (
                  <div
                    key={pool.id}
                    className="px-2 py-0.5 text-sm flex flex-row gap-1 items-center"
                  >
                    <CoinImage address={findPoolById?.collateralToken || ""} />
                    <CoinSymbol address={findPoolById?.collateralToken || ""} />
                  </div>
                )
              })}
            </div>
          </SkeletonWrapper>
        )
      },
    },
    {
      accessorKey: "APY",
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