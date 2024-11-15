import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./ColumnHeader";
import { CoinImage } from "@/components/coin/CoinImage";

export function columns(): ColumnDef<EarnData>[] {
  return [
    {
      id: "asset",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="Asset"
        />
      ),
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          <CoinImage symbol={row.original.lendAsset || ""} />
          <span>{row.original.lendAsset || "Unknown Asset"}</span>
        </div>
      ),
    },
    {
      id: "aggregator",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="Aggregator"
        />
      ),
      cell: ({ row }) => (
        <div>{row.original.aggregatorName || "Unknown Aggregator"}</div>
      ),
    },
    {
      id: "apy",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="APY"
        />
      ),
      cell: ({ row }) => (
        <div className="">
          <div className={row.original.lendAPY === "0%" ? "text-gray-500" : "text-green-500"}>
            {row.original.lendAPY || "APY unavailable"}
          </div>
          {row.original.rewards && row.original.rewards.length > 0 && (
            <div className="text-xs text-gray-500">
              + {row.original.rewards.join(", ")}
            </div>
          )}
        </div>
      ),
    },
    {
      id: "tvl",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="TVL"
        />
      ),
      cell: ({ row }) => (
        <div className="text-right">
          {row.original.tvl.toString() || <span className="text-gray-400">TVL unavailable</span>}
        </div>
      ),
    }
  ];
}