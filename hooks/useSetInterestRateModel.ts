import { toast } from "sonner";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { ADDRESS_ARTHA } from "@/constants/config";
import { mockArthaABI } from "@/lib/abi/mockArthaABI";

export const useSetInterestRateModel = () => {

    const {
        data: setInterestRateModelHash,
        isPending: isSetInterestRateModelPending,
        writeContract: writeSetInterestRateModel
    } = useWriteContract();

    const {
        isLoading: isSetInterestRateModelConfirming,
        isSuccess: isSetInterestRateModelConfirmed
    } = useWaitForTransactionReceipt({
        hash: setInterestRateModelHash,
    });

    const handleSetInterestRateModel = async (irm: string, enabled: boolean) => {
        try {
            await writeSetInterestRateModel({
                abi: mockArthaABI,
                address: ADDRESS_ARTHA,
                functionName: 'setInterestRateModel',
                args: [
                    irm as HexAddress,
                    enabled as boolean
                ],
            });

            while (!isSetInterestRateModelConfirmed) {
                await new Promise(resolve => setTimeout(resolve, 1000));
            }

            toast.success('SetInterestRateModel successfully!');
        } catch (error) {
            console.error('Transaction error:', error);
            toast.error(error instanceof Error ? error.message : 'Transaction failed. Please try again.');
        }
    };

    return {
        setInterestRateModelHash,
        isSetInterestRateModelPending,
        isSetInterestRateModelConfirming,
        isSetInterestRateModelConfirmed,
        handleSetInterestRateModel
    }
}