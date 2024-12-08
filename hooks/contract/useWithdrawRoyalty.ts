import { toast } from "sonner";
import { useAccount, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { ADDRESS_ARTE } from "@/constants/config";
import { mockArteABI } from "@/lib/abi/mockArteABI";

export const useWithdrawRoyalty = () => {
    const { address } = useAccount()
    
    const {
        data: withdrawRoyaltyHash,
        isPending: isWithdrawRoyaltyPending,
        writeContract: writeWithdrawRoyalty
    } = useWriteContract();

    const {
        isLoading: isWithdrawRoyaltyConfirming,
        isSuccess: isWithdrawRoyaltyConfirmed
    } = useWaitForTransactionReceipt({
        hash: withdrawRoyaltyHash,
    });

    const handleWithdrawRoyalty = async (id: string, tokenId: string, onBehalfOf: string) => {
        try {
            await writeWithdrawRoyalty({
                abi: mockArteABI,
                address: ADDRESS_ARTE,
                functionName: 'withdrawRoyalty',
                args: [
                    id,
                    BigInt(tokenId),
                    onBehalfOf as HexAddress,
                    address as HexAddress
                ],
            });

            while (!isWithdrawRoyaltyConfirmed) {
                await new Promise(resolve => setTimeout(resolve, 1000));
            }

            toast.success('WithdrawRoyalty successfully!');
        } catch (error) {
            console.error('Transaction error:', error);
            toast.error(error instanceof Error ? error.message : 'Transaction failed. Please try again.');
        }
    };

    return {
        withdrawRoyaltyHash,
        isWithdrawRoyaltyPending,
        isWithdrawRoyaltyConfirming,
        isWithdrawRoyaltyConfirmed,
        handleWithdrawRoyalty
    }
}