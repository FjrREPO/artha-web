import { toast } from "sonner";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { ADDRESS_ARTE } from "@/constants/config";
import { mockArteABI } from "@/lib/abi/mockArteABI";

export const useBid = () => {
    const {
        data: bidHash,
        isPending: isBidPending,
        writeContract: writeBid
    } = useWriteContract();

    const {
        isLoading: isBidConfirming,
        isSuccess: isBidConfirmed,
        error: bidError
    } = useWaitForTransactionReceipt({
        hash: bidHash,
    });

    const handleBid = async (id: string, tokenId: string, amount: string) => {
        try {
            await writeBid({
                abi: mockArteABI,
                address: ADDRESS_ARTE,
                functionName: 'bid',
                args: [
                    id,
                    BigInt(tokenId),
                    BigInt(amount)
                ],
            });

            while (!isBidConfirmed) {
                await new Promise(resolve => setTimeout(resolve, 1000));
            }

            toast.success('Bid successfully!');
        } catch (error) {
            console.error('Transaction error:', error);
            toast.error(error instanceof Error ? error.message : 'Transaction failed. Please try again.');
        }
    };

    return {
        bidHash,
        isBidPending,
        isBidConfirming,
        isBidConfirmed,
        bidError,
        handleBid
    }
}