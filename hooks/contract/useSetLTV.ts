import { toast } from "sonner";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { ADDRESS_ARTE } from "@/constants/config";
import { mockArteABI } from "@/lib/abi/mockArteABI";

export const useSetLTV = () => {
    const {
        data: setLTVHash,
        isPending: isSetLTVPending,
        writeContract: writeSetLTV
    } = useWriteContract();

    const {
        isLoading: isSetLTVConfirming,
        isSuccess: isSetLTVConfirmed
    } = useWaitForTransactionReceipt({
        hash: setLTVHash,
    });

    const handleSetLTV = async (ltv: string, enabled: boolean) => {
        try {
            await writeSetLTV({
                abi: mockArteABI,
                address: ADDRESS_ARTE,
                functionName: 'setLTV',
                args: [
                    BigInt(ltv),
                    enabled as boolean
                ],
            });

            while (!isSetLTVConfirmed) {
                await new Promise(resolve => setTimeout(resolve, 1000));
            }

            toast.success('SetLTV successfully!');
        } catch (error) {
            console.error('Transaction error:', error);
            toast.error(error instanceof Error ? error.message : 'Transaction failed. Please try again.');
        }
    };

    return {
        setLTVHash,
        isSetLTVPending,
        isSetLTVConfirming,
        isSetLTVConfirmed,
        handleSetLTV
    }
}