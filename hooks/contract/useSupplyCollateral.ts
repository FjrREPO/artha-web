import { toast } from "sonner";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { ADDRESS_ARTE } from "@/constants/config";
import { mockArteABI } from "@/lib/abi/mockArteABI";

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
                abi: mockArteABI,
                address: ADDRESS_ARTE,
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