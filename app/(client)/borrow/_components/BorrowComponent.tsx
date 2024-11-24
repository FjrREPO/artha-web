"use client"

import { useForm } from "react-hook-form"
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import { LTVSection } from './LTVSection';
import { DepositAndBorrowSection } from './DepositAndBorrowSection';
import usePools from "@/hooks/graphql/usePools";
import { PoolSchema, SupplyCollateralAndBorrow } from "@/lib/validation/types";
import SkeletonWrapper from "@/components/loader/SkeletonWrapper";
import { CoinImage } from "@/components/coin/CoinImage";
import { CoinSymbol } from "@/components/coin/CoinSymbol";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import SuccessDialog from "@/components/dialog/SuccessDialog";
import { LoadingTransaction } from "@/components/loader/LoadingTransaction";
import { useCallback, useEffect, useState } from "react";
import { useSupplyCollateralAndBorrow } from "@/hooks/contract/useSupplyCollateralAndBorrow";

const BorrowComponent: React.FC = () => {
    const [showSuccessDialog, setShowSuccessDialog] = useState(false);
    const [selectedCollateralToken, setSelectedCollateralToken] = useState<string>("");
    const [selectedBorrowToken, setSelectedBorrowToken] = useState<string>("");
    const [filteredPools, setFilteredPools] = useState<PoolSchema[]>([]);
    const [availableBorrowTokens, setAvailableBorrowTokens] = useState<string[]>([]);

    const { poolData, poolLoading } = usePools();

    const form = useForm<SupplyCollateralAndBorrow>({
        defaultValues: {
            collateralToken: "",
            tokenId: "",
            borrowAmount: "",
            ltv: 0,
            supplyPool: ""
        }
    });

    const uniqueCollateralTokens = Array.from(
        new Set(poolData?.map(pool => pool.collateralToken.collateralToken || "").filter(Boolean))
    );

    const handleCollateralTokenSelect = useCallback((token: string) => {
        setSelectedCollateralToken(token);
        setSelectedBorrowToken("")
        setFilteredPools([]);

        if (poolData) {
            const poolsWithCollateral = poolData.filter(pool => pool.collateralToken.collateralToken === token);

            const borrowTokens = Array.from(
                new Set(poolsWithCollateral.map(pool => pool.loanToken.loanToken || "").filter(Boolean))
            );
            setAvailableBorrowTokens(borrowTokens);
        }
    }, [poolData]);

    const handleBorrowTokenSelect = useCallback((token: string) => {
        setSelectedBorrowToken(token);

        if (poolData && selectedCollateralToken) {
            const filtered = poolData.filter(
                pool => pool.collateralToken.collateralToken === selectedCollateralToken && pool.loanToken.loanToken === token
            );
            setFilteredPools(filtered);
        }
    }, [poolData, selectedCollateralToken]);

    const {
        supplyCollateralAndBorrowHash,
        handleSupplyCollateralAndBorrow,
        isSupplyCollateralAndBorrowConfirmed,
        isSupplyCollateralAndBorrowConfirming,
        isSupplyCollateralAndBorrowPending
    } = useSupplyCollateralAndBorrow()

    const onSubmit = async (data: SupplyCollateralAndBorrow) => {
        await handleSupplyCollateralAndBorrow(data.supplyPool || "", data.tokenId, data.borrowAmount);
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        form.handleSubmit(onSubmit)(e);
    };

    useEffect(() => {
        if (supplyCollateralAndBorrowHash && isSupplyCollateralAndBorrowConfirmed) {
            setShowSuccessDialog(true);
            form.reset();
        }
    }, [supplyCollateralAndBorrowHash, isSupplyCollateralAndBorrowConfirmed, form]);

    return (
        <>
            {(isSupplyCollateralAndBorrowConfirming || isSupplyCollateralAndBorrowPending) && !isSupplyCollateralAndBorrowConfirmed && (
                <LoadingTransaction
                    message={isSupplyCollateralAndBorrowConfirming ? "Submitting..." : "Confirming submission..."}
                />
            )}
            <SuccessDialog
                isOpen={showSuccessDialog}
                onClose={() => setShowSuccessDialog(false)}
                txHash={supplyCollateralAndBorrowHash as HexAddress || ""}
                processName="Supply and Borrow"
            />
            <div className='w-full flex flex-col gap-4'>
                <div className='flex flex-col gap-1 max-w-lg'>
                    <Label className='text-2xl'>Artha Borrow</Label>
                    <Label className='text-md text-textGraycustom'>
                        Borrow here. Choose based on your risk tolerance. Remember to DYOR (Do Your Own Research).
                    </Label>
                </div>
                <div className='flex flex-col-reverse lg:flex-row w-full gap-5'>
                    <div className='w-full lg:w-4/6 space-y-4'>
                        <Form {...form}>
                            <form onSubmit={handleFormSubmit} className="space-y-4">
                                <DepositAndBorrowSection
                                    form={form}
                                    poolLoading={poolLoading}
                                    uniqueCollateralTokens={uniqueCollateralTokens}
                                    availableBorrowTokens={availableBorrowTokens}
                                    handleCollateralTokenSelect={handleCollateralTokenSelect}
                                    handleBorrowTokenSelect={handleBorrowTokenSelect}
                                    selectedCollateralToken={selectedCollateralToken}
                                    selectedBorrowToken={selectedBorrowToken}
                                />
                                <div className="flex flex-col gap-4">
                                    <Card>
                                        <CardContent className="p-6">
                                            <div className="space-y-4">
                                                <FormField
                                                    control={form.control}
                                                    name="supplyPool"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="text-lg font-semibold">Select Pool</FormLabel>
                                                            <SkeletonWrapper isLoading={poolLoading}>
                                                                <Select
                                                                    onValueChange={(value) => {
                                                                        field.onChange(value);
                                                                    }}
                                                                    value={field.value}
                                                                    disabled={poolLoading || filteredPools?.length === 0}
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
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                                <LTVSection form={form} poolData={poolData} poolLoading={poolLoading} />
                                <Button
                                    type="submit"
                                    className="w-full"
                                    onClick={handleFormSubmit}
                                >
                                    Borrow
                                </Button>
                            </form>
                        </Form>
                    </div>
                    <div className='w-full lg:w-2/6'>
                        <Card className='sticky top-4'>
                            <CardContent className='p-6 space-y-6'>
                                <div>
                                    <Label className='text-lg'>Borrow Rate</Label>
                                    <div className='text-4xl font-bold mt-2'>8.51%</div>
                                    <Label className='font-normal text-muted-foreground mt-2'>
                                        Borrow token directly from artha finance
                                    </Label>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BorrowComponent;