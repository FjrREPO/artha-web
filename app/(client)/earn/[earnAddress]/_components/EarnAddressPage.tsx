"use client"

import { useState } from 'react';
import InterestRateCurve from '@/components/chart/InterestRateCurve';
import SkeletonWrapper from '@/components/loader/SkeletonWrapper';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import TablePool from './TablePool';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TopEarnData from './TopEarnData';
import Deposit from './Deposit';
import Withdraw from './Withdraw';

export default function EarnAddressPage({ earnAddress }: { earnAddress: string }) {
    const [depositAmount, setDepositAmount] = useState<number>(0);
    const [withdrawAmount, setWithdrawAmount] = useState<number>(0);

    const { data: earnData, isLoading } = useQuery<EarnData[]>({
        queryKey: ['earn', earnAddress],
        queryFn: async () => {
            const response = await fetch(`https://gist.githubusercontent.com/azizrosyid/3f8d9c2da91d6b5a893067762b26de73/raw/9bc70f649d38d78b3b4d819904fe5811a05da317/earn.json`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        },
        refetchInterval: 60000
    })

    const filteredData = earnData?.find((item: EarnData) => item.address === earnAddress);

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
                <TopEarnData filteredData={filteredData!} isLoading={isLoading} />
                <div className='flex flex-col lg:flex-row w-full gap-5'>
                    <div className='flex flex-col w-full gap-5 lg:w-4/6'>
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
                                <CardContent className='p-5 space-y-5 max-w-full'>
                                    <Label>Whitelisted Pools</Label>
                                    <Separator className='w-full' />
                                    <TablePool />
                                </CardContent>
                            </Card>
                        </SkeletonWrapper>
                    </div>
                    <div className='w-full lg:w-2/6'>
                        <SkeletonWrapper isLoading={isLoading}>
                            <Card className='w-full'>
                                <CardContent className='p-5 space-y-5'>
                                    <Tabs defaultValue='deposit' className='w-full'>
                                        <TabsList className='w-full'>
                                            <TabsTrigger value="deposit" className='w-full'>Deposit</TabsTrigger>
                                            <TabsTrigger value="withdraw" className='w-full'>Withdraw</TabsTrigger>
                                        </TabsList>
                                        <TabsContent value="deposit">
                                            <Deposit filteredData={filteredData!} handleDepositChange={handleDepositChange} handleMaxDeposit={handleMaxDeposit} depositAmount={depositAmount} />
                                        </TabsContent>
                                        <TabsContent value="withdraw">
                                            <Withdraw filteredData={filteredData!} handleWithdrawChange={handleWithdrawChange} handleMaxWithdraw={handleMaxWithdraw} withdrawAmount={withdrawAmount} />
                                        </TabsContent>
                                    </Tabs>
                                </CardContent>
                            </Card>
                        </SkeletonWrapper>
                    </div>
                </div>
            </div>
        </div>
    )
}