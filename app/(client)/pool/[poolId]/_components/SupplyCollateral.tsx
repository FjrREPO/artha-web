import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { useAccount } from 'wagmi';
import { useOwnerNft } from '@/hooks/useOwnerNft';
import { DialogSelectNft } from '@/components/dialog/DialogSelectNft';
import { AlchemyNftSchema, PoolSchema } from '@/lib/validation/types';
import { useSupplyCollateral } from '@/hooks/useSupplyCollateral';
import { LoadingTransaction } from '@/components/loader/LoadingTransaction';
import SuccessDialog from '@/components/dialog/SuccessDialog';
import { useEffect, useState } from 'react';
import { NftImage } from '@/components/nft/NftImage';

interface SupplyCollateralProps {
    filteredData?: PoolSchema;
}

interface FormData {
    tokenId: string;
}

export default function SupplyCollateral({ filteredData }: SupplyCollateralProps) {
    const { address } = useAccount();
    const { nftData, nftLoading } = useOwnerNft();

    const [showSuccessDialog, setShowSuccessDialog] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [selectedNft, setSelectedNft] = useState<AlchemyNftSchema | null>(null);

    const form = useForm<FormData>({
        defaultValues: {
            tokenId: ''
        }
    });

    useEffect(() => {
        if (nftData && nftData.length > 0 && !selectedNft) {
            setSelectedNft(nftData[0]);
            form.setValue('tokenId', nftData[0].tokenId);
        }
    }, [nftData, selectedNft, form]);

    const {
        handleSupplyCollateral,
        isSupplyCollateralPending,
        isSupplyCollateralConfirming,
        isSupplyCollateralConfirmed,
        supplyCollateralHash
    } = useSupplyCollateral();

    const handleSubmit = async (data: FormData) => {
        await handleSupplyCollateral(filteredData?.MockArthaEvent_id ?? "", data.tokenId, address ?? "");
    };

    useEffect(() => {
        if (supplyCollateralHash && isSupplyCollateralConfirmed) {
            setShowSuccessDialog(true);
            form.reset();
        }
    }, [supplyCollateralHash, isSupplyCollateralConfirmed, form]);

    const handleSelectNft = (nft: AlchemyNftSchema) => {
        setSelectedNft(nft);
        setIsDialogOpen(false);
        form.setValue('tokenId', nft.tokenId);
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
            {(isSupplyCollateralConfirming || isSupplyCollateralPending) && (
                <LoadingTransaction
                    message={isSupplyCollateralConfirming ? "Supplying..." : "Confirming supply..."}
                />
            )}
            <SuccessDialog
                isOpen={showSuccessDialog}
                onClose={() => setShowSuccessDialog(false)}
                txHash={supplyCollateralHash as HexAddress || ""}
                processName="Supply Collateral"
            />
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col gap-5">
                    <Card className="w-full p-5">
                        <CardContent className="flex flex-col gap-5 p-0">
                            <div className="flex flex-row justify-between items-center">
                                <Label>Deposit Collateral</Label>
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
                                                    className="w-full pr-10 py-7 rounded-xl"
                                                    type="text"
                                                    placeholder="Enter token id"
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
                                disabled={isSupplyCollateralPending || isSupplyCollateralConfirming}
                            >
                                {isSupplyCollateralPending
                                    ? 'Supplying Collateral...'
                                    : isSupplyCollateralConfirming
                                        ? 'Confirming Transaction...'
                                        : 'Add Collateral'
                                }
                            </Button>
                        </CardContent>
                    </Card>
                </form>
            </Form>
        </>
    );
}