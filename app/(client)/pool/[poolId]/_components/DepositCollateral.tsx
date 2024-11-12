"use client"

import React, { useCallback, useState } from 'react';
import { Wallet } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { CoinImage } from '@/components/coin/CoinImage';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { CoinMarketCapSchema, PoolSchema } from '@/lib/validation/types';
import { useAccount } from 'wagmi';
import { useERC721Balance } from '@/hooks/useERC721Balance';
import { CryptoToken } from '@/constants/cryptoToken';
import { DialogSelectToken } from '@/components/dialog/DialogSelectToken';

interface DepositCollateralProps {
    filteredData?: PoolSchema;
    onDeposit: (amount: string, tokenId: string) => Promise<void>;
}

interface DepositFormValues {
    depositAmount: string;
}

export default function DepositCollateral({ filteredData, onDeposit }: DepositCollateralProps) {
    const { address } = useAccount();
    const collateralTokenAddress = filteredData?.collateralToken as HexAddress || "0x0";
    const { balance } = useERC721Balance(address as HexAddress, collateralTokenAddress);
    const [isDepositDialogOpen, setIsDepositDialogOpen] = useState(false);
    const [selectedDepositToken, setSelectedDepositToken] = useState(CryptoToken[0]);

    const form = useForm<DepositFormValues>({
        defaultValues: {
            depositAmount: ''
        }
    });

    const findTokenIdByAddress = filteredData?.collateralToken
        ? CryptoToken.find((token) =>
            token.contract_address[0].contract_address.toLowerCase() === filteredData.collateralToken.toLowerCase()
        )?.id
        : undefined;

    const handleSubmit = async (data: DepositFormValues) => {
        await onDeposit(data.depositAmount, findTokenIdByAddress?.toString() ?? "0");
    };

    const handleMaxDeposit = () => {
        form.setValue('depositAmount', (balance as bigint).toString() ?? "0");
    };

    const handleSelectDepositToken = useCallback((token: CoinMarketCapSchema) => {
        const tokenSelected = CryptoToken.find((c) =>
            c.contract_address[0].contract_address.toLowerCase() === token.contract_address[0].contract_address.toLowerCase()
        );
        setSelectedDepositToken(tokenSelected ?? CryptoToken[0]);
        setIsDepositDialogOpen(false);
    }, []);

    if (!filteredData) {
        return (
            <Card className="w-full p-5">
                <CardContent className="flex justify-center items-center p-4">
                    <Label>No pool data available</Label>
                </CardContent>
            </Card>
        );
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col gap-5">
                <Card className="w-full p-5">
                    <CardContent className="flex flex-col gap-5 p-0">
                        <div className="flex flex-row justify-between items-center">
                            <Label>Deposit Collateral</Label>
                            <div className="flex flex-row gap-2 items-center">
                                <Wallet />
                                <Label>0</Label>
                                <Button
                                    type="button"
                                    variant="outline"
                                    className="cursor-pointer px-3"
                                    onClick={handleMaxDeposit}
                                >
                                    <Label className="text-[11px] cursor-pointer">Max</Label>
                                </Button>
                            </div>
                        </div>
                        <FormField
                            control={form.control}
                            name="depositAmount"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <div className="relative">
                                            <Input
                                                {...field}
                                                className="w-full pr-10 py-7 rounded-xl"
                                                type="number"
                                                min={0}
                                                placeholder="Enter deposit amount"
                                            />
                                            <DialogSelectToken
                                                tokenUsed={CryptoToken}
                                                isDialogOpen={isDepositDialogOpen}
                                                setDialogOpen={setIsDepositDialogOpen}
                                                handleSelect={handleSelectDepositToken}
                                                trigger={
                                                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-fit cursor-pointer">
                                                        <CoinImage address={selectedDepositToken.contract_address[0].contract_address || ""} />
                                                    </div>
                                                }
                                            />
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </CardContent>
                </Card>

                <Button type="submit" className="w-full">
                    Add Collateral
                </Button>
            </form>
        </Form>
    );
}