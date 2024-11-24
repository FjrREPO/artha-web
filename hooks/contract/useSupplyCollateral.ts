import { toast } from "sonner";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { ADDRESS_ARTHA } from "@/constants/config";
import { mockArthaABI } from "@/lib/abi/mockArthaABI";

export const useSupplyCollateral = () => {
    const {
        data: supplyCollateralHash,
        isPending: isSupplyCollateralPending,
        writeContract: writeSupplyCollateral
    } = useWriteContract();

    const {
        isLoading: isSupplyCollateralConfirming,
        isSuccess: isSupplyCollateralConfirmed
    } = useWaitForTransactionReceipt({
        hash: supplyCollateralHash,
    });

    const handleSupplyCollateral = async (id: string, tokenId: string, onBehalfOf: string) => {
        try {
            await writeSupplyCollateral({
                abi: mockArthaABI,
                address: ADDRESS_ARTHA,
                functionName: 'supplyCollateral',
                args: [
                    id,
                    BigInt(tokenId),
                    onBehalfOf as HexAddress
                ],
            });

            while (!isSupplyCollateralConfirmed) {
                await new Promise(resolve => setTimeout(resolve, 1000));
            }

            toast.success('SupplyCollateral successfully!');
        } catch (error) {
            console.error('Transaction error:', error);
            toast.error(error instanceof Error ? error.message : 'Transaction failed. Please try again.');
        }
    };

    return {
        supplyCollateralHash,
        isSupplyCollateralPending,
        isSupplyCollateralConfirming,
        isSupplyCollateralConfirmed,
        handleSupplyCollateral
    }
}