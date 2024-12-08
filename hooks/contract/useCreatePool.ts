import { toast } from "sonner";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { ADDRESS_ARTE } from "@/constants/config";
import { mockArteABI } from "@/lib/abi/mockArteABI";

export const useCreatePool = () => {
    const {
        data: createPoolHash,
        isPending: isCreatePoolPending,
        writeContract: writeCreatePool
    } = useWriteContract();

    const {
        isLoading: isCreatePoolConfirming,
        isSuccess: isCreatePoolConfirmed
    } = useWaitForTransactionReceipt({
        hash: createPoolHash,
    });

    const handleCreatePool = async (
        collateralToken: string, 
        loanToken: string, 
        oracle: string, 
        irm: string, 
        ltv: string, 
        lth: string
    ) => {
        try {
            writeCreatePool({
                abi: mockArteABI,
                address: ADDRESS_ARTE,
                functionName: 'createPool',
                args: [{
                    collateralToken: collateralToken as HexAddress,
                    loanToken: loanToken as HexAddress,
                    oracle: oracle as HexAddress,
                    irm: irm as HexAddress,
                    ltv: BigInt(ltv),
                    lth: BigInt(lth)
                }],
            });

            while (!isCreatePoolConfirmed) {
                await new Promise(resolve => setTimeout(resolve, 1000));
            }

            toast.success('Create pool successfully!');
        } catch (error) {
            console.error('Transaction error:', error);
            toast.error(error instanceof Error ? error.message : 'Transaction failed. Please try again.');
        }
    };

    return {
        createPoolHash,
        isCreatePoolPending,
        isCreatePoolConfirming,
        isCreatePoolConfirmed,
        handleCreatePool
    }
}