import { toast } from "sonner";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { mockCuratorABI } from "@/lib/abi/mockCuratorABI";

export const useSupplyCollateralCurator = (curatorAddress: HexAddress) => {
    const {
        data: supplyCollateralCuratorHash,
        isPending: isSupplyCollateralCuratorPending,
        writeContract: writeSupplyCollateralCurator
    } = useWriteContract();

    const {
        isLoading: isSupplyCollateralCuratorConfirming,
        isSuccess: isSupplyCollateralCuratorConfirmed
    } = useWaitForTransactionReceipt({
        hash: supplyCollateralCuratorHash
    });

    const handleSupplyCollateralCurator = async (
        tokenId: string
    ) => {
        try {
            await writeSupplyCollateralCurator({
                abi: mockCuratorABI,
                address: curatorAddress,
                functionName: 'deposit',
                args: [
                    BigInt(tokenId),
                    curatorAddress as HexAddress
                ],
            });

            while (!isSupplyCollateralCuratorConfirmed) {
                await new Promise(resolve => setTimeout(resolve, 1000));
            }

            toast.success('SupplyCollateral curator successfully!');
        } catch (error) {
            console.error('Transaction error:', error);
            toast.error(error instanceof Error ? error.message : 'Transaction failed. Please try again.');
        }
    };

    return {
        supplyCollateralCuratorHash,
        isSupplyCollateralCuratorPending,
        isSupplyCollateralCuratorConfirming,
        isSupplyCollateralCuratorConfirmed,
        handleSupplyCollateralCurator
    }
}