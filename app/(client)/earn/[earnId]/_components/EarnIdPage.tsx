"use client"

import InterestRateChart from '@/components/chart/InterestRateChart';
import SkeletonWrapper from '@/components/loader/SkeletonWrapper';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import TablePool from './TablePool';
import TopEarnData from './TopEarnData';
import request from 'graphql-request';
import { EarnSchema } from '@/lib/validation/types';
import { API_SUBGRAPH } from '@/constants/config';
import { queryCurator } from '@/graphql/query';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Deposit from './Deposit';
import Withdraw from './Withdraw';

type QueryData = {
    curators: EarnSchema[];
};

export default function EarnIdPage({ earnId }: { earnId: string }) {
    const { data, isLoading } = useQuery<QueryData>({
        queryKey: ['earn'],
        queryFn: async () => {
            return await request(API_SUBGRAPH, queryCurator);
        },
        refetchInterval: 600000000,
    });

    const filteredData = data?.curators?.find((item) => item.id === earnId);

    return (
        <div className='flex flex-col gap-5 w-full'>
            <TopEarnData filteredData={filteredData} isLoading={isLoading} />
            <div className='flex flex-col-reverse lg:flex-row w-full gap-5'>
                <div className='flex flex-col w-full lg:w-3/6 gap-5 flex-1 shrink-0 self-stretch'>
                    <SkeletonWrapper isLoading={isLoading}>
                        <Card className='w-full'>
                            <CardContent className='p-5 space-y-5'>
                                <Label>Performance</Label>
                                <Separator className='w-full' />
                                <InterestRateChart />
                            </CardContent>
                        </Card>
                    </SkeletonWrapper>
                    <SkeletonWrapper isLoading={isLoading}>
                        <Card className='w-full'>
                            <CardContent className='p-5 space-y-5 max-w-full'>
                                <Label>Whitelisted Pools</Label>
                                <Separator className='w-full' />
                                <TablePool />
                            </CardContent>
                        </Card>
                    </SkeletonWrapper>
                </div>
                <div className='w-full lg:w-[480px] self-stretch'>
                    <SkeletonWrapper isLoading={isLoading}>
                        <Card className='w-full'>
                            <CardContent className='p-5 space-y-5'>
                                <Tabs defaultValue='deposit' className='w-full'>
                                    <TabsList className='w-full'>
                                        <TabsTrigger value="deposit" className='w-full'>Deposit</TabsTrigger>
                                        <TabsTrigger value="withdraw" className='w-full'>Withdraw</TabsTrigger>
                                    </TabsList>
                                    <TabsContent value="deposit">
                                        <Deposit filteredData={filteredData!} />
                                    </TabsContent>
                                    <TabsContent value="withdraw">
                                        <Withdraw filteredData={filteredData!} />
                                    </TabsContent>
                                </Tabs>
                            </CardContent>
                        </Card>
                    </SkeletonWrapper>
                </div>
            </div>
        </div>
    )
}