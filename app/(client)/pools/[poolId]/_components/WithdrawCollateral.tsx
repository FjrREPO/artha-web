import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { useAccount } from 'wagmi';
import { AlchemyNftSchema, PoolSchema } from '@/lib/validation/types';
import { useWithdrawCollateral } from '@/hooks/contract/useWithdrawCollateral';
import { LoadingTransaction } from '@/components/loader/LoadingTransaction';
import SuccessDialog from '@/components/dialog/SuccessDialog';
import { useEffect, useState } from 'react';
import { NftImage } from '@/components/nft/NftImage';

interface WithdrawCollateralProps {
    nftData?: AlchemyNftSchema;
    filteredData?: PoolSchema;
}

interface FormData {
    tokenId: string;
}

export default function WithdrawCollateral({ nftData, filteredData }: WithdrawCollateralProps) {
    const { address } = useAccount();

    const [showSuccessDialog, setShowSuccessDialog] = useState(false);

    const form = useForm<FormData>({
        defaultValues: {
            tokenId: ''
        }
    });

    const {
        handleWithdrawCollateral,
        isWithdrawCollateralPending,
        isWithdrawCollateralConfirming,
        isWithdrawCollateralConfirmed,
        withdrawCollateralHash
    } = useWithdrawCollateral();

    const handleSubmit = async () => {
        await handleWithdrawCollateral(filteredData?.id ?? "", nftData?.tokenId ?? "", address ?? "");
    };

    useEffect(() => {
        if (withdrawCollateralHash && isWithdrawCollateralConfirmed) {
            setShowSuccessDialog(true);
            form.reset();
        }
    }, [withdrawCollateralHash, isWithdrawCollateralConfirmed, form]);

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
            {(isWithdrawCollateralConfirming || isWithdrawCollateralPending) && (
                <LoadingTransaction
                    message={isWithdrawCollateralConfirming ? "Withdrawing..." : "Confirming withdraw..."}
                />
            )}
            <SuccessDialog
                isOpen={showSuccessDialog}
                onClose={() => setShowSuccessDialog(false)}
                txHash={withdrawCollateralHash as HexAddress || ""}
                processName="Withdraw Collateral"
            />
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col gap-5">
                    <Card className="w-full p-5">
                        <CardContent className="flex flex-col gap-5 p-0">
                            <div className="flex flex-row justify-between items-center">
                                <Label>Withdraw Collateral</Label>
                            </div>
                            <FormField
                                control={form.control}
                                name="tokenId"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <div className="relative">
                                                <Input
                                                    {...field}
                                                    className="w-full pr-10 py-7 rounded-xl hidden"
                                                    type="text"
                                                    placeholder="Enter token id"
                                                />
                                                <Button
                                                    value={nftData?.tokenId}
                                                    variant={"ghost"}
                                                    className="w-full h-auto flex justify-start items-center gap-4 py-4"
                                                    type='button'
                                                >
                                                    <NftImage path={nftData?.contract.openSeaMetadata.imageUrl || ""} />
                                                    <div className="flex flex-col items-start justify-center gap-1">
                                                        <Label className="cursor-pointer">{nftData?.contract.symbol}</Label>
                                                        <Label className="cursor-pointer text-gray-500 text-xs">Token id: {nftData?.tokenId}</Label>
                                                    </div>
                                                </Button>
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button
                                type="submit"
                                className="w-full"
                                disabled={isWithdrawCollateralPending || isWithdrawCollateralConfirming}
                            >
                                {isWithdrawCollateralPending
                                    ? 'Withdrawing Collateral...'
                                    : isWithdrawCollateralConfirming
                                        ? 'Confirming Transaction...'
                                        : 'Withdraw Collateral'
                                }
                            </Button>
                        </CardContent>
                    </Card>
                </form>
            </Form>
        </>
    );
}