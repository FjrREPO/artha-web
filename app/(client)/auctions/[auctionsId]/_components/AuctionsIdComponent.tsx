"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { formatAddress } from '@/lib/utils'
import { AuctionApiSchema } from '@/lib/validation/types'
import { getAllAuction } from '@/actions/get-all-auction'

import {
    Clock,
    Gavel,
    Trophy,
    Coins,
    AlertTriangle,
    ArrowUpRight
} from 'lucide-react'

import {
    Card,
    CardContent
} from '@/components/ui/card'
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger
} from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from '@/components/ui/tooltip'
import { Separator } from '@/components/ui/separator'

import SkeletonWrapper from '@/components/loader/SkeletonWrapper'
import { CoinImage } from '@/components/coin/CoinImage'
import { CoinSymbol } from '@/components/coin/CoinSymbol'
import { TableAuctionHistory } from './TableAuctionHistory'

const formatCurrency = (value: number, decimals: number = 2) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
    }).format(value)
}

const AuctionTimer = ({ endTime }: { endTime: string }) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            const difference = new Date(endTime).getTime() - now.getTime();

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / 1000 / 60) % 60);
                const seconds = Math.floor((difference / 1000) % 60);

                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [endTime]);

    return (
        <div className="bg-gradient-to-br from-primary/10 to-primary/20 rounded-lg p-4 flex items-center justify-between shadow-sm">
            <div className="flex items-center space-x-2">
                <Clock className="text-primary w-6 h-6 animate-pulse" />
                <span className="font-semibold text-lg">Auction Ending In</span>
            </div>
            <div className="flex space-x-2">
                {Object.entries(timeLeft).map(([unit, value]) => (
                    <div key={unit} className="flex flex-col items-center">
                        <div className="bg-white/50 rounded-md p-2 min-w-[50px] text-center border border-primary/10">
                            <span className="text-2xl font-bold text-primary">{value.toString().padStart(2, '0')}</span>
                        </div>
                        <span className="text-xs uppercase text-muted-foreground mt-1">{unit}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

const BidInput = ({
    minBid,
    balance,
    onBidChange,
    onMaxBid
}: {
    minBid: number,
    balance: number,
    onBidChange: (value: string) => void,
    onMaxBid: () => void
}) => {
    return (
        <div className="space-y-3">
            <div className="flex justify-between text-sm text-muted-foreground">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>Minimum Bid</TooltipTrigger>
                        <TooltipContent>
                            The lowest acceptable bid amount
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <span>Balance: {formatCurrency(balance)}</span>
            </div>
            <div className="flex items-center space-x-2">
                <div className="relative flex-grow">
                    <input
                        type="number"
                        placeholder={`Min. ${formatCurrency(minBid)}`}
                        onChange={(e) => onBidChange(e.target.value)}
                        className="w-full p-2 border rounded-2xl px-2 focus:ring-2 focus:ring-primary pl-8"
                    />
                    <Coins className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                </div>
                <Button
                    variant="outline"
                    onClick={onMaxBid}
                    className="px-4 border-primary text-primary border-2 hover:bg-primary/10"
                >
                    Max
                </Button>
            </div>
        </div>
    )
}

export default function AuctionDetailComponent({
    auctionsId
}: {
    auctionsId: string
}) {
    const { auctionData, auctionLoading } = getAllAuction();
    const [bidAmount, setBidAmount] = useState('');

    const auctionDetails = auctionData?.find(
        (nft: AuctionApiSchema) => nft.position.id === auctionsId
    );

    const handleBidChange = (value: string) => {
        setBidAmount(value);
    }

    const handleMaxBid = () => {
        console.log('Max bid clicked');
    }

    const handlePlaceBid = () => {
        console.log('Placing bid:', bidAmount);
    }

    const endTime = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();

    return (
        <div className="container mx-auto grid md:grid-cols-3 gap-6">
            <div className="md:col-span-1 space-y-6">
                <AuctionTimer endTime={endTime} />

                <Card className="border-2 border-main-1/10 hover:border-main-1/50 transition-all duration-300">
                    <CardContent className="p-2">
                        <SkeletonWrapper isLoading={auctionLoading}>
                            <Image
                                src={auctionDetails?.nftData.contract.openSeaMetadata.imageUrl || '/img/placeholder-nft.jpg'}
                                alt="NFT Asset"
                                width={500}
                                height={500}
                                className="w-full aspect-square object-cover rounded-2xl"
                            />
                        </SkeletonWrapper>
                        <SkeletonWrapper isLoading={auctionLoading}>
                            <div className="p-4 space-y-3">
                                <div className="flex justify-between items-center">
                                    <Badge variant="outline" className="flex items-center space-x-1">
                                        <Trophy className="w-4 h-4 text-yellow-500" />
                                        <span>Rare Asset</span>
                                    </Badge>
                                    <div className="text-sm text-muted-foreground flex items-center space-x-1">
                                        <Coins className="w-4 h-4" />
                                        <span>Floor Price</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="flex flex-row gap-2 items-center font-semibold text-lg">
                                        <CoinImage address={auctionDetails?.position.pool.loanToken.loanToken} />
                                        <CoinSymbol address={auctionDetails?.position.pool.loanToken.loanToken || ""} />
                                    </span>
                                    <span className="font-bold text-primary">
                                        {formatCurrency(parseInt(auctionDetails?.floorPrice || "0") / 1e6)}
                                    </span>
                                </div>
                            </div>
                        </SkeletonWrapper>
                    </CardContent>
                </Card>
            </div>

            <div className="md:col-span-2 space-y-6">
                <Card>
                    <CardContent className="p-6 space-y-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-bold flex items-center space-x-2">
                                <Gavel className="w-6 h-6 text-primary" />
                                <span>Auction Details</span>
                            </h2>
                            <Progress
                                value={60}
                                className="w-1/3 bg-primary/20"
                            />
                        </div>
                        <Separator className='my-4' />
                        <div className="grid md:grid-cols-2 gap-4">
                            <SkeletonWrapper isLoading={auctionLoading}>
                                <div>
                                    <h3 className="text-muted-foreground mb-2">Current Highest Bid</h3>
                                    <div className="flex items-center space-x-2">
                                        <span className="text-2xl font-bold text-primary">0 USDC</span>
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger>
                                                    <ArrowUpRight className="text-green-500" />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    No bids placed yet
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </div>
                                </div>
                            </SkeletonWrapper>
                            <SkeletonWrapper isLoading={auctionLoading}>
                                <div>
                                    <h3 className="text-muted-foreground mb-2">Owner</h3>
                                    <div className="flex items-center space-x-2">
                                        <span className="font-semibold">
                                            {auctionDetails && formatAddress((auctionDetails?.position.account.id as string), 4)}
                                        </span>
                                    </div>
                                </div>
                            </SkeletonWrapper>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-6">
                        <SkeletonWrapper isLoading={auctionLoading}>
                            <BidInput
                                minBid={parseInt(auctionDetails?.floorPrice || "0") / 1e6}
                                balance={100}
                                onBidChange={handleBidChange}
                                onMaxBid={handleMaxBid}
                            />
                        </SkeletonWrapper>
                        <Separator className="my-4" />
                        <SkeletonWrapper isLoading={auctionLoading}>
                            <Button
                                onClick={handlePlaceBid}
                                className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                            >
                                Place Bid
                            </Button>
                        </SkeletonWrapper>
                    </CardContent>
                </Card>

                <div className="md:col-span-2 space-y-6">
                    <Card>
                        <CardContent className="p-6 space-y-4">
                            <SkeletonWrapper isLoading={auctionLoading}>
                                <TableAuctionHistory />
                            </SkeletonWrapper>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}