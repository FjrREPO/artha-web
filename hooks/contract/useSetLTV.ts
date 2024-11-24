import { toast } from "sonner";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { ADDRESS_ARTHA } from "@/constants/config";
import { mockArthaABI } from "@/lib/abi/mockArthaABI";

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
                abi: mockArthaABI,
                address: ADDRESS_ARTHA,
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