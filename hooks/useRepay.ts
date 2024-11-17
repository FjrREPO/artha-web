import { toast } from "sonner";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { ADDRESS_ARTHA } from "@/constants/config";
import { mockArthaABI } from "@/lib/abi/mockArthaABI";

export const useRepay = () => {
    const {
        data: repayHash,
        isPending: isRepayPending,
        writeContract: writeRepay
    } = useWriteContract();

    const {
        isLoading: isRepayConfirming,
        isSuccess: isRepayConfirmed
    } = useWaitForTransactionReceipt({
        hash: repayHash,
    });

    const handleRepay = async (id: string, tokenId: string, shares: string, onBehalfOf: string) => {
        try {
            await writeRepay({
                abi: mockArthaABI,
                address: ADDRESS_ARTHA,
                functionName: 'repay',
                args: [
                    id,
                    BigInt(tokenId),
                    BigInt(shares),
                    onBehalfOf as HexAddress
                ],
            });

            while (!isRepayConfirmed) {
                await new Promise(resolve => setTimeout(resolve, 1000));
            }

            toast.success('Repay successfully!');
        } catch (error) {
            console.error('Transaction error:', error);
            toast.error(error instanceof Error ? error.message : 'Transaction failed. Please try again.');
        }
    };

    return {
        repayHash,
        isRepayPending,
        isRepayConfirming,
        isRepayConfirmed,
        handleRepay
    }
}