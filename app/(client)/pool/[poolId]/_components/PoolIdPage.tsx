"use client"

import InterestRateChart from '@/components/chart/InterestRateChart';
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
import { useOwnerNft } from '@/hooks/useOwnerNft';

type QueryData = {
    pools: PoolSchema[];
};

export default function PoolIdPage({ PoolId }: { PoolId: string }) {
    const { data, isLoading } = useQuery<QueryData>({
        queryKey: ['pool'],
        queryFn: async () => {
            return await request(API_SUBGRAPH, queryPool);
        },
        refetchInterval: 600000000,
    });

    const filteredData: PoolSchema | undefined = data?.pools?.find((item: PoolSchema) => item.id === PoolId);

    const { nftData, nftLoading } = useOwnerNft()

    return (
        <div className='flex flex-col gap-5'>
            <TopPoolData filteredData={filteredData} isLoading={isLoading} nftData={nftData || []} nftLoading={nftLoading} />
            <div className='flex flex-col-reverse lg:flex-row w-full gap-5'>
                <div className='flex flex-col w-full gap-5 lg:w-3/6 flex-1 shrink-0 self-stretch'>
                    <SkeletonWrapper isLoading={isLoading}>
                        <Card className='w-full'>
                            <CardContent className='p-5 space-y-5'>
                                <Label>Performance</Label>
                                <Separator className='w-full' />
                                <InterestRateChart />
                            </CardContent>
                        </Card>
                    </SkeletonWrapper>
                </div>
                <div className='w-full lg:w-[480px] self-stretch'>
                    <div className='flex flex-col gap-5 w-full'>
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
                                <CardContent className='p-5 space-y-5'>
                                    <Label>Details</Label>
                                    <Separator className='w-full' />
                                    <PoolDetails />
                                </CardContent>
                            </Card>
                        </SkeletonWrapper>
                    </div>
                </div>
            </div>
        </div>
    )
}