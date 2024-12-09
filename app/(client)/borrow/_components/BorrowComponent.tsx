"use client"

import { useForm } from "react-hook-form"
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import { LTVSection } from './LTVSection';
import { DepositAndBorrowSection } from './DepositAndBorrowSection';
import usePools from "@/hooks/graphql/usePools";
import { CoinMarketCapSchema, SupplyCollateralAndBorrow } from "@/lib/validation/types";
import SuccessDialog from "@/components/dialog/SuccessDialog";
import { LoadingTransaction } from "@/components/loader/LoadingTransaction";
import { useEffect, useMemo, useState } from "react";
import { useSupplyCollateralAndBorrow } from "@/hooks/contract/useSupplyCollateralAndBorrow";
import { useDecimal } from "@/hooks/contract/useDecimal";
import { usePriceOracle } from "@/hooks/contract/usePriceOracle";
import { Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import BorrowDetailsStepper from "./BorrowDetailsStepper";
import { WarningConnectWallet } from "@/components/web3/warning-connect-wallet";
import { useAccount } from "wagmi";

const BorrowComponent: React.FC = () => {
    const [showSuccessDialog, setShowSuccessDialog] = useState(false);
    const [selectedBorrowToken, setSelectedBorrowToken] = useState<CoinMarketCapSchema | null>(null);

    const { address } = useAccount();

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

    const supplyPool = form.watch('supplyPool');

    const selectedPool = useMemo(() =>
        poolData?.find((pool) => pool.id === supplyPool),
        [poolData, supplyPool]
    );

    const { decimal } = useDecimal(selectedPool?.loanToken.loanToken as HexAddress || '')
    const { priceOracle } = usePriceOracle(selectedPool?.oracle as HexAddress, form.watch('tokenId'));

    const {
        supplyCollateralAndBorrowHash,
        handleSupplyCollateralAndBorrow,
        isSupplyCollateralAndBorrowConfirmed,
        isSupplyCollateralAndBorrowConfirming,
        isSupplyCollateralAndBorrowError,
        isSupplyCollateralAndBorrowStatus,
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
            {address ? (
                <>
                    {(isSupplyCollateralAndBorrowConfirming || isSupplyCollateralAndBorrowPending) && !isSupplyCollateralAndBorrowConfirmed && !isSupplyCollateralAndBorrowError && isSupplyCollateralAndBorrowStatus != "error" && (
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
                            <Label className='text-2xl text-primary'>Arte Borrow</Label>
                            <Label className='text-md text-muted-foreground flex items-center gap-2'>
                                <Info size={16} /> Borrow here. Choose based on your risk tolerance.
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <span className='underline'>DYOR</span>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            Do Your Own Research: Always understand the risks before borrowing.
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </Label>
                        </div>
                        <div className='flex flex-col lg:flex-row w-full gap-5'>
                            <div className='w-full lg:w-4/6 space-y-4'>
                                <Form {...form}>
                                    <form onSubmit={handleFormSubmit} className="space-y-4">
                                        <DepositAndBorrowSection
                                            form={form}
                                            poolData={poolData}
                                            poolLoading={poolLoading}
                                            selectedBorrowToken={selectedBorrowToken}
                                            setSelectedBorrowToken={setSelectedBorrowToken}
                                        />
                                        <LTVSection
                                            form={form}
                                            poolLoading={poolLoading}
                                            selectedPool={selectedPool}
                                            decimal={decimal}
                                            priceOracle={priceOracle as number || 0}
                                        />
                                        <Button
                                            type="submit"
                                            className="w-full"
                                            onClick={handleFormSubmit}
                                            disabled={!form.formState.isValid}
                                        >
                                            Borrow
                                        </Button>
                                    </form>
                                </Form>
                            </div>
                            <div className='w-full lg:w-2/6'>
                                <BorrowDetailsStepper
                                    form={form}
                                    selectedPool={selectedPool}
                                    selectedBorrowToken={selectedBorrowToken as CoinMarketCapSchema || null}
                                    priceOracle={priceOracle as number}
                                    decimal={decimal}
                                />
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <WarningConnectWallet />
            )}
        </>
    );
};

export default BorrowComponent;