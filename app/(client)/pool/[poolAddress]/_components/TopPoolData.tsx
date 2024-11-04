import React from 'react'
import { formatAddress, formatPercent } from '@/lib/utils';
import { BadgeCheck, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import SkeletonWrapper from '@/components/loader/SkeletonWrapper';

export default function TopPoolData({ filteredData, isLoading }: { filteredData: PoolData, isLoading: boolean }) {
    const totalAssets = filteredData?.tvl?.totalAssets;
    const tvl = filteredData?.tvl?.tvl;

    const utilization = tvl && totalAssets && !isNaN(parseFloat(totalAssets)) && !isNaN(parseFloat(tvl.toString()))
        ? (parseFloat(totalAssets) / parseFloat(tvl.toString())) * 100
        : null
    return (
        <div className='flex flex-col lg:flex-row w-full gap-5'>
            <SkeletonWrapper isLoading={isLoading}>
                <Card className='p-5 w-full'>
                    <CardContent className='flex flex-col gap-8'>
                        <div className='flex flex-col md:flex-row gap-2 items-center'>
                            <Label className='text-2xl font-bold'>{filteredData?.token?.name}</Label>
                            <div className='flex flex-row flex-wrap gap-2'>
                                <Link href={`https://etherscan.io/address/${filteredData?.address}`} target='_blank' className="cursor-pointer px-1">
                                    <Button variant={'outline'} className="cursor-pointer px-1">
                                        <Label className='text-[11px] cursor-pointer'>{formatAddress(filteredData && filteredData.address ? filteredData.address : '')}</Label>
                                        <ExternalLink className='w-2 h-2' />
                                    </Button>
                                </Link>
                                <Button variant={'outline'} className="cursor-pointer px-1">
                                    <Image src={"https://static.alchemyapi.io/images/emblems/base-mainnet.svg"} alt='Base Network' width={24} height={24} className="rounded-full" />
                                    <Label className='text-[11px] cursor-pointer'>Base Sepolia</Label>
                                </Button>
                                <Button variant={'outline'} className="cursor-pointer px-1">
                                    <BadgeCheck className='w-3 h-3 text-green-500' />
                                    <Label className='text-[11px] cursor-pointer'>Governance Forum</Label>
                                    <ExternalLink className='w-2 h-2' />
                                </Button>
                            </div>
                        </div>
                        <div className='flex flex-row w-full'>
                            <div className='flex flex-row flex-wrap w-full gap-10 sm:gap-20'>
                                <div className='flex flex-col gap-1'>
                                    <Label className='text-textSecondary'>Reserve Size</Label>
                                    <Label className='text-lg font-medium'>{totalAssets}</Label>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <Label className='text-textSecondary'>Available Liquidity</Label>
                                    <Label className='text-lg font-medium'>{totalAssets}</Label>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <Label className='text-textSecondary'>Utitlization Rate</Label>
                                    {utilization === null ? (
                                        <Label className='text-lg font-medium'>N/A</Label>
                                    ) : (
                                        <Label className='text-lg font-medium'>{formatPercent(utilization)}</Label>
                                    )}
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <Label className='text-textSecondary'>Lend APR</Label>
                                    <Label className='text-lg font-medium'>{filteredData?.apr?.netAPR}</Label>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <Label className='text-textSecondary'>Collateral APY</Label>
                                    <Label className='text-lg font-medium'>{filteredData?.apr?.forwardAPR?.composite?.v3OracleStratRatioAPR !== undefined ? formatPercent(filteredData?.apr.forwardAPR.composite.v3OracleStratRatioAPR) : 'N/A'}</Label>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <Label className='text-textSecondary'>Borrow APR</Label>
                                    <Label className='text-lg font-medium'>{filteredData?.apr.fees.performance}</Label>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </SkeletonWrapper>
            <SkeletonWrapper isLoading={isLoading}>
                <Card className='w-full lg:w-[50%] py-5'>
                    <CardContent className='flex flex-col space-y-5 p-0'>
                        <div className='px-6'>
                            <Label className='text-md'>Your Position</Label>
                        </div>
                        <Separator className='w-[100%]' />
                        <div className='px-6 flex flex-col gap-4'>
                            <div className='flex flex-row justify-between items-center'>
                                <Label className='text-textSecondary'>Collateral</Label>
                                <Label>0 {filteredData?.token.symbol} $0.00</Label>
                            </div>
                            <div className='flex flex-row justify-between items-center'>
                                <Label className='text-textSecondary'>Borrow</Label>
                                <Label>0 {filteredData?.token.symbol} $0.00</Label>
                            </div>
                            <div className='flex flex-row justify-between items-center'>
                                <Label className='text-textSecondary'>Lend</Label>
                                <Label>0 {filteredData?.token.symbol} $0.00</Label>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </SkeletonWrapper>
        </div>
    )
}
