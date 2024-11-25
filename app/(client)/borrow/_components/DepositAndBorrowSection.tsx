import React, { useMemo } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import SkeletonWrapper from '@/components/loader/SkeletonWrapper';
import { UseFormReturn } from 'react-hook-form';
import { AlchemyNftSchema, CoinMarketCapSchema, PoolSchema, SupplyCollateralAndBorrow } from '@/lib/validation/types';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ScrollArea } from '@/components/ui/scroll-area';
import { CoinImage } from '@/components/coin/CoinImage';
import { CoinSymbol } from '@/components/coin/CoinSymbol';
import { useCryptoToken } from '@/hooks/useCryptoToken';
import { useOwnerNft } from '@/hooks/useOwnerNft';
import { Badge } from '@/components/ui/badge';

interface Props {
    form: UseFormReturn<SupplyCollateralAndBorrow>;
    poolData: PoolSchema[];
    poolLoading: boolean;
    selectedBorrowToken: CoinMarketCapSchema | null
    setSelectedBorrowToken: React.Dispatch<React.SetStateAction<CoinMarketCapSchema | null>>
}

export const DepositAndBorrowSection = ({
    form,
    poolData,
    poolLoading,
    selectedBorrowToken,
    setSelectedBorrowToken
}: Props) => {

    const collateralTokenSelected = form.watch('collateralToken');
    const tokenIdSelected = form.watch('tokenId');

    const { cryptoTokenData } = useCryptoToken();
    const { nftData, nftLoading } = useOwnerNft();

    const uniqueCollateralTokens = useMemo(() =>
        Array.from(
            new Set(poolData?.map(pool => pool.collateralToken.collateralToken || "").filter(Boolean))
        ),
        [poolData]
    );

    const availableBorrowTokens = useMemo(() =>
        Array.from(
            new Set(
                poolData
                    ?.filter(pool => pool.collateralToken.collateralToken === collateralTokenSelected)
                    .map(pool => pool.loanToken.loanToken || "")
                    .filter(Boolean)
            )
        ),
        [poolData, collateralTokenSelected]
    );

    const handleBorrowTokenChange = (value: string) => {
        const borrowToken = cryptoTokenData?.find(coin =>
            coin.contract_address[0].contract_address === value
        );
        if (borrowToken) {
            setSelectedBorrowToken(borrowToken as CoinMarketCapSchema);
            form.resetField('supplyPool');
        } else {
            setSelectedBorrowToken(null);
        }
    };

    const filteredPools = useMemo(() =>
        poolData?.filter(pool => {
            const collateralMatch = collateralTokenSelected === pool.collateralToken.collateralToken;
            const borrowTokenMatch = selectedBorrowToken
                ? pool.loanToken.loanToken === selectedBorrowToken.contract_address[0].contract_address.toString()
                : true;
            return collateralMatch && borrowTokenMatch;
        }) || [],
        [poolData, collateralTokenSelected, selectedBorrowToken]
    );

    const isSupplyPoolDisabled = useMemo(() => {
        return (
            poolLoading ||
            !collateralTokenSelected ||
            !tokenIdSelected ||
            !selectedBorrowToken ||
            filteredPools.length === 0
        );
    }, [
        poolLoading,
        collateralTokenSelected,
        tokenIdSelected,
        selectedBorrowToken,
        filteredPools.length
    ]);

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 h-fit">
                <div className='w-full flex flex-col xl:flex-row gap-2'>
                    <div className="w-full xl:w-1/2">
                        <Card className="flex w-full">
                            <CardContent className="flex flex-col w-full gap-5">
                                <FormField
                                    control={form.control}
                                    name="collateralToken"
                                    render={({ field }) => (
                                        <FormItem className="w-full py-5 flex flex-col gap-3">
                                            <FormLabel className="text-xl">Supply Collateral</FormLabel>
                                            <SkeletonWrapper isLoading={poolLoading}>
                                                <FormControl>
                                                    <Select
                                                        onValueChange={field.onChange}
                                                        value={field.value}
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
                                                </FormControl>
                                            </SkeletonWrapper>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </CardContent>
                        </Card>
                    </div>
                    <div className="w-full xl:w-1/2">
                        <Card className="flex w-full">
                            <CardContent className="flex flex-col w-full gap-5">
                                <FormField
                                    control={form.control}
                                    name="tokenId"
                                    render={({ field }) => (
                                        <FormItem className="w-full py-5 flex flex-col gap-3">
                                            <FormLabel className="text-xl">Choose Token Id</FormLabel>
                                            <SkeletonWrapper isLoading={poolLoading}>
                                                <SkeletonWrapper isLoading={nftLoading}>
                                                    <FormControl>
                                                        <Select
                                                            onValueChange={field.onChange}
                                                            value={field.value}
                                                            disabled={!collateralTokenSelected}
                                                        >
                                                            <SelectTrigger className="w-full py-8">
                                                                <SelectValue placeholder="Select token id" />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                <ScrollArea className="max-h-52">
                                                                    {nftData?.map((token: AlchemyNftSchema) => (
                                                                        <SelectItem
                                                                            key={token.tokenId}
                                                                            value={token.tokenId.toString()}
                                                                            className="py-5"
                                                                        >
                                                                            <div className="flex items-center gap-2">
                                                                                {token.tokenId}
                                                                            </div>
                                                                        </SelectItem>
                                                                    ))}
                                                                </ScrollArea>
                                                            </SelectContent>
                                                        </Select>
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
                </div>

                <div className='w-full flex flex-col xl:flex-row gap-2'>
                    <div className="w-full xl:w-1/2">
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
                                                                disabled={!tokenIdSelected}
                                                            />
                                                            <div className='absolute left-3 top-1/2 transform -translate-y-1/2 w-fit'>
                                                                <Select
                                                                    onValueChange={handleBorrowTokenChange}
                                                                    value={selectedBorrowToken?.contract_address[0].contract_address || ''}
                                                                    disabled={!tokenIdSelected}
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
                    <div className="w-full xl:w-1/2">
                        <Card className="flex w-full">
                            <CardContent className="flex flex-col w-full gap-5">
                                <FormField
                                    control={form.control}
                                    name="supplyPool"
                                    render={({ field }) => (
                                        <FormItem className="w-full py-5 flex flex-col gap-3">
                                            <FormLabel className="text-lg font-semibold">Select Pool</FormLabel>
                                            <SkeletonWrapper isLoading={poolLoading}>
                                                <Select
                                                    onValueChange={field.onChange}
                                                    value={field.value}
                                                    disabled={isSupplyPoolDisabled}
                                                >
                                                    <FormControl>
                                                        <SelectTrigger className="w-full py-8">
                                                            <SelectValue placeholder="Select supply pool" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <ScrollArea className="max-h-52">
                                                            {filteredPools?.map((pool) => (
                                                                <SelectItem key={pool.id} value={pool.id!} className="py-3">
                                                                    <div className="flex items-center gap-2">
                                                                        <div className="flex items-center gap-2">
                                                                            <CoinImage address={pool.collateralToken.collateralToken || ""} />
                                                                            <CoinSymbol address={pool.collateralToken.collateralToken || ""} />
                                                                        </div>
                                                                        <Badge variant="outline">{pool.ltv}% LTV</Badge>
                                                                    </div>
                                                                </SelectItem>
                                                            ))}
                                                        </ScrollArea>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </SkeletonWrapper>
                                        </FormItem>
                                    )}
                                />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};