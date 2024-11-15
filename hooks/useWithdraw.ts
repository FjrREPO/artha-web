import { toast } from "sonner";
import { useAccount, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { ADDRESS_ARTHA } from "@/constants/config";
import { mockArthaABI } from "@/lib/abi/mockArthaABI";

export const useWithdraw = () => {
    const { address } = useAccount()
    
    const {
        data: withdrawHash,
        isPending: isWithdrawPending,
        writeContract: writeWithdraw
    } = useWriteContract();

    const {
        isLoading: isWithdrawConfirming,
        isSuccess: isWithdrawConfirmed
    } = useWaitForTransactionReceipt({
        hash: withdrawHash,
    });

    const handleWithdraw = async (id: string, shares: string, onBehalfOf: string) => {
        try {
            await writeWithdraw({
                abi: mockArthaABI,
                address: ADDRESS_ARTHA,
                functionName: 'withdraw',
                args: [
                    id,
                    BigInt(shares),
                    onBehalfOf as HexAddress,
                    address as HexAddress
                ],
            });

            while (!isWithdrawConfirmed) {
                await new Promise(resolve => setTimeout(resolve, 1000));
            }

            toast.success('Withdraw successfully!');
        } catch (error) {
            console.error('Transaction error:', error);
            toast.error(error instanceof Error ? error.message : 'Transaction failed. Please try again.');
        }
    };

    return {
        withdrawHash,
        isWithdrawPending,
        isWithdrawConfirming,
        isWithdrawConfirmed,
        handleWithdraw
    }
}