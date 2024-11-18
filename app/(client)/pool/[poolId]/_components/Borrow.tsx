"use client"

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { AlchemyNftSchema, PoolSchema } from '@/lib/validation/types';
import { LoadingTransaction } from '@/components/loader/LoadingTransaction';
import { SuccessDialog } from '@/components/dialog/SuccessDialog';
import { useBorrow } from '@/hooks/useBorrow';
import { DialogSelectNft } from '@/components/dialog/DialogSelectNft';
import { NftImage } from '@/components/nft/NftImage';
import { useOwnerNft } from '@/hooks/useOwnerNft';

interface BorrowProps {
    filteredData?: PoolSchema;
}

interface BorrowValues {
    borrowAmount: string;
}

export default function Borrow({
    filteredData
}: BorrowProps) {
    const { nftData, nftLoading } = useOwnerNft();

    const [showSuccessDialog, setShowSuccessDialog] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [selectedNft, setSelectedNft] = useState<AlchemyNftSchema | null>(null);

    const {
        borrowHash,
        handleBorrow,
        isBorrowConfirmed,
        isBorrowConfirming,
        isBorrowPending
    } = useBorrow();

    const form = useForm<BorrowValues>({
        defaultValues: {
            borrowAmount: ''
        }
    });

    useEffect(() => {
        if (nftData && nftData.length > 0 && !selectedNft) {
            setSelectedNft(nftData[0]);
        }
    }, [nftData, selectedNft, form]);

    const handleSubmit = async (data: BorrowValues) => {
        await handleBorrow(filteredData?.id ?? "", data.borrowAmount, selectedNft?.tokenId ?? "");
    };

    useEffect(() => {
        if (borrowHash && isBorrowConfirmed) {
            setShowSuccessDialog(true);
            form.reset();
        }
    }, [borrowHash, isBorrowConfirmed, form]);

    const handleSelectNft = (nft: AlchemyNftSchema) => {
        setSelectedNft(nft);
        setIsDialogOpen(false);
    };

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
            {(isBorrowConfirming || isBorrowPending) && (
                <LoadingTransaction
                    message={isBorrowConfirming ? "Borrowing..." : "Confirming borrow..."}
                />
            )}
            <SuccessDialog
                isOpen={showSuccessDialog}
                onClose={() => setShowSuccessDialog(false)}
                txHash={borrowHash as HexAddress || ""}
                processName="Borrow"
            />
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col gap-5">
                    <Card className="w-full p-5">
                        <CardContent className="flex flex-col gap-5 p-0">
                            <div className="flex flex-row justify-between items-center">
                                <Label>Borrow</Label>
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
                                                <DialogSelectNft
                                                    nftData={nftData}
                                                    isDialogOpen={isDialogOpen}
                                                    setDialogOpen={setIsDialogOpen}
                                                    handleSelect={handleSelectNft}
                                                    nftLoading={nftLoading}
                                                    trigger={
                                                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-fit cursor-pointer">
                                                            <NftImage path={selectedNft?.contract.openSeaMetadata.imageUrl || ""} />
                                                        </div>
                                                    }
                                                />
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button
                                type="submit"
                                className="w-full"
                                disabled={isBorrowConfirming || isBorrowPending}
                            >
                                {isBorrowConfirming ? 'Confirming...' : isBorrowPending ? 'Pending...' : 'Borrow'}
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