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

export default function PoolAddressPage({ poolAddress }: { poolAddress: string }) {
    const [depositAmount, setDepositAmount] = useState<number>(0);
    const [withdrawAmount, setWithdrawAmount] = useState<number>(0);

    const { data: poolData, isLoading } = useQuery<PoolData[]>({
        queryKey: ['pool', poolAddress],
        queryFn: async () => {
            const response = await fetch(`https://run.mocky.io/v3/311b645a-7378-481c-ba1c-5eaa3c3688fe`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        },
        refetchInterval: 60000
    })

    const filteredData = poolData?.find((item: PoolData) => item.address === poolAddress);

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
                    <div className='w-full lg:w-[50%]'>
                        <SkeletonWrapper isLoading={isLoading}>
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
                        </SkeletonWrapper>
                    </div>
                </div>
            </div>
        </div >
    )
}