"use client"

import SuccessDialog from '@/components/dialog/SuccessDialog'
import { LoadingTransaction } from '@/components/loader/LoadingTransaction'
import { NftImage } from '@/components/nft/NftImage'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useRepay } from '@/hooks/contract/useRepay'
import { AlchemyNftSchema, PoolSchema } from '@/lib/validation/types'
import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useAccount } from 'wagmi'

interface RepayProps {
    filteredData?: PoolSchema;
    nftData?: AlchemyNftSchema
}

interface RepayFormValues {
    repayAmount: string;
}

export default function Repay({ filteredData, nftData }: RepayProps) {
    const { address } = useAccount();

    const [showSuccessDialog, setShowSuccessDialog] = useState(false);

    const {
        repayHash,
        handleRepay,
        isRepayConfirmed,
        isRepayConfirming,
        isRepayPending
    } = useRepay();

    const form = useForm<RepayFormValues>({
        defaultValues: {
            repayAmount: ''
        }
    });

    const handleSubmit = async (data: RepayFormValues) => {
        await handleRepay(filteredData?.id ?? "", data.repayAmount, nftData?.tokenId ?? "", address ?? "");
    };

    useEffect(() => {
        if (repayHash && isRepayConfirmed) {
            setShowSuccessDialog(true);
            form.reset();
        }
    }, [repayHash, isRepayConfirmed, form]);

    if (!filteredData) {
        return (
            <Card className="w-full p-5">
                <CardContent className="flex justify-center items-center p-4">
                    <Label>No data available</Label>
                </CardContent>
            </Card>
        );
    }

    return (
        <>
            {(isRepayConfirming || isRepayPending) && !isRepayConfirmed && (
                <LoadingTransaction
                    message={isRepayConfirming ? "Repaying..." : "Confirming repay..."}
                />
            )}
            <SuccessDialog
                isOpen={showSuccessDialog}
                onClose={() => setShowSuccessDialog(false)}
                txHash={repayHash as HexAddress || ""}
                processName="Repay"
            />
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col gap-5">
                    <Card className="w-full p-5">
                        <CardContent className="flex flex-col gap-5 p-0">
                            <div className="flex flex-row justify-between items-center">
                                <Label>Repay</Label>
                            </div>
                            <FormField
                                control={form.control}
                                name="repayAmount"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <div className="relative">
                                                <Input
                                                    {...field}
                                                    className="w-full pr-10 py-7 rounded-xl"
                                                    type="number"
                                                    min={0}
                                                    placeholder="Enter repay amount"
                                                />
                                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-fit cursor-pointer">
                                                    <NftImage path={nftData?.contract.openSeaMetadata.imageUrl || ""} />
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
                                disabled={isRepayConfirming || isRepayPending}
                            >
                                {isRepayConfirming ? 'Confirming...' : isRepayPending ? 'Pending...' : 'Repay'}
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
    )
}