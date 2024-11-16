import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./ColumnHeader";
import { EarnSchema, PoolSchema } from "@/lib/validation/types";
import { CoinImage } from "@/components/coin/CoinImage";
import { CoinSymbol } from "@/components/coin/CoinSymbol";
import SkeletonWrapper from "@/components/loader/SkeletonWrapper";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

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
      accessorKey: "curator",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="Curator"
        />
      ),
      cell: ({ row }) => {
        const openExplorer = () => {
          window.open("https://sepolia.basescan.org/address/" + row.original.curator, '_blank', 'noopener noreferrer');
        };
        return (
          <div>
            <Label>{row.original.curator}</Label>
            <Button
              variant="ghost"
              size="icon"
              onClick={openExplorer}
              className="shrink-0"
              aria-label="View in explorer"
            >
              <ExternalLink className="h-4 w-4 text-gray-500" />
            </Button>
          </div>
        )
      },
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
                const findPoolById = dataPool && dataPool.find((datPool) => datPool.MockArthaEvent_id === pool);
                return (
                  <div
                    key={pool}
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
      accessorKey: "allocations",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="Allocations"
          className="justify-end"
        />
      ),
      cell: ({ row }) => (
        <div className="flex flex-wrap gap-1 justify-end">
          {row.original.allocations.map((allocation, index) => (
            <span
              key={index}
              className="px-2 py-0.5 text-sm"
            >
              {allocation}%
            </span>
          ))}
        </div>
      ),
    },
  ];
}