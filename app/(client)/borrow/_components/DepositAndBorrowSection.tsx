import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { CoinImageCustom } from '@/components/coin/CoinImageCustom';
import { CoinSymbol } from '@/components/coin/CoinSymbol';
import SkeletonWrapper from '@/components/loader/SkeletonWrapper';
import { UseFormReturn } from 'react-hook-form';
import { CoinMarketCapSchema } from '@/lib/validation/types';
import { z } from 'zod';
import { supplyCollateralAndBorrow } from '@/lib/validation/schemas';

type FormData = z.infer<typeof supplyCollateralAndBorrow>;

interface Props {
    form: UseFormReturn<FormData>;
    cryptoTokenData: CoinMarketCapSchema[];
    cryptoTokenLoading: boolean;
}

export const DepositAndBorrowSection = ({ form, cryptoTokenData, cryptoTokenLoading }: Props) => {
    return (
        <div className="flex flex-col lg:flex-row gap-2">
            <div className="w-full lg:w-1/2">
                <Card className='flex w-full'>
                    <CardContent className='flex w-full'>
                        <FormField
                            control={form.control}
                            name="depositAmount"
                            render={({ field }) => (
                                <FormItem className='w-full py-5 flex flex-col gap-3'>
                                    <FormLabel className='text-xl'>Deposit</FormLabel>
                                    <FormControl>
                                        <div className="relative w-full flex">
                                            <Input
                                                {...field}
                                                type='string'
                                                placeholder="Enter deposit amount"
                                                className='pl-[150px] h-[70px] w-full'
                                            />
                                            <div className="absolute inset-y-0 left-3 h-full flex items-center">
                                                <SkeletonWrapper isLoading={cryptoTokenLoading}>
                                                    <Select
                                                        onValueChange={(value) => form.setValue('depositToken', value)}
                                                        value={form.watch('depositToken')}
                                                    >
                                                        <SelectTrigger className="w-32 border-l h-[50px]">
                                                            <SelectValue placeholder="Select Token">
                                                                <div className="flex items-center gap-2">
                                                                    <CoinImageCustom
                                                                        address={form.watch('depositToken')}
                                                                        className="w-7 h-7"
                                                                    />
                                                                    <CoinSymbol
                                                                        address={form.watch('depositToken') || ""}
                                                                        className="text-md"
                                                                    />
                                                                </div>
                                                            </SelectValue>
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            {cryptoTokenData?.map((token, index) => (
                                                                <SelectItem
                                                                    key={index}
                                                                    value={token.contract_address[0].contract_address}
                                                                    className='cursor-pointer'
                                                                >
                                                                    <div className="flex items-center gap-2">
                                                                        <CoinImageCustom
                                                                            address={token.contract_address[0].contract_address}
                                                                            className="w-6 h-6 mr-2"
                                                                        />
                                                                        <CoinSymbol
                                                                            address={token.contract_address[0].contract_address}
                                                                        />
                                                                    </div>
                                                                </SelectItem>
                                                            ))}
                                                        </SelectContent>
                                                    </Select>
                                                </SkeletonWrapper>
                                            </div>
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </CardContent>
                </Card>
            </div>
            <div className="w-full lg:w-1/2">
                <Card className='flex w-full'>
                    <CardContent className='flex w-full'>
                        <FormField
                            control={form.control}
                            name="borrowAmount"
                            render={({ field }) => (
                                <FormItem className='w-full py-5 flex flex-col gap-3'>
                                    <FormLabel className='text-xl'>Borrow</FormLabel>
                                    <FormControl>
                                        <div className="relative w-full flex">
                                            <Input
                                                {...field}
                                                type='string'
                                                placeholder="Enter borrow amount"
                                                className='pl-[150px] h-[70px] w-full'
                                            />
                                            <div className="absolute inset-y-0 left-3 h-full flex items-center">
                                                <SkeletonWrapper isLoading={cryptoTokenLoading}>
                                                    <Select
                                                        onValueChange={(value) => form.setValue('borrowToken', value)}
                                                        value={form.watch('borrowToken')}
                                                    >
                                                        <SelectTrigger className="w-32 border-l h-[50px]">
                                                            <SelectValue placeholder="Select Token">
                                                                <div className="flex items-center gap-1">
                                                                    <CoinImageCustom
                                                                        address={form.watch('borrowToken')}
                                                                        className="w-6 h-6 mr-2"
                                                                    />
                                                                    <CoinSymbol
                                                                        address={form.watch('borrowToken') || ""}
                                                                        className="text-md"
                                                                    />
                                                                </div>
                                                            </SelectValue>
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            {cryptoTokenData?.map((token, index) => (
                                                                <SelectItem
                                                                    key={index}
                                                                    value={token.contract_address[0].contract_address}
                                                                    className='cursor-pointer'
                                                                >
                                                                    <div className="flex items-center gap-2">
                                                                        <CoinImageCustom
                                                                            address={token.contract_address[0].contract_address}
                                                                            className="w-6 h-6 mr-2"
                                                                        />
                                                                        <CoinSymbol
                                                                            address={token.contract_address[0].contract_address}
                                                                        />
                                                                    </div>
                                                                </SelectItem>
                                                            ))}
                                                        </SelectContent>
                                                    </Select>
                                                </SkeletonWrapper>
                                            </div>
                                        </div>
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