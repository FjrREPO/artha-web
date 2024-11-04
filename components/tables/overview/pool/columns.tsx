import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./ColumnHeader";
import Image from "next/image";
import { CoinImage } from "@/components/coin/CoinImage";

const formatPercent = (value: number | null) => {
  return value !== null ? `${value.toFixed(2)}%` : 'N/A';
};

export function columns(): ColumnDef<Vault>[] {
  return [
    {
      id: "collateral",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Collateral" />
      ),
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          <span>{row.original.name ?? 'Unknown'}</span>
        </div>
      ),
    },
    {
      id: "borrow",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Borrow" />
      ),
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          {row.original.token ? (
            <>
              <CoinImage symbol={row.original.token.symbol} />
              <span>{row.original.token.symbol}</span>
            </>
          ) : (
            <span>No Token</span>
          )}
        </div>
      ),
    },
    {
      id: "chain",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Chain" />
      ),
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          {row.original.chainID ? (
            <Image 
              src={`https://static.alchemyapi.io/images/emblems/eth-mainnet.svg`} 
              alt={`${(row.original.chainID).toString()} network`} 
              width={24} 
              height={24} 
            />
          ) : (
            <span>Unknown Chain</span>
          )}
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
      id: "utilizationRate",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Utilization Rate" />
      ),
      cell: ({ row }) => {
        const totalAssets = row.original.tvl?.totalAssets;
        const tvl = row.original.tvl?.tvl;
        
        if (!tvl || !totalAssets || isNaN(parseFloat(totalAssets)) || isNaN(parseFloat(tvl.toString()))) {
          return <div className="text-right">N/A</div>;
        }
        
        const utilization = (parseFloat(totalAssets) / parseFloat(tvl.toString())) * 100;
        return (
          <div className="text-right">
            {formatPercent(utilization)}
          </div>
        );
      },
    },
  ];
}