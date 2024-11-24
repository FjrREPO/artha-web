import { toast } from "sonner";
import { useAccount, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { mockCuratorABI } from "@/lib/abi/mockCuratorABI";

export const useWithdrawCollateralCurator = (curatorAddress: HexAddress) => {
    const { address } = useAccount();
    
    const {
        data: withdrawCollateralCuratorHash,
        isPending: isWithdrawCollateralCuratorPending,
        writeContract: writeWithdrawCollateralCurator
    } = useWriteContract();

    const {
        isLoading: isWithdrawCollateralCuratorConfirming,
        isSuccess: isWithdrawCollateralCuratorConfirmed
    } = useWaitForTransactionReceipt({
        hash: withdrawCollateralCuratorHash
    });

    const handleWithdrawCollateralCurator = async (
        tokenId: string
    ) => {
        try {
            await writeWithdrawCollateralCurator({
                abi: mockCuratorABI,
                address: curatorAddress,
                functionName: 'withdraw',
                args: [
                    BigInt(tokenId),
                    address as HexAddress,
                    curatorAddress as HexAddress
                ],
            });

            while (!isWithdrawCollateralCuratorConfirmed) {
                await new Promise(resolve => setTimeout(resolve, 1000));
            }

            toast.success('WithdrawCollateral curator successfully!');
        } catch (error) {
            console.error('Transaction error:', error);
            toast.error(error instanceof Error ? error.message : 'Transaction failed. Please try again.');
        }
    };

    return {
        withdrawCollateralCuratorHash,
        isWithdrawCollateralCuratorPending,
        isWithdrawCollateralCuratorConfirming,
        isWithdrawCollateralCuratorConfirmed,
        handleWithdrawCollateralCurator
    }
}