"use client"

import React, { useCallback, useEffect, useState } from 'react';
import { Wallet } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { CoinImage } from '@/components/coin/CoinImage';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { CoinMarketCapSchema, PoolSchema } from '@/lib/validation/types';
import { CryptoToken } from '@/constants/cryptoToken';
import { DialogSelectToken } from '@/components/dialog/DialogSelectToken';
import { LoadingTransaction } from '@/components/loader/LoadingTransaction';
import { SuccessDialog } from '@/components/dialog/SuccessDialog';
import { useAccount } from 'wagmi';
import { useERC721Balance } from '@/hooks/useERC721Balance';
import { useBorrow } from '@/hooks/useBorrow';
import { coinMarketCapSchema } from '@/lib/validation/schemas';

interface BorrowFormProps {
    filteredData?: PoolSchema;
}

interface BorrowFormValues {
    borrowAmount: string;
}

export default function BorrowForm({
    filteredData
}: BorrowFormProps) {
    const { address } = useAccount();
    const [isBorrowDialogOpen, setIsBorrowDialogOpen] = useState(false);
    const [selectedBorrowToken, setSelectedBorrowToken] = useState(CryptoToken[0]);
    const [showSuccessDialog, setShowSuccessDialog] = useState(false);
    const { balance } = useERC721Balance(address as HexAddress, filteredData?.collateralToken as HexAddress);

    const {
        borrowHash,
        handleBorrow,
        isBorrowConfirmed,
        isBorrowConfirming,
        isBorrowPending
    } = useBorrow();

    const form = useForm<BorrowFormValues>({
        defaultValues: {
            borrowAmount: ''
        }
    });

    const findTokenIdByAddress = filteredData?.collateralToken
        ? CryptoToken.find((token) =>
            token.contract_address[0].contract_address.toLowerCase() === filteredData.collateralToken!.toLowerCase()
        )?.id
        : undefined;

    const handleSubmit = async (data: BorrowFormValues) => {
        await handleBorrow(filteredData?.id ?? "", data.borrowAmount, findTokenIdByAddress?.toString() ?? "0");
    };

    const handleMaxBorrow = () => {
        form.setValue('borrowAmount', balance?.toString() ?? "0");
    };

    const handleSelectBorrowToken = useCallback((token: CoinMarketCapSchema) => {
        const tokenSelected = CryptoToken.find((c) =>
            c.contract_address[0].contract_address.toLowerCase() === token.contract_address[0].contract_address.toLowerCase()
        );
        setSelectedBorrowToken(tokenSelected ?? CryptoToken[0]);
        setIsBorrowDialogOpen(false);
    }, []);

    useEffect(() => {
        if (borrowHash && isBorrowConfirmed) {
            setShowSuccessDialog(true);
            form.reset();
        }
    }, [borrowHash, isBorrowConfirmed, form]);

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
            {(isBorrowConfirming || isBorrowPending) && (
                <LoadingTransaction
                    message={isBorrowConfirming ? "Creating..." : "Confirming create..."}
                />
            )}
            <SuccessDialog
                isOpen={showSuccessDialog}
                onClose={() => setShowSuccessDialog(false)}
                txHash={borrowHash as HexAddress || ""}
                processName="Create Pool"
            />
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col gap-5">
                    <Card className="w-full p-5">
                        <CardContent className="flex flex-col gap-5 p-0">
                            <div className="flex flex-row justify-between items-center">
                                <Label>Borrow</Label>
                                <div className="flex flex-row gap-2 items-center">
                                    <Wallet />
                                    <Label>0</Label>
                                    <Button
                                        type="button"
                                        variant="outline"
                                        className="cursor-pointer px-3"
                                        onClick={handleMaxBorrow}
                                    >
                                        <Label className="text-[11px] cursor-pointer">Max</Label>
                                    </Button>
                                </div>
                            </div>
                            <FormField
                                control={form.control}
                                name="borrowAmount"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <div className="relative">
                                                <Input
                                                    {...field}
                                                    className="w-full pr-10 py-7 rounded-xl"
                                                    type="number"
                                                    min={0}
                                                    placeholder="Enter borrow amount"
                                                />
                                                <DialogSelectToken
                                                    tokenUsed={CryptoToken.map((token) => {
                                                        const validatedToken = coinMarketCapSchema.parse(token);
                                                        return {
                                                            ...validatedToken,
                                                            "tag-names": validatedToken["tag-names"] || [],
                                                            "tag-groups": validatedToken["tag-groups"] || [],
                                                        };
                                                    })}
                                                    isDialogOpen={isBorrowDialogOpen}
                                                    setDialogOpen={setIsBorrowDialogOpen}
                                                    handleSelect={handleSelectBorrowToken}
                                                    trigger={
                                                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-fit cursor-pointer">
                                                            <CoinImage address={selectedBorrowToken.contract_address[0].contract_address || ""} />
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

                    <Button
                        type="submit"
                        className="w-full"
                        disabled={isBorrowConfirming || isBorrowPending}
                    >
                        {isBorrowConfirming ? 'Confirming...' : isBorrowPending ? 'Pending...' : 'Borrow'}
                    </Button>

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