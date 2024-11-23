import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Info, DollarSign, Lock } from 'lucide-react'
import Image from 'next/image'
import { AlchemyNftSchema } from '@/lib/validation/types'

interface Props {
    nftData?: AlchemyNftSchema
}

export const OverviewNFT = ({ nftData }: Props) => {
    const totalBorrowed = 2
    const maxBorrowLimit = 3
    const borrowUtilization = totalBorrowed ? (totalBorrowed / maxBorrowLimit) * 100 : 0

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
                                src={nftData?.contract.openSeaMetadata.imageUrl}
                                alt={nftData.name}
                                className="w-16 h-16 rounded-md mr-4 object-cover"
                                width={96}
                                height={96}
                            />
                        )}
                        <div>
                            <p className="text-lg font-bold">{nftData?.name}</p>
                            <p className="text-xs text-muted-foreground">
                                Collection: {nftData?.collection?.name}
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
                                ${maxBorrowLimit.toLocaleString()}
                            </p>
                        </div>
                        <div className="col-span-2 mt-2">
                            <p className="text-xs text-muted-foreground">Borrow Utilization</p>
                            <div className="flex items-center">
                                <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                                    <div
                                        className={`h-2.5 rounded-full ${borrowUtilization < 50
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

            {/* Collateral Details */}
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
                                $1
                            </p>
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground">Liquidation Threshold</p>
                            <p className="font-bold">
                                1%
                            </p>
                        </div>
                        <div className="col-span-2">
                            <Badge
                                variant={"default"}
                            >
                                Collateral Safe
                            </Badge>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
