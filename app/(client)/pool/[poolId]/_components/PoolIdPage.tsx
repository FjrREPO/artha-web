"use client"

import InterestRateCurve from '@/components/chart/InterestRateCurve';
import SkeletonWrapper from '@/components/loader/SkeletonWrapper';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TopPoolData from './TopPoolData';
import PoolDetails from './PoolDetails';
import Lend from './Lend';
import { PoolSchema } from '@/lib/validation/types';
import { API_SUBGRAPH } from '@/constants/config';
import { queryPool } from '@/graphql/query';
import request from 'graphql-request';
import SupplyCollateral from './SupplyCollateral';
import { DialogSupplyBorrowRepay } from './DialogSupplyBorrowRepay';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useOwnerNft } from '@/hooks/useOwnerNft';
import { NftImage } from '@/components/nft/NftImage';

type QueryData = {
    pools: PoolSchema[];
};

export default function PoolIdPage({ PoolId }: { PoolId: string }) {
    const { data, isLoading } = useQuery<QueryData>({
        queryKey: ['pool'],
        queryFn: async () => {
            return await request(API_SUBGRAPH, queryPool);
        },
        refetchInterval: 3600000000,
    });

    const filteredData: PoolSchema | undefined = data?.pools?.find((item: PoolSchema) => item.id === PoolId);

    const { nftData, nftLoading } = useOwnerNft()

    return (
        <div>
            <div className='flex flex-col gap-5'>
                <TopPoolData filteredData={filteredData} isLoading={isLoading} />
                <div className='flex flex-col lg:flex-row w-full gap-5'>
                    <div className='flex flex-col w-full gap-5'>
                        <SkeletonWrapper isLoading={isLoading}>
                            <Card className='w-full'>
                                <CardContent className='p-5 space-y-5'>
                                    <Label>Performance</Label>
                                    <Separator className='w-full' />
                                    <InterestRateCurve currentRate={38.09} optimalRate={80} />
                                </CardContent>
                            </Card>
                        </SkeletonWrapper>
                        <SkeletonWrapper isLoading={isLoading}>
                            <Card className='w-full'>
                                <CardContent className='p-5 space-y-5'>
                                    <Label>Details</Label>
                                    <Separator className='w-full' />
                                    <PoolDetails />
                                </CardContent>
                            </Card>
                        </SkeletonWrapper>
                    </div>
                    <div className='flex flex-col gap-5 lg:w-[50%]'>
                        <SkeletonWrapper isLoading={isLoading}>
                            <Card className='w-full'>
                                <CardContent className='p-5 space-y-5'>
                                    <Tabs defaultValue='supplyCollateral' className='w-full'>
                                        <TabsList className='w-full'>
                                            <TabsTrigger value="supplyCollateral" className='w-full'>Supply collateral</TabsTrigger>
                                            <TabsTrigger value="lend" className='w-full'>Lend</TabsTrigger>
                                        </TabsList>
                                        <TabsContent value="supplyCollateral">
                                            <SupplyCollateral nftData={nftData || []} filteredData={filteredData} nftLoading={nftLoading} />
                                        </TabsContent>
                                        <TabsContent value="lend">
                                            <Lend filteredData={filteredData} />
                                        </TabsContent>
                                    </Tabs>
                                </CardContent>
                            </Card>
                        </SkeletonWrapper>
                        <SkeletonWrapper isLoading={isLoading}>
                            <Card className='w-full'>
                                <SkeletonWrapper isLoading={nftLoading}>
                                    <CardContent className='p-5 space-y-5'>
                                        <Label className='text-lg'>Your Collateral</Label>
                                        <Separator className='w-full' />
                                        <ScrollArea className="max-h-80 overflow-auto h-auto">
                                            <div className='flex flex-col w-full gap-2 h-auto'>
                                                {nftData.map((nft, index) => (
                                                    <DialogSupplyBorrowRepay
                                                        key={index}
                                                        filteredData={filteredData}
                                                        nftData={nft}
                                                        trigger={
                                                            <div
                                                                className="w-full h-auto flex justify-start items-center gap-4 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-lg px-4 py-3"
                                                            >
                                                                <NftImage path={nft?.contract.openSeaMetadata.imageUrl || ""} />
                                                                <div className="flex flex-col items-start justify-center gap-3">
                                                                    <Label className="cursor-pointer">{nft.contract.symbol}</Label>
                                                                    <Label className="cursor-pointer text-gray-500">Token id: {nft.tokenId}</Label>
                                                                </div>
                                                            </div>
                                                        }
                                                    />
                                                ))}
                                            </div>
                                        </ScrollArea>
                                    </CardContent>
                                </SkeletonWrapper>
                            </Card>
                        </SkeletonWrapper>
                    </div>
                </div>
            </div>
        </div >
    )
}