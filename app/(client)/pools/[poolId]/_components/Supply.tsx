"use client"

import React, { useState } from 'react';
import { Wallet } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { CoinImage } from '@/components/coin/CoinImage';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { PoolSchema } from '@/lib/validation/types';
import { LoadingTransaction } from '@/components/loader/LoadingTransaction';
import { SuccessDialog } from '@/components/dialog/SuccessDialog';
import { useAccount } from 'wagmi';
import { useSupply } from '@/hooks/contract/write/useSupply';
import { toast } from 'sonner';
import { useERC20Balance } from '@/hooks/contract/useERC20Balance';
import { normalize } from '@/lib/helper/bignumber';

interface SupplyProps {
    filteredData?: PoolSchema;
}

interface SupplyValues {
    supplyAmount: string;
}

export default function Supply({
    filteredData
}: SupplyProps) {
    const { address } = useAccount();
    const [showSuccessDialog, setShowSuccessDialog] = useState(false);
    const loanTokenAddress = filteredData?.loanToken.loanToken?.startsWith('0x') ? filteredData.loanToken.loanToken as HexAddress : "" as HexAddress;
    const { balance } = useERC20Balance(address as HexAddress, loanTokenAddress);
    const normalizeBalance = normalize(balance?.toString() ?? "0", 18);

    const {
        mutation,
        txHash
    } = useSupply();

    const form = useForm<SupplyValues>({
        defaultValues: {
            supplyAmount: ''
        }
    });

    const handleSubmit = async (data: SupplyValues) => {
        if (!address || !filteredData || !data.supplyAmount) {
            return;
        }

        mutation.mutate(
            {
                id: filteredData?.id as string,
                amount: data.supplyAmount,
                onBehalfOf: address as HexAddress
            },
            {
                onSuccess: () => {
                    setShowSuccessDialog(true);
                    form.reset();
                },
                onError: (error) => {
                    toast.error(`Error borrowing: ${error}`);
                    console.error("Error borrowing:", error);
                },
            }
        );
    };

    const handleMaxSupply = () => {
        form.setValue('supplyAmount', normalizeBalance?.toString() ?? "0");
    };

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
        <>
            {mutation.isPending && <LoadingTransaction message={"Loading.."} />}
            <SuccessDialog
                isOpen={showSuccessDialog}
                onClose={() => setShowSuccessDialog(false)}
                txHash={txHash as HexAddress || ""}
                processName="Supply"
            />
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col gap-5">
                    <Card className="w-full p-5">
                        <CardContent className="flex flex-col gap-5 p-0">
                            <div className="flex flex-row justify-between items-center">
                                <Label>Supply</Label>
                                <div className="flex flex-row gap-2 items-center">
                                    <Wallet />
                                    <Label>{parseFloat(normalizeBalance).toFixed(2)}</Label>
                                    <Button
                                        type="button"
                                        variant="outline"
                                        className="cursor-pointer px-3"
                                        onClick={handleMaxSupply}
                                    >
                                        <Label className="text-[11px] cursor-pointer">Max</Label>
                                    </Button>
                                </div>
                            </div>
                            <FormField
                                control={form.control}
                                name="supplyAmount"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <div className="relative">
                                                <Input
                                                    {...field}
                                                    className="w-full pr-10 py-7 rounded-xl"
                                                    type="number"
                                                    min={0}
                                                    value={parseFloat(field.value).toFixed(2)}
                                                    placeholder="Enter supply amount"
                                                />
                                                <div className='absolute right-3 top-1/2 transform -translate-y-1/2 w-fit'>
                                                    <CoinImage address={filteredData?.loanToken.loanToken || ""} />
                                                </div>
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button
                                type="submit"
                                className="w-full"
                                disabled={mutation.isPending || !form.formState.isValid}
                            >
                                Supply
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="w-full">
                        <CardContent className="p-5 space-y-5">
                            <Label className="font-bold">Transaction Overview</Label>
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-row justify-between">
                                    <Label className="text-textSecondary">Health Factor</Label>
                                    <Label>-</Label>
                                </div>
                                <div className="flex flex-row justify-between">
                                    <Label className="text-textSecondary">Liquidation Price</Label>
                                    <Label>$0.00</Label>
                                </div>
                                <div className="flex flex-row justify-between">
                                    <Label className="text-textSecondary">Gas Fee</Label>
                                    <Label>1</Label>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </form>
            </Form>
        </>
    );
}