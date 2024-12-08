"use client"

import { CoinImage } from '@/components/coin/CoinImage';
import { CoinSymbol } from '@/components/coin/CoinSymbol';
import SkeletonWrapper from '@/components/loader/SkeletonWrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { formatAddress } from '@/lib/utils';
import { AuctionsDataSchema } from '@/lib/validation/types';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import React from 'react'
import { TableAuctionHistory } from './TableAuctionHistory';
import { TableAuctionActivity } from './TableAuctionActivity';

export default function AuctionsIdComponent({ auctionsId }: { auctionsId: string }) {
    const { data, isLoading } = useQuery<{ data: AuctionsDataSchema[] }>({
        queryKey: ["auctions"],
        queryFn: async () => {
            const response = await fetch('https://gist.githubusercontent.com/FjrREPO/2aa775ebc0f289f660457d5c0607218d/raw/b5b83d948c291e9650ac4953109991730c88b532/auctions.json');
            return response.json();
        },
        refetchInterval: 600000000,
    });

    const findDataById = data?.data.find((nft: AuctionsDataSchema) => nft.id === auctionsId);

    return (
        <div className='flex flex-col lg:flex-row w-full gap-5 container'>
            <SkeletonWrapper isLoading={isLoading}>
                <Card className='w-full lg:w-2/6'>
                    <CardContent className='flex flex-col gap-5 px-5 py-10'>
                        <div className='flex flex-col gap-5 items-center'>
                            <div className='flex flex-col gap-1'>
                                <Label className='text-textGraycustom'>NFT Asset</Label>
                                <Label className='text-2xl font-bold'>{findDataById?.loanId}</Label>
                            </div>
                            <Image
                                src={findDataById?.image || 'https://i.pinimg.com/736x/61/18/3f/61183fdc4b0ffa73b7acb27cea5f3a01.jpg'}
                                alt='NFT'
                                width={300}
                                height={300}
                                className="rounded-lg mb-4 max-w-sm w-full aspect-square object-cover shadow-xl shadow-blue-500/50"
                            />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <Label className='text-textGraycustom'>Owner</Label>
                            <Label>{findDataById && formatAddress(findDataById?.nftAsset.nftItemInfo.ownerAddress || "", 6)}</Label>
                        </div>
                    </CardContent>
                </Card>
            </SkeletonWrapper>
            <div className='flex flex-col w-full gap-5 lg:w-4/6'>
                <div className='flex flex-col lg:flex-row w-full gap-5'>
                    <SkeletonWrapper isLoading={isLoading}>
                        <Card className='w-full h-fit'>
                            <CardContent className='flex flex-col gap-5 px-5 py-10'>
                                <div className='flex flex-col gap-1'>
                                    <Label className='text-textGraycustom'>Available to Auction</Label>
                                    <Label className='text-2xl font-bold'>Auciton Details</Label>
                                </div>
                                <Separator className='h-1 rounded-full' />
                                <div className='flex flex-col gap-8'>
                                    <div className='flex flex-row justify-between gap-5'>
                                        <div className='flex flex-col gap-3'>
                                            <Label className='text-textGraycustom'>Highest bid</Label>
                                            <div className='flex flex-row gap-2 items-center'>
                                                <CoinImage symbol={"USDC"} className='w-7 h-7' />
                                                <Label>0 <CoinSymbol address='0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48' /></Label>
                                            </div>
                                        </div>
                                        <div className='flex flex-col gap-3'>
                                            <Label className='text-textGraycustom'>First bid bonus</Label>
                                            <div className='flex flex-row gap-2 items-center'>
                                                <CoinImage symbol={"USDC"} className='w-7 h-7' />
                                                <Label>0 <CoinSymbol address='0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48' /></Label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-row flex-wrap justify-between gap-5'>
                                        <div className='flex flex-col gap-3'>
                                            <Label className='text-textGraycustom'>Floor price</Label>
                                            <div className='flex flex-row gap-2 items-center justify-start'>
                                                <CoinImage symbol={"USDC"} className='w-5 h-5' />
                                                <Label>0 <CoinSymbol address='0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48' /></Label>
                                            </div>
                                        </div>
                                        <div className='flex flex-col gap-3 items-center'>
                                            <Label className='text-textGraycustom'>Total debt</Label>
                                            <div className='flex flex-row gap-2 items-center justify-center'>
                                                <CoinImage symbol={"USDC"} className='w-5 h-5' />
                                                <Label>0 <CoinSymbol address='0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48' /></Label>
                                            </div>
                                        </div>
                                        <div className='flex flex-col gap-3'>
                                            <Label className='text-textGraycustom'>Liquidation price</Label>
                                            <div className='flex flex-row gap-2 items-center justify-end'>
                                                <CoinImage symbol={"USDC"} className='w-5 h-5' />
                                                <Label>0 <CoinSymbol address='0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48' /></Label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </SkeletonWrapper>
                    <SkeletonWrapper isLoading={isLoading}>
                        <Card className='w-full h-fit'>
                            <CardContent className='flex flex-col gap-5 px-5 py-10'>
                                <div className='flex flex-col gap-1'>
                                    <Label className='text-textGraycustom'>Get this NFT</Label>
                                    <Label className='text-2xl font-bold'>Place a bid</Label>
                                </div>
                                <Separator className='h-1 rounded-full' />
                                <div className='flex flex-col gap-8'>
                                    <AmountInput />
                                    <Button className='w-full'>Place a bid</Button>
                                </div>
                            </CardContent>
                        </Card>
                    </SkeletonWrapper>
                </div>
                <Card className='w-full'>
                    <CardContent className='p-10'>
                        <Tabs defaultValue="history" className="w-full">
                            <TabsList className='mb-5'>
                                <TabsTrigger value="history">Auction History</TabsTrigger>
                                <TabsTrigger value="activity">NFT Activity</TabsTrigger>
                            </TabsList>
                            <TabsContent value="history">
                                <TableAuctionHistory />
                            </TabsContent>
                            <TabsContent value="activity">
                                <TableAuctionActivity />
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

const AmountInput = () => {
    return (
        <Card className="p-3 border border-gray-200 w-full">
            <div className="flex flex-col relative w-full gap-3">
                <div>
                    <div className="absolute top-1 left-1 text-sm text-gray-500">
                        Amount (Min NaN)
                    </div>
                    <div className="absolute top-1 right-1 text-sm text-gray-500">
                        Balance: --
                    </div>
                </div>
                <div className="flex mt-7 w-full">
                    <Input
                        type="number"
                        placeholder="0"
                        className="text-2xl font-medium border-0 focus-visible:ring-0 focus-visible:ring-offset-0 p-0 h-auto bg-transparent"
                    />
                    <div className="flex items-center gap-2">
                        <Button
                            className="rounded-full text-sm px-4 h-8"
                        >
                            MAX
                        </Button>
                        <div className="flex items-center gap-1">
                            <CoinImage symbol={"USDC"} className="w-5 h-5" />
                            <CoinSymbol address="0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48" className='font-bold' />
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
};