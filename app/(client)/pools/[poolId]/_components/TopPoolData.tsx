import { formatAddress } from '@/lib/utils';
import { BadgeCheck, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import SkeletonWrapper from '@/components/loader/SkeletonWrapper';
import { AlchemyNftSchema, PoolSchema } from '@/lib/validation/types';
import { CoinSymbol } from '@/components/coin/CoinSymbol';
import { CoinImageCustom } from '@/components/coin/CoinImageCustom';
import { ScrollArea } from '@/components/ui/scroll-area';
import { DialogSupplyBorrowRepay } from './DialogSupplyBorrowRepay';
import { NftImage } from '@/components/nft/NftImage';

interface Props {
    filteredData?: PoolSchema;
    isLoading: boolean;
    nftData: AlchemyNftSchema[];
    nftLoading: boolean;
}

export default function TopPoolData({ filteredData, isLoading, nftData, nftLoading }: Props) {
    const totalAssets = filteredData?.ltv?.toString();
    const ltv = filteredData?.ltv;

    const utilization = ltv && totalAssets && !isNaN(parseFloat(totalAssets as string)) && !isNaN(parseFloat(ltv.toString()))
        ? (parseFloat(totalAssets) / parseFloat(ltv.toString())) * 100
        : null
    return (
        <div className='flex flex-col lg:flex-row w-full gap-5'>
            <div className='flex flex-col w-full gap-5 lg:w-3/6 flex-1 shrink-0 self-stretch'>
                <SkeletonWrapper isLoading={isLoading}>
                    <Card className='p-5 w-full'>
                        <CardContent className='flex flex-col gap-8'>
                            <div className='flex flex-col md:flex-row gap-2 items-center'>
                                <div className='flex flex-row items-center gap-2'>
                                    <CoinImageCustom address={filteredData?.collateralToken || ""} className='w-8 h-8' />
                                    <CoinSymbol address={filteredData?.collateralToken || ""} className='text-2xl font-bold' />
                                </div>
                                <div className='flex flex-row flex-wrap gap-2'>
                                    <Link href={`https://sepolia.basescan.org/address/${filteredData?.collateralToken}`} target='_blank' className="cursor-pointer px-1">
                                        <Button variant={'outline'} className="cursor-pointer px-1">
                                            <Label className='text-[11px] cursor-pointer'>{filteredData && formatAddress(filteredData && filteredData.collateralToken ? filteredData.collateralToken : '', 4)}</Label>
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
                                            <Label className='text-lg font-medium'>10%</Label>
                                        )}
                                    </div>
                                    <div className='flex flex-col gap-1'>
                                        <Label className='text-textSecondary'>Lend APR</Label>
                                        <Label className='text-lg font-medium'>{filteredData?.lth}</Label>
                                    </div>
                                    <div className='flex flex-col gap-1'>
                                        <Label className='text-textSecondary'>Collateral APY</Label>
                                        <Label className='text-lg font-medium'>{filteredData?.lth !== undefined ? "10%" : 'N/A'}</Label>
                                    </div>
                                    <div className='flex flex-col gap-1'>
                                        <Label className='text-textSecondary'>Borrow APR</Label>
                                        <Label className='text-lg font-medium'>{filteredData?.lth}</Label>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </SkeletonWrapper>
            </div>

            <div className='w-full lg:w-[480px] self-stretch'>
                <SkeletonWrapper isLoading={isLoading || nftLoading}>
                    <Card className='w-full h-full'>
                        <CardContent className='p-5 space-y-5'>
                            <Label className='text-lg'>Your Position</Label>
                            <Separator className='w-full' />
                            <ScrollArea>
                                <div className='flex flex-col w-full gap-2 h-auto max-h-48 overflow-auto'>
                                    {nftData.map((nft, index) => (
                                        <DialogSupplyBorrowRepay
                                            key={index}
                                            filteredData={filteredData}
                                            nftData={nft}
                                            trigger={
                                                <div
                                                    className="w-full h-auto flex justify-start items-center gap-4 py-4 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-lg px-4"
                                                >
                                                    <NftImage path={nft?.contract.openSeaMetadata.imageUrl || ""} />
                                                    <div className="flex flex-col items-start justify-center gap-1">
                                                        <Label className="cursor-pointer">{nft.contract.symbol}</Label>
                                                        <Label className="cursor-pointer text-gray-500 text-xs">Token id: {nft.tokenId}</Label>
                                                    </div>
                                                </div>
                                            }
                                        />
                                    ))}
                                </div>
                            </ScrollArea>
                        </CardContent>
                    </Card>
                </SkeletonWrapper>
            </div>
        </div>
    )
}
