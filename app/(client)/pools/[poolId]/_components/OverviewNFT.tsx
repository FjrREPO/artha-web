import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Info, DollarSign, Lock } from 'lucide-react'
import Image from 'next/image'
import { AccountPositionSchema, AlchemyNftSchema, PoolSchema } from '@/lib/validation/types'
import { useMemo } from 'react'
import { usePriceOracle } from '@/hooks/contract/usePriceOracle'
import { formatAddress } from '@/lib/utils'

interface Props {
    nftData?: AlchemyNftSchema
    filteredPosition?: AccountPositionSchema
    filteredData?: PoolSchema
}

export const OverviewNFT = ({ nftData, filteredPosition, filteredData }: Props) => {
    const { priceOracle } = usePriceOracle(filteredData?.oracle as HexAddress, filteredPosition?.tokenId as string)

    const totalBorrowed = (filteredPosition?.borrowShares ?? 0)/1e6;
    const maxBorrow = useMemo(() =>
        parseInt(filteredData?.ltv as string) * (priceOracle as number) / 1e8!,
        [filteredData, priceOracle]
    );
    const borrowUtilization = totalBorrowed ? (totalBorrowed / maxBorrow) * 100 : 0;

    const collateralValue = parseInt(priceOracle?.toString() ?? '0')/1e8;
    const liquidationValue = filteredData?.lth ?? 0;
    const isCollateralSafe = collateralValue > (totalBorrowed * (1 + parseInt(liquidationValue || '0') / 100));

    return (
        <div className="space-y-4">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">NFT Details</CardTitle>
                    <Info className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="flex items-center">
                        {nftData?.contract.openSeaMetadata.imageUrl && (
                            <Image
                                src={nftData.contract.openSeaMetadata.imageUrl}
                                alt={nftData.name ?? 'NFT Image'}
                                className="w-16 h-16 rounded-md mr-4 object-cover"
                                width={96}
                                height={96}
                            />
                        )}
                        <div>
                            <p className="text-lg font-bold">{nftData?.name}</p>
                            <p className="text-xs text-muted-foreground">
                                Collection: {nftData?.collection?.name ?? 'N/A'}
                            </p>
                            <p className="text-xs text-muted-foreground">
                                Pool: {formatAddress(filteredData?.id as string, 6) ?? 'N/A'}
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Debt Details</CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-xs text-muted-foreground">Total Borrowed</p>
                            <p className="font-bold">
                                ${totalBorrowed.toLocaleString()}
                            </p>
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground">Max Borrow Limit</p>
                            <p className="font-bold">
                                ${maxBorrow.toLocaleString()}
                            </p>
                        </div>
                        <div className="col-span-2 mt-2">
                            <p className="text-xs text-muted-foreground">Borrow Utilization</p>
                            <div className="flex items-center">
                                <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                                    <div
                                        className={`h-2.5 rounded-full ${
                                            borrowUtilization < 50
                                                ? 'bg-green-500'
                                                : borrowUtilization < 80
                                                ? 'bg-yellow-500'
                                                : 'bg-red-500'
                                        }`}
                                        style={{ width: `${borrowUtilization}%` }}
                                    />
                                </div>
                                <span className="text-xs font-medium">
                                    {borrowUtilization.toFixed(1)}%
                                </span>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Collateral Status</CardTitle>
                    <Lock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-xs text-muted-foreground">Collateral Value</p>
                            <p className="font-bold">
                                ${collateralValue.toLocaleString()}
                            </p>
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground">Liquidation Threshold</p>
                            <p className="font-bold">
                                {liquidationValue}%
                            </p>
                        </div>
                        <div className="col-span-2">
                            <Badge
                                variant={isCollateralSafe ? "default" : "destructive"}
                            >
                                {isCollateralSafe ? "Collateral Safe" : "At Risk"}
                            </Badge>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};