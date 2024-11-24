import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import SkeletonWrapper from '@/components/loader/SkeletonWrapper';
import { UseFormReturn } from 'react-hook-form';
import { AlchemyNftSchema, CoinMarketCapSchema, SupplyCollateralAndBorrow } from '@/lib/validation/types';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ScrollArea } from '@/components/ui/scroll-area';
import { CoinImage } from '@/components/coin/CoinImage';
import { CoinSymbol } from '@/components/coin/CoinSymbol';
import { useCryptoToken } from '@/hooks/useCryptoToken';
import { useOwnerNft } from '@/hooks/useOwnerNft';

interface Props {
    form: UseFormReturn<SupplyCollateralAndBorrow>;
    poolLoading: boolean;
    uniqueCollateralTokens: string[];
    availableBorrowTokens: string[];
    handleCollateralTokenSelect: (token: string) => void;
    handleBorrowTokenSelect: (token: string) => void;
    selectedCollateralToken: string;
    selectedBorrowToken: string;
}

export const DepositAndBorrowSection = ({
    form,
    poolLoading,
    uniqueCollateralTokens,
    availableBorrowTokens,
    handleCollateralTokenSelect,
    handleBorrowTokenSelect,
    selectedCollateralToken,
    selectedBorrowToken
}: Props) => {
    const [selectedCoin, setSelectedCoin] = useState<CoinMarketCapSchema | null>(null);

    const { cryptoTokenData } = useCryptoToken();

    const { nftData, nftLoading } = useOwnerNft();

    useEffect(() => {
        if (!poolLoading && cryptoTokenData && cryptoTokenData.length > 0 && !selectedCoin) {
            const defaultCoin = cryptoTokenData[0];
            setSelectedCoin(defaultCoin);
            form.setValue('collateralToken', defaultCoin.id.toString());
        }
    }, [cryptoTokenData, poolLoading, form, selectedCoin]);

    return (
        <div className="flex flex-col lg:flex-row gap-2 h-fit">
            <div className="w-full lg:w-1/2">
                <Card className="flex w-full">
                    <CardContent className="flex flex-col w-full gap-5">
                        <FormField
                            control={form.control}
                            name="collateralToken"
                            render={() => (
                                <FormItem className="w-full py-5 flex flex-col gap-3">
                                    <FormLabel className="text-xl">Supply Collateral</FormLabel>
                                    <SkeletonWrapper isLoading={poolLoading}>
                                        <FormControl>
                                            <div className="relative">
                                                <Select
                                                    onValueChange={handleCollateralTokenSelect}
                                                    value={selectedCollateralToken}
                                                >
                                                    <SelectTrigger className="w-full py-8">
                                                        <SelectValue placeholder="Select collateral token" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <ScrollArea className="max-h-52">
                                                            {uniqueCollateralTokens.map((token) => (
                                                                <SelectItem key={token} value={token} className="py-5">
                                                                    <div className="flex items-center gap-2">
                                                                        <CoinImage address={token} />
                                                                        <CoinSymbol address={token} />
                                                                    </div>
                                                                </SelectItem>
                                                            ))}
                                                        </ScrollArea>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </FormControl>
                                    </SkeletonWrapper>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="tokenId"
                            render={({ field }) => (
                                <FormItem className="w-full py-5 flex flex-col gap-3">
                                    <FormLabel className="text-xl">Choose Token Id</FormLabel>
                                    <SkeletonWrapper isLoading={poolLoading}>
                                        <SkeletonWrapper isLoading={nftLoading}>
                                            <FormControl>
                                                <div className="relative">
                                                    <Select
                                                        onValueChange={field.onChange}
                                                        value={field.value}
                                                        disabled={!selectedCollateralToken}
                                                    >
                                                        <SelectTrigger className="w-full py-8">
                                                            <SelectValue placeholder="Select token id" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <ScrollArea className="max-h-52">
                                                                {nftData?.map((token: AlchemyNftSchema) => (
                                                                    <SelectItem key={token.tokenId} value={token.tokenId.toString()} className="py-5">
                                                                        <div className="flex items-center gap-2">
                                                                            {token.tokenId}
                                                                        </div>
                                                                    </SelectItem>
                                                                ))}
                                                            </ScrollArea>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                            </FormControl>
                                        </SkeletonWrapper>
                                    </SkeletonWrapper>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </CardContent>
                </Card>
            </div>
            <div className="w-full lg:w-1/2">
                <Card className="flex w-full">
                    <CardContent className="flex w-full">
                        <FormField
                            control={form.control}
                            name="borrowAmount"
                            render={({ field }) => (
                                <FormItem className="w-full py-5 flex flex-col gap-3">
                                    <FormLabel className="text-xl">Borrow</FormLabel>
                                    <FormControl>
                                        <SkeletonWrapper isLoading={poolLoading}>
                                            <div className="flex flex-col gap-4">
                                                <div className="relative">
                                                    <Input
                                                        {...field}
                                                        className="w-full pl-32 py-8 rounded-lg"
                                                        type="number"
                                                        min={0}
                                                        placeholder="Enter borrow amount"
                                                        disabled={!selectedCollateralToken}
                                                    />
                                                    <div className='absolute left-3 top-1/2 transform -translate-y-1/2 w-fit'>
                                                        <Select
                                                            onValueChange={handleBorrowTokenSelect}
                                                            value={selectedBorrowToken}
                                                            disabled={!selectedCollateralToken}
                                                        >
                                                            <SelectTrigger className="w-28 py-6">
                                                                <SelectValue placeholder="Select" />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                <ScrollArea className="max-h-52">
                                                                    {availableBorrowTokens.map((token) => (
                                                                        <SelectItem key={token} value={token} className="py-5">
                                                                            <div className="flex items-center gap-2">
                                                                                <CoinImage address={token} />
                                                                                <CoinSymbol address={token} />
                                                                            </div>
                                                                        </SelectItem>
                                                                    ))}
                                                                </ScrollArea>
                                                            </SelectContent>
                                                        </Select>
                                                    </div>
                                                </div>
                                            </div>
                                        </SkeletonWrapper>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default DepositAndBorrowSection;