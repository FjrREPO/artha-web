import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./ColumnHeader";
import { CoinImage } from "@/components/coin/CoinImage";
import Image from "next/image";
import { Label } from "@/components/ui/label";

const formatPercent = (value: number | null) => {
  return value !== null ? `${value.toFixed(2)}%` : 'N/A';
};

export function columns(): ColumnDef<Vault>[] {
  return [
    {
      id: "lendto",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Lend To" />
      ),
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          <CoinImage symbol={row.original.token.symbol} />
          <span>{row.original.name ?? 'Unknown'}</span>
        </div>
      ),
    },
    {
      id: "lendAPR",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Lend APR" />
      ),
      cell: ({ row }) => (
        <div className="text-right text-green-400">
          {row.original.apr?.netAPR !== undefined ? 
            formatPercent(row.original.apr.netAPR) : 
            'N/A'
          }
        </div>
      ),
    },
    {
      id: "amountSupplied",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Amt. Supplied" />
      ),
      cell: ({ row }) => (
        <div className="text-right">
          <div>
            {row.original.tvl?.totalAssets ? (
              `${row.original.tvl.totalAssets} ${row.original.token?.symbol ?? ''}`
            ) : (
              'N/A'
            )}
          </div>
        </div>
      ),
    },
    {
      id: "maxAllocation",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Max Allocation" />
      ),
      cell: () => (
        <div className="text-right">
          No Limit
        </div>
      ),
    },
    {
      id: "oracle",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Oracle" />
      ),
      cell: () => {
        return (
          <div className="text-right flex flex-row gap-1">
            <Image src={"https://v2.sturdy.finance/_next/static/media/chainlink.eb1a4e56.svg"} className="bg-white rounded-full p-1 w-5 h-5" alt="Chainlink" width={20} height={20} />
            <Label className='text-[11px]'>Chainlink</Label>
          </div>
        );
      },
    },
  ];
}