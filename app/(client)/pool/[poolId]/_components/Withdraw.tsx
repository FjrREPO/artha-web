"use client"

import React, { useEffect, useState } from 'react';
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
import { useERC721Balance } from '@/hooks/useERC721Balance';
import { useWithdraw } from '@/hooks/useWithdraw';

interface WithdrawProps {
    filteredData?: PoolSchema;
}

interface WithdrawValues {
    withdrawAmount: string;
}

export default function Withdraw({
    filteredData
}: WithdrawProps) {
    const { address } = useAccount();
    const [showSuccessDialog, setShowSuccessDialog] = useState(false);
    const { balance } = useERC721Balance(address as HexAddress, filteredData?.collateralToken as HexAddress);

    const {
        withdrawHash,
        handleWithdraw,
        isWithdrawConfirmed,
        isWithdrawConfirming,
        isWithdrawPending
    } = useWithdraw();

    const form = useForm<WithdrawValues>({
        defaultValues: {
            withdrawAmount: ''
        }
    });

    const handleSubmit = async (data: WithdrawValues) => {
        await handleWithdraw(filteredData?.id ?? "", data.withdrawAmount, address ?? "");
    };

    const handleMaxWithdraw = () => {
        form.setValue('withdrawAmount', balance?.toString() ?? "0");
    };

    useEffect(() => {
        if (withdrawHash && isWithdrawConfirmed) {
            setShowSuccessDialog(true);
            form.reset();
        }
    }, [withdrawHash, isWithdrawConfirmed, form]);

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
            {(isWithdrawConfirming || isWithdrawPending) && (
                <LoadingTransaction
                    message={isWithdrawConfirming ? "Withdrawing..." : "Confirming withdraw..."}
                />
            )}
            <SuccessDialog
                isOpen={showSuccessDialog}
                onClose={() => setShowSuccessDialog(false)}
                txHash={withdrawHash as HexAddress || ""}
                processName="Withdraw"
            />
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col gap-5">
                    <Card className="w-full p-5">
                        <CardContent className="flex flex-col gap-5 p-0">
                            <div className="flex flex-row justify-between items-center">
                                <Label>Withdraw</Label>
                                <div className="flex flex-row gap-2 items-center">
                                    <Wallet />
                                    <Label>0</Label>
                                    <Button
                                        type="button"
                                        variant="outline"
                                        className="cursor-pointer px-3"
                                        onClick={handleMaxWithdraw}
                                    >
                                        <Label className="text-[11px] cursor-pointer">Max</Label>
                                    </Button>
                                </div>
                            </div>
                            <FormField
                                control={form.control}
                                name="withdrawAmount"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <div className="relative">
                                                <Input
                                                    {...field}
                                                    className="w-full pr-10 py-7 rounded-xl"
                                                    type="number"
                                                    min={0}
                                                    placeholder="Enter withdraw amount"
                                                />
                                                <div className='absolute right-3 top-1/2 transform -translate-y-1/2 w-fit'>
                                                    <CoinImage address={filteredData?.loanToken || ""} />
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
                                disabled={isWithdrawConfirming || isWithdrawPending}
                            >
                                {isWithdrawConfirming ? 'Confirming...' : isWithdrawPending ? 'Pending...' : 'Withdraw'}
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