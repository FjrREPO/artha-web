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
import SupplyCollateralCurator from './SupplyCollateralCurator';
import { useOwnerNft } from '@/hooks/useOwnerNft';

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

    const { nftData, nftLoading } = useOwnerNft()

    return (
        <div className='flex flex-col gap-5 w-full'>
            <TopEarnData filteredData={filteredData} isLoading={isLoading} nftData={nftData || []} nftLoading={nftLoading} />
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
                        <SupplyCollateralCurator nftData={nftData || []} filteredData={filteredData} nftLoading={nftLoading} />
                    </SkeletonWrapper>
                </div>
            </div>
        </div>
    )
}