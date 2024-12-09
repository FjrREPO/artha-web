"use client"

import React, { useState, useEffect, useMemo } from 'react'
import Image from 'next/image'
import { formatAddress } from '@/lib/utils'
import { AuctionApiSchema } from '@/lib/validation/types'
import { getAllAuction } from '@/actions/get-all-auction'

import {
    Clock,
    Gavel,
    Trophy,
    Coins,
    ArrowUpRight,
    AlertTriangle
} from 'lucide-react'

import {
    Card,
    CardContent
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from '@/components/ui/tooltip'
import { Separator } from '@/components/ui/separator'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

import SkeletonWrapper from '@/components/loader/SkeletonWrapper'
import { CoinImage } from '@/components/coin/CoinImage'
import { CoinSymbol } from '@/components/coin/CoinSymbol'
import { TableAuctionHistory } from './TableAuctionHistory'
import useBids from '@/hooks/graphql/useBids'
import { useBid } from '@/hooks/contract/useBid'
import { useBalance } from '@/hooks/contract/useBalance'
import { useAccount } from 'wagmi'
import SuccessDialog from '@/components/dialog/SuccessDialog'
import { LoadingTransaction } from '@/components/loader/LoadingTransaction'
import { WarningConnectWallet } from '@/components/web3/warning-connect-wallet'
import { BidInput } from './BidInput'
import { AuctionTimer } from './AuctionTimer'

export default function AuctionDetailComponent({
    auctionsId
}: {
    auctionsId: string
}) {
    const { address } = useAccount()
    const { auctionData, auctionLoading } = getAllAuction();
    const { bidsData, bidsLoading } = useBids();
    const [bidAmount, setBidAmount] = useState('');
    const [showSuccessDialog, setShowSuccessDialog] = useState(false);
    const [bidError, setBidError] = useState<string | null>(null);

    const auctionDetails = useMemo(() =>
        auctionData?.find((nft: AuctionApiSchema) => nft.id === auctionsId),
        [auctionData, auctionsId]
    );

    const {
        balance,
        balanceLoading,
        balanceError
    } = useBalance(
        address as HexAddress || '',
        auctionDetails?.loanAddress as HexAddress || ''
    );

    const filterBids = useMemo(() =>
        auctionDetails && bidsData?.filter((bid) => bid.poolId === auctionDetails?.poolId),
        [auctionDetails, bidsData]
    );

    const findHighestBid = useMemo(() => {
        if (!auctionDetails || !filterBids) return null;
        return filterBids.reduce((prev, current) => {
            const prevAmount = typeof prev.amount === 'string' ? parseFloat(prev.amount) : prev.amount;
            const currentAmount = typeof current.amount === 'string' ? parseFloat(current.amount) : current.amount || 0;
            return (prevAmount ?? 0 > currentAmount) ? prev : current;
        }, { amount: '0' });
    }, [filterBids]);

    const {
        bidHash,
        isBidPending,
        isBidConfirming,
        isBidConfirmed,
        bidError: bidSubmissionError,
        handleBid
    } = useBid()

    const startTime = auctionDetails && auctionDetails.createdAt
    const endTime = startTime
        ? new Date(new Date(startTime).getTime() + 24 * 60 * 60 * 1000).toISOString()
        : ''
    const [isAuctionEnded, setIsAuctionEnded] = useState(false);

    useEffect(() => {
        const checkAuctionEnd = () => {
            const now = new Date();
            const end = new Date(endTime);
            setIsAuctionEnded(now > end);
        };

        checkAuctionEnd();
        const timer = setInterval(checkAuctionEnd, 1000);
        return () => clearInterval(timer);
    }, [endTime]);

    const handleBidChange = (value: string) => {
        const numericValue = parseFloat(value);
        const minBid = parseInt(auctionDetails?.debt || "0") / 1e6;
        const maxBalance = balance ? (Number(balance || 0) / 1e18) : 0;

        if (isNaN(numericValue)) {
            setBidError("Please enter a valid number");
            setBidAmount('');
            return;
        }

        if (numericValue < minBid) {
            setBidError(`Bid must be at least ${minBid.toFixed(2)} USDC`);
        } else if (numericValue > maxBalance) {
            setBidError("Insufficient balance");
        } else {
            setBidError(null);
        }

        setBidAmount(value);
    }

    const handleMaxBid = () => {
        const maxBalance = balance ? (Number(balance || 0) / 1e18) : 0;
        setBidAmount(maxBalance.toString());
        setBidError(null);
    }

    const handlePlaceBid = () => {
        const numericBid = parseFloat(bidAmount);
        const minBid = parseInt(auctionDetails?.debt || "0") / 1e6;
        const maxBalance = balance ? (Number(balance || 0) / 1e18) : 0;

        if (isAuctionEnded) {
            setBidError("Auction has ended");
            return;
        }

        if (isNaN(numericBid)) {
            setBidError("Please enter a valid number");
            return;
        }

        if (numericBid < minBid) {
            setBidError(`Bid must be at least ${minBid.toFixed(2)} USDC`);
            return;
        }

        if (numericBid > maxBalance) {
            setBidError("Insufficient balance");
            return;
        }

        handleBid(auctionDetails?.poolId || '', auctionDetails?.tokenId || '', bidAmount);
    }

    useEffect(() => {
        if (bidHash && isBidConfirmed) {
            setShowSuccessDialog(true);
            setBidAmount('');
            setBidError(null);
        }
    }, [bidHash, isBidConfirmed]);

    if (balanceError) {
        return (
            <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Balance Error</AlertTitle>
                <AlertDescription>
                    Unable to fetch balance. Please try again later.
                </AlertDescription>
            </Alert>
        );
    }

    if (bidSubmissionError) {
        return (
            <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Bid Submission Error</AlertTitle>
                <AlertDescription>
                    {bidSubmissionError.message}
                </AlertDescription>
            </Alert>
        );
    }

    return (
        <>
            {address ? (
                <>
                    {(isBidConfirming || isBidPending) && !isBidConfirmed && (
                        <LoadingTransaction
                            message={isBidConfirming ? "Submitting Bid..." : "Confirming Bid..."}
                        />
                    )}
                    <SuccessDialog
                        isOpen={showSuccessDialog}
                        onClose={() => setShowSuccessDialog(false)}
                        txHash={bidHash as HexAddress || ""}
                        processName="Auction Bid"
                    />

                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="md:col-span-1 space-y-6">
                            <AuctionTimer
                                endTime={endTime}
                                isLoading={auctionLoading || bidsLoading}
                            />

                            <Card className="border-2 border-main-1/10 hover:border-main-1/50 transition-all duration-300">
                                <CardContent className="p-2">
                                    <SkeletonWrapper isLoading={auctionLoading || bidsLoading}>
                                        <Image
                                            src={auctionDetails?.nftImageUrl || '/img/placeholder-nft.jpg'}
                                            alt="NFT Asset"
                                            width={500}
                                            height={500}
                                            className="w-full aspect-square object-cover rounded-2xl"
                                        />
                                    </SkeletonWrapper>

                                    <SkeletonWrapper isLoading={auctionLoading || bidsLoading}>
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
                                                    <CoinImage address={auctionDetails?.loanAddress} />
                                                    <CoinSymbol address={auctionDetails?.loanAddress || ""} />
                                                </span>
                                                <span className="font-bold text-primary">
                                                    {(parseInt(auctionDetails?.floorPrice || "0") / 1e6)}
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
                                    </div>
                                    <Separator className='my-4' />

                                    <div className="flex flex-row justify-between gap-4">
                                        <SkeletonWrapper isLoading={auctionLoading || bidsLoading}>
                                            <div>
                                                <h3 className="text-muted-foreground mb-2">Current Highest Bid</h3>
                                                <div className="flex items-center space-x-2">
                                                    <span className="text-2xl font-bold text-primary">
                                                        {findHighestBid?.amount || 0} USDC
                                                    </span>
                                                    <TooltipProvider>
                                                        <Tooltip>
                                                            <TooltipTrigger>
                                                                <ArrowUpRight className="text-green-500" />
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                {findHighestBid?.amount
                                                                    ? `Highest bid now is ${findHighestBid?.amount} USDC`
                                                                    : "No bids placed yet"}
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                </div>
                                            </div>
                                        </SkeletonWrapper>

                                        <SkeletonWrapper isLoading={auctionLoading || bidsLoading}>
                                            <div>
                                                <h3 className="text-muted-foreground text-right mb-2">Owner</h3>
                                                <div className="flex items-center space-x-2">
                                                    <span className="font-semibold">
                                                        {auctionDetails && formatAddress((auctionDetails?.positionAccount as string), 4)}
                                                    </span>
                                                </div>
                                            </div>
                                        </SkeletonWrapper>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6">
                                    <SkeletonWrapper isLoading={auctionLoading || bidsLoading || balanceLoading}>
                                        <BidInput
                                            minBid={parseInt(auctionDetails?.debt || "0") / 1e6}
                                            balance={balance ? (Number(balance || 0) / 1e18) : 0}
                                            onBidChange={handleBidChange}
                                            onMaxBid={handleMaxBid}
                                            auctionDetails={auctionDetails}
                                            isAuctionEnded={isAuctionEnded}
                                        />
                                    </SkeletonWrapper>

                                    <Separator className="my-4" />

                                    <SkeletonWrapper isLoading={auctionLoading || bidsLoading}>
                                        <Button
                                            onClick={handlePlaceBid}
                                            disabled={isAuctionEnded || !!bidError}
                                            className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 disabled:opacity-50"
                                        >
                                            {isAuctionEnded ? "Auction Closed" : "Place Bid"}
                                        </Button>
                                    </SkeletonWrapper>

                                    {bidError && (
                                        <div className="mt-4 text-red-500 text-sm flex items-center">
                                            <AlertTriangle className="mr-2 h-4 w-4" />
                                            {bidError}
                                        </div>
                                    )}
                                </CardContent>
                            </Card>

                            <div className="md:col-span-2 space-y-6">
                                <Card>
                                    <CardContent className="p-6 space-y-4">
                                        <SkeletonWrapper isLoading={auctionLoading || bidsLoading}>
                                            {auctionDetails && (
                                                <TableAuctionHistory
                                                    bids={filterBids || []}
                                                    auctionDetails={auctionDetails}
                                                    bidsLoading={bidsLoading}
                                                    auctionLoading={auctionLoading}
                                                />
                                            )}
                                        </SkeletonWrapper>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <WarningConnectWallet />
            )}
        </>
    );
}