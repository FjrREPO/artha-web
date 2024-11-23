import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { DialogSelectNft } from '@/components/dialog/DialogSelectNft';
import { AlchemyNftSchema, EarnSchema } from '@/lib/validation/types';
import { LoadingTransaction } from '@/components/loader/LoadingTransaction';
import SuccessDialog from '@/components/dialog/SuccessDialog';
import { useEffect, useState } from 'react';
import { NftImage } from '@/components/nft/NftImage';
import SkeletonWrapper from '@/components/loader/SkeletonWrapper';
import { useSupplyCollateralCurator } from '@/hooks/useDepositCurator';

interface SupplyCollateralCuratorProps {
    nftData?: AlchemyNftSchema[];
    filteredData?: EarnSchema;
    nftLoading: boolean;
}

interface FormData {
    tokenId: string;
}

export default function SupplyCollateralCurator({ nftData, filteredData, nftLoading }: SupplyCollateralCuratorProps) {
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
        handleSupplyCollateralCurator,
        isSupplyCollateralCuratorPending,
        isSupplyCollateralCuratorConfirming,
        isSupplyCollateralCuratorConfirmed,
        supplyCollateralCuratorHash
    } = useSupplyCollateralCurator(filteredData?.curator as HexAddress);

    const handleSubmit = async (data: FormData) => {
        await handleSupplyCollateralCurator(data.tokenId);
    };

    useEffect(() => {
        if (supplyCollateralCuratorHash && isSupplyCollateralCuratorConfirmed) {
            setShowSuccessDialog(true);
            form.reset();
        }
    }, [supplyCollateralCuratorHash, isSupplyCollateralCuratorConfirmed, form]);

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
            {(isSupplyCollateralCuratorConfirming || isSupplyCollateralCuratorPending) && (
                <LoadingTransaction
                    message={isSupplyCollateralCuratorConfirming ? "Supplying..." : "Confirming supply..."}
                />
            )}
            <SuccessDialog
                isOpen={showSuccessDialog}
                onClose={() => setShowSuccessDialog(false)}
                txHash={supplyCollateralCuratorHash as HexAddress || ""}
                processName="Supply Collateral"
            />
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col gap-5">
                    <Card className="w-full p-5">
                        <CardContent className="flex flex-col gap-5 p-0">
                            <div className="flex flex-row justify-between items-center">
                                <Label>Supply Collateral</Label>
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
                                                <SkeletonWrapper isLoading={nftLoading}>
                                                    <DialogSelectNft
                                                        nftData={nftData || []}
                                                        isDialogOpen={isDialogOpen}
                                                        setDialogOpen={setIsDialogOpen}
                                                        handleSelect={handleSelectNft}
                                                        nftLoading={nftLoading}
                                                        trigger={
                                                            <Button
                                                                value={selectedNft?.tokenId}
                                                                variant={"outline"}
                                                                className="w-full h-auto flex justify-start items-center gap-4 py-4"
                                                            >
                                                                <NftImage path={selectedNft?.contract.openSeaMetadata.imageUrl || ""} />
                                                                <div className="flex flex-col items-start justify-center gap-1">
                                                                    <Label className="cursor-pointer">{selectedNft?.contract.symbol}</Label>
                                                                    <Label className="cursor-pointer text-gray-500 text-xs">Token id: {selectedNft?.tokenId}</Label>
                                                                </div>
                                                            </Button>
                                                        }
                                                    />
                                                </SkeletonWrapper>
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button
                                type="submit"
                                className="w-full"
                                disabled={isSupplyCollateralCuratorPending || isSupplyCollateralCuratorConfirming}
                            >
                                {isSupplyCollateralCuratorPending
                                    ? 'Supplying Collateral...'
                                    : isSupplyCollateralCuratorConfirming
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