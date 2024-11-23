import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import SkeletonWrapper from '@/components/loader/SkeletonWrapper';
import { UseFormReturn } from 'react-hook-form';
import { AlchemyNftSchema, SupplyCollateralAndBorrow } from '@/lib/validation/types';
import { NftImage } from '@/components/nft/NftImage';
import { Button } from '@/components/ui/button';
import { DialogSelectNft } from '@/components/dialog/DialogSelectNft';
import { Label } from '@/components/ui/label';

interface Props {
    form: UseFormReturn<SupplyCollateralAndBorrow>;
    nftData: AlchemyNftSchema[];
    nftLoading: boolean;
}

export const DepositAndBorrowSection = ({ form, nftData, nftLoading }: Props) => {
    const [selectedNft, setSelectedNft] = useState<AlchemyNftSchema | null>(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    useEffect(() => {
        if (!nftLoading && nftData && nftData.length > 0 && !selectedNft) {
            const defaultNft = nftData[0];
            setSelectedNft(defaultNft);
            form.setValue('tokenId', defaultNft.tokenId);
        }
    }, [nftData, nftLoading, form, selectedNft]);

    const handleSelectNft = (nft: AlchemyNftSchema) => {
        setSelectedNft(nft);
        setIsDialogOpen(false);
        form.setValue('tokenId', nft.tokenId);
    };

    const renderNftContent = () => {
        if (nftLoading) {
            return (
                <Button variant="outline" className="w-full h-auto py-4" disabled>
                    Loading NFTs...
                </Button>
            );
        }

        if (!nftData || nftData.length === 0) {
            return (
                <Button variant="outline" className="w-full h-auto py-4" disabled>
                    No NFTs available
                </Button>
            );
        }

        return (
            <Button
                value={selectedNft?.tokenId}
                variant="outline"
                className="w-full h-auto flex justify-start items-center gap-4 py-4"
            >
                <NftImage path={selectedNft?.contract.openSeaMetadata.imageUrl || ""} />
                <div className="flex flex-col items-start justify-center gap-1">
                    <Label className="cursor-pointer">{selectedNft?.contract.symbol}</Label>
                    <Label className="cursor-pointer text-gray-500 text-xs">
                        Token id: {selectedNft?.tokenId}
                    </Label>
                </div>
            </Button>
        );
    };

    return (
        <div className="flex flex-col lg:flex-row gap-2 h-fit">
            <div className="w-full lg:w-1/2">
                <Card className="flex w-full">
                    <CardContent className="flex w-full">
                        <FormField
                            control={form.control}
                            name="tokenId"
                            render={({ field }) => (
                                <FormItem className="w-full py-5 flex flex-col gap-3">
                                    <FormLabel className="text-xl">Supply Collateral</FormLabel>
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
                                                    trigger={renderNftContent()}
                                                />
                                            </SkeletonWrapper>
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </CardContent>
                </Card>
            </div>
            <div className="w-full lg:w-1/2 h-full">
                <Card className="flex w-full">
                    <CardContent className="flex w-full">
                        <FormField
                            control={form.control}
                            name="borrowAmount"
                            render={({ field }) => (
                                <FormItem className="w-full py-5 flex flex-col gap-3">
                                    <FormLabel className="text-xl">Borrow</FormLabel>
                                    <FormControl>
                                        <SkeletonWrapper isLoading={nftLoading}>
                                            <div className="relative">
                                                <Input
                                                    {...field}
                                                    className="w-full pr-10 py-8 rounded-lg"
                                                    type="number"
                                                    min={0}
                                                    placeholder="Enter borrow amount"
                                                />
                                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-fit cursor-pointer">
                                                    <NftImage path={selectedNft?.contract.openSeaMetadata.imageUrl || ""} />
                                                </div>
                                            </div>
                                        </SkeletonWrapper>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default DepositAndBorrowSection;