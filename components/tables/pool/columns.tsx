import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./ColumnHeader";
import Image from "next/image";
import { CoinImage } from "@/components/coin/CoinImage";
import { formatCurrency, formatPercent } from "@/lib/utils";


export function columns(): ColumnDef<Vault>[] {
  return [
    {
      id: "collateral",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Collateral" />
      ),
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          <CoinImage symbol={row.original.token.symbol} />
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
      id: "totalSupplied",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Total Supplied" />
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
          <div className="text-sm text-gray-400">
            {row.original.tvl?.tvl !== undefined ? 
              formatCurrency(row.original.tvl.tvl) : 
              'N/A'
            }
          </div>
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
      id: "collateralAPY",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Collateral APY" />
      ),
      cell: ({ row }) => (
        <div className="text-right">
          <div className="text-gray-400">
            Max APY: {
              row.original.apr?.forwardAPR?.composite?.v3OracleCurrentAPR !== undefined ?
              formatPercent(row.original.apr.forwardAPR.composite.v3OracleCurrentAPR) :
              'N/A'
            }
          </div>
          <div className="text-green-400">
            {row.original.apr?.forwardAPR?.composite?.v3OracleStratRatioAPR !== undefined ?
              formatPercent(row.original.apr.forwardAPR.composite.v3OracleStratRatioAPR) :
              'N/A'
            }
          </div>
        </div>
      ),
    },
    {
      id: "borrowAPR",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Borrow APR" />
      ),
      cell: ({ row }) => (
        <div className="text-right text-yellow-500">
          {row.original.apr?.fees?.performance !== undefined ?
            formatPercent(row.original.apr.fees.performance) :
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