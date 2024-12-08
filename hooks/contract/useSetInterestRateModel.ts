import { toast } from "sonner";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { ADDRESS_ARTE } from "@/constants/config";
import { mockArteABI } from "@/lib/abi/mockArteABI";

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
                abi: mockArteABI,
                address: ADDRESS_ARTE,
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