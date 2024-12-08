import { toast } from "sonner";
import { useAccount, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { ADDRESS_ARTE } from "@/constants/config";
import { mockArteABI } from "@/lib/abi/mockArteABI";

export const useWithdrawCollateral = () => {
    const { address } = useAccount()
    
    const {
        data: withdrawCollateralHash,
        isPending: isWithdrawCollateralPending,
        writeContract: writeWithdrawCollateral
    } = useWriteContract();

    const {
        isLoading: isWithdrawCollateralConfirming,
        isSuccess: isWithdrawCollateralConfirmed
    } = useWaitForTransactionReceipt({
        hash: withdrawCollateralHash,
    });

    const handleWithdrawCollateral = async (id: string, tokenId: string, onBehalfOf: string) => {
        try {
            await writeWithdrawCollateral({
                abi: mockArteABI,
                address: ADDRESS_ARTE,
                functionName: 'withdrawCollateral',
                args: [
                    id,
                    BigInt(tokenId),
                    onBehalfOf as HexAddress,
                    address as HexAddress
                ],
            });

            while (!isWithdrawCollateralConfirmed) {
                await new Promise(resolve => setTimeout(resolve, 1000));
            }

            toast.success('WithdrawCollateral successfully!');
        } catch (error) {
            console.error('Transaction error:', error);
            toast.error(error instanceof Error ? error.message : 'Transaction failed. Please try again.');
        }
    };

    return {
        withdrawCollateralHash,
        isWithdrawCollateralPending,
        isWithdrawCollateralConfirming,
        isWithdrawCollateralConfirmed,
        handleWithdrawCollateral
    }
}