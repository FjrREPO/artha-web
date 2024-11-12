"use client"

import { useState } from 'react';
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
import OpenBorrow from './OpenBorrow';
import CloseBorrow from './CloseBorrow';
import Lend from './Lend';
import { PoolSchema } from '@/lib/validation/types';
import { API_SUBGRAPH } from '@/constants/config';
import { queryPool } from '@/graphql/query';
import request from 'graphql-request';

type QueryData = {
    pools: PoolSchema[];
};

export default function PoolAddressPage({ poolId }: { poolId: string }) {
    const [depositAmount, setDepositAmount] = useState<number>(0);
    const [withdrawAmount, setWithdrawAmount] = useState<number>(0);

    const { data, isLoading } = useQuery<QueryData>({
        queryKey: ['pool'],
        queryFn: async () => {
            return await request(API_SUBGRAPH, queryPool);
        },
        refetchInterval: 360000,
    });

    const filteredData = data?.pools?.find((item: PoolSchema) => item.id === poolId);

    const handleMaxDeposit = () => {
        setDepositAmount(0);
    };

    const handleMaxWithdraw = () => {
        setWithdrawAmount(0);
    };

    const handleDepositChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value) || 0;
        setDepositAmount(value);
    };

    const handleWithdrawChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value) || 0;
        setWithdrawAmount(value);
    };

    return (
        <div>
            <div className='flex flex-col gap-5'>
                <TopPoolData filteredData={filteredData!} isLoading={isLoading} />
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
                                    <Tabs defaultValue='openBorrow' className='w-full'>
                                        <TabsList className='w-full'>
                                            <TabsTrigger value="openBorrow" className='w-full'>Open Borrow</TabsTrigger>
                                            <TabsTrigger value="closeBorrow" className='w-full'>Close Borrow</TabsTrigger>
                                            <TabsTrigger value="lend" className='w-full'>Withdraw</TabsTrigger>
                                        </TabsList>
                                        <TabsContent value="openBorrow">
                                            <OpenBorrow filteredData={filteredData!} />
                                        </TabsContent>
                                        <TabsContent value="closeBorrow">
                                            <CloseBorrow filteredData={filteredData!} />
                                        </TabsContent>
                                        <TabsContent value="lend">
                                            <Lend
                                                filteredData={filteredData!}
                                                handleDepositChange={handleDepositChange}
                                                handleMaxDeposit={handleMaxDeposit}
                                                depositAmount={depositAmount}
                                                handleWithdrawChange={handleWithdrawChange}
                                                handleMaxWithdraw={handleMaxWithdraw}
                                                withdrawAmount={withdrawAmount}
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