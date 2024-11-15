import { toast } from "sonner";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { ADDRESS_ARTHA } from "@/constants/config";
import { mockArthaABI } from "@/lib/abi/mockArthaABI";

export const useBid = () => {
    const {
        data: bidHash,
        isPending: isBidPending,
        writeContract: writeBid
    } = useWriteContract();

    const {
        isLoading: isBidConfirming,
        isSuccess: isBidConfirmed
    } = useWaitForTransactionReceipt({
        hash: bidHash,
    });

    const handleBid = async (id: string, tokenId: string, amount: string) => {
        try {
            await writeBid({
                abi: mockArthaABI,
                address: ADDRESS_ARTHA,
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
        handleBid
    }
}