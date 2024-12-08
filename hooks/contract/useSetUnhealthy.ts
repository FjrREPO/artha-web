import { toast } from "sonner";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { ADDRESS_ARTE } from "@/constants/config";
import { mockArteABI } from "@/lib/abi/mockArteABI";

export const useSetUnhealthy = () => {
    const {
        data: setUnhealthyHash,
        isPending: isSetUnhealthyPending,
        writeContract: writeSetUnhealthy
    } = useWriteContract();

    const {
        isLoading: isSetUnhealthyConfirming,
        isSuccess: isSetUnhealthyConfirmed
    } = useWaitForTransactionReceipt({
        hash: setUnhealthyHash,
    });

    const handleSetUnhealthy = async (id: string, tokenId: string) => {
        try {
            await writeSetUnhealthy({
                abi: mockArteABI,
                address: ADDRESS_ARTE,
                functionName: 'setUnhealthy',
                args: [
                    id,
                    BigInt(tokenId)
                ],
            });

            while (!isSetUnhealthyConfirmed) {
                await new Promise(resolve => setTimeout(resolve, 1000));
            }

            toast.success('SetUnhealthy successfully!');
        } catch (error) {
            console.error('Transaction error:', error);
            toast.error(error instanceof Error ? error.message : 'Transaction failed. Please try again.');
        }
    };

    return {
        setUnhealthyHash,
        isSetUnhealthyPending,
        isSetUnhealthyConfirming,
        isSetUnhealthyConfirmed,
        handleSetUnhealthy
    }
}