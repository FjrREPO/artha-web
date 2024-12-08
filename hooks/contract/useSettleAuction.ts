import { toast } from "sonner";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { ADDRESS_ARTE } from "@/constants/config";
import { mockArteABI } from "@/lib/abi/mockArteABI";

export const useSettleAuction = () => {

    const {
        data: settleAuctionHash,
        isPending: isSettleAuctionPending,
        writeContract: writeSettleAuction
    } = useWriteContract();

    const {
        isLoading: isSettleAuctionConfirming,
        isSuccess: isSettleAuctionConfirmed
    } = useWaitForTransactionReceipt({
        hash: settleAuctionHash,
    });

    const handleSettleAuction = async (id: string, tokenId: string) => {
        try {
            await writeSettleAuction({
                abi: mockArteABI,
                address: ADDRESS_ARTE,
                functionName: 'settleAuction',
                args: [
                    id,
                    BigInt(tokenId)
                ],
            });

            while (!isSettleAuctionConfirmed) {
                await new Promise(resolve => setTimeout(resolve, 1000));
            }

            toast.success('SettleAuction successfully!');
        } catch (error) {
            console.error('Transaction error:', error);
            toast.error(error instanceof Error ? error.message : 'Transaction failed. Please try again.');
        }
    };

    return {
        settleAuctionHash,
        isSettleAuctionPending,
        isSettleAuctionConfirming,
        isSettleAuctionConfirmed,
        handleSettleAuction
    }
}