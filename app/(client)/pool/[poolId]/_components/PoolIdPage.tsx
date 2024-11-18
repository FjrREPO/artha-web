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
import Borrow from './Borrow';
import Lend from './Lend';
import { PoolSchema } from '@/lib/validation/types';
import { API_SUBGRAPH } from '@/constants/config';
import { queryPool } from '@/graphql/query';
import request from 'graphql-request';
import Repay from './Repay';
import SupplyCollateral from './SupplyCollateral';

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
                    <SkeletonWrapper isLoading={isLoading}>
                        <div className='w-full lg:w-[50%]'>
                            <Card className='w-full'>
                                <CardContent className='p-5 space-y-5'>
                                    <Tabs defaultValue='supplyCollateral' className='w-full'>
                                        <TabsList className='w-full'>
                                            <TabsTrigger value="supplyCollateral" className='w-full'>Supply collateral</TabsTrigger>
                                            <TabsTrigger value="borrow" className='w-full'>Borrow</TabsTrigger>
                                            <TabsTrigger value="repay" className='w-full'>Repay</TabsTrigger>
                                            <TabsTrigger value="lend" className='w-full'>Lend</TabsTrigger>
                                        </TabsList>
                                        <TabsContent value="supplyCollateral">
                                            <SupplyCollateral filteredData={filteredData} />
                                        </TabsContent>
                                        <TabsContent value="borrow">
                                            <Borrow filteredData={filteredData} />
                                        </TabsContent>
                                        <TabsContent value="repay">
                                            <Repay filteredData={filteredData} />
                                        </TabsContent>
                                        <TabsContent value="lend">
                                            <Lend
                                                filteredData={filteredData}
                                            />
                                        </TabsContent>
                                    </Tabs>
                                </CardContent>
                            </Card>
                        </div>
                    </SkeletonWrapper>
                </div>
            </div>
        </div >
    )
}