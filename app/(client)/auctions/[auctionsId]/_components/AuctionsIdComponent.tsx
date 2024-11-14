"use client"

import { CoinImage } from '@/components/coin/CoinImage';
import { CoinSymbol } from '@/components/coin/CoinSymbol';
import SkeletonWrapper from '@/components/loader/SkeletonWrapper';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { formatAddress } from '@/lib/utils';
import { AuctionsDataSchema } from '@/lib/validation/types';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import React from 'react'

export default function AuctionsIdComponent({ auctionsId }: { auctionsId: string }) {
    const { data, isLoading } = useQuery<{ data: AuctionsDataSchema[] }>({
        queryKey: ["auctions"],
        queryFn: async () => {
            const response = await fetch('https://gist.githubusercontent.com/FjrREPO/2aa775ebc0f289f660457d5c0607218d/raw/b5b83d948c291e9650ac4953109991730c88b532/auctions.json');
            return response.json();
        },
        refetchInterval: 60000,
    });

    const findDataById = data?.data.find((nft: AuctionsDataSchema) => nft.id === auctionsId);

    return (
        <div className='flex flex-row flex-wrap justify-between w-full'>
            <SkeletonWrapper isLoading={isLoading}>
                <Card>
                    <CardContent className='flex flex-col gap-5 px-5 py-10'>
                        <div className='flex flex-col gap-1'>
                            <Label className='text-gray-500 dark:text-gray-400'>NFT Asset</Label>
                            <Label className='text-2xl font-bold'>{findDataById?.loanId}</Label>
                        </div>
                        <Image
                            src={findDataById?.image || 'https://i.pinimg.com/736x/61/18/3f/61183fdc4b0ffa73b7acb27cea5f3a01.jpg'}
                            alt='NFT'
                            width={300}
                            height={300}
                            className="rounded-lg mb-4 max-w-sm w-full aspect-square object-cover shadow-xl shadow-blue-500/50"
                        />
                        <div className='flex flex-col gap-3'>
                            <Label className='text-gray-500 dark:text-gray-400'>Owner</Label>
                            <Label>{formatAddress(findDataById?.nftAsset.nftItemInfo.ownerAddress || "", 6)}</Label>
                        </div>
                    </CardContent>
                </Card>
            </SkeletonWrapper>
            <SkeletonWrapper isLoading={isLoading}>
                <Card>
                    <CardContent className='flex flex-col gap-5 px-5 py-10'>
                        <div className='flex flex-col gap-1'>
                            <Label className='text-gray-500 dark:text-gray-400'>Available to Auction</Label>
                            <Label className='text-2xl font-bold'>Auciton Details</Label>
                        </div>
                        <Separator className='h-1 rounded-full' />
                        <div>
                            <div className='flex flex-col gap-3'>
                                <Label className='text-gray-500 dark:text-gray-400'>Highest bid</Label>
                                <Label>0</Label>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <Label className='text-gray-500 dark:text-gray-400'>First bid bonus</Label>
                                <div className='flex flex-row gap-2 items-center'>
                                    <CoinImage symbol={"USDC"} className='w-3 h-3'/>
                                    <Label>0 <CoinSymbol address='0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48' /></Label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-col gap-3'>
                                <Label className='text-gray-500 dark:text-gray-400'>Owner</Label>
                                <Label>{formatAddress(findDataById?.nftAsset.nftItemInfo.ownerAddress || "", 6)}</Label>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </SkeletonWrapper>
            <SkeletonWrapper isLoading={isLoading}>
                <Card>
                    <CardContent className='flex flex-col gap-5 px-5 py-10'>
                        <div className='flex flex-col gap-1'>
                            <Label className='text-gray-500 dark:text-gray-400'>NFT Asset</Label>
                            <Label className='text-2xl font-bold'>{findDataById?.loanId}</Label>
                        </div>
                        <Image
                            src={findDataById?.image || 'https://i.pinimg.com/736x/61/18/3f/61183fdc4b0ffa73b7acb27cea5f3a01.jpg'}
                            alt='NFT'
                            width={300}
                            height={300}
                            className="rounded-lg mb-4 max-w-sm w-full aspect-square object-cover shadow-xl shadow-blue-500/50"
                        />
                        <div>
                            <div className='flex flex-col gap-3'>
                                <Label className='text-gray-500 dark:text-gray-400'>Owner</Label>
                                <Label>{formatAddress(findDataById?.nftAsset.nftItemInfo.ownerAddress || "", 6)}</Label>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </SkeletonWrapper>
        </div>
    )
}