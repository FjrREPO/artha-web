import React from 'react'
import { formatAddress } from '@/lib/utils';
import { BadgeCheck, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { CoinImage } from '@/components/coin/CoinImage';
import { Separator } from '@/components/ui/separator';
import SkeletonWrapper from '@/components/loader/SkeletonWrapper';
import { EarnSchema } from '@/lib/validation/types';

interface Props {
    filteredData?: EarnSchema;
    isLoading: boolean;
}

export default function TopEarnData({ filteredData, isLoading }: Props) {
    return (
        <div className='flex flex-col lg:flex-row w-full gap-5'>
            <div className='flex-1 shrink-0 self-stretch'>
                <SkeletonWrapper isLoading={isLoading}>
                    <Card className='w-full py-5 h-full'>
                        <CardContent className='flex flex-col gap-8'>
                            <div className='flex flex-col md:flex-row gap-2 items-center'>
                                <Label className='text-2xl font-bold'>Curator {filteredData && formatAddress(filteredData?.curator as HexAddress, 4)}</Label>
                                <div className='flex flex-row flex-wrap gap-2'>
                                    <Link href={`https://etherscan.io/address/${filteredData?.curator}`} target='_blank' className="cursor-pointer px-1">
                                        <Button variant={'outline'} className="cursor-pointer px-1">
                                            <Label className='text-[11px] cursor-pointer'>{filteredData && formatAddress(filteredData && filteredData.curator ? filteredData.curator : '', 4)}</Label>
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
                                        <Label className='text-textSecondary'>Lend Asset</Label>
                                        <div className='flex flex-row gap-2'>
                                            <CoinImage symbol={"USDC"} />
                                            <Label className='text-lg font-medium'>{"USDC"}</Label>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-1'>
                                        <Label className='text-textSecondary'>TVL</Label>
                                        <Label className='text-lg font-medium'>0</Label>
                                    </div>
                                    <div className='flex flex-col gap-1'>
                                        <Label className='text-textSecondary'>APY</Label>
                                        <Label className='text-lg font-medium'>0</Label>
                                    </div>
                                    <div className='flex flex-col gap-1'>
                                        <Label className='text-textSecondary'>Utitlization Rate</Label>
                                        <Label className='text-lg font-medium break-all'>0</Label>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </SkeletonWrapper>
            </div>
            <div className='w-full lg:w-[480px] self-stretch'>
                <SkeletonWrapper isLoading={isLoading}>
                    <Card className='w-full h-full'>
                        <CardContent className='p-5 flex flex-col gap-5'>
                            <Label className='text-lg'>Your Deposit</Label>
                            <Separator className='w-full' />
                            <div className='flex flex-row justify-between'>
                                <Label>Deposit :</Label>
                                <Label>0</Label>
                            </div>
                        </CardContent>
                    </Card>
                </SkeletonWrapper>
            </div>
        </div>
    )
}
