import { toast } from "sonner";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
// import { keccak256, toHex } from 'viem';
import { ADDRESS_ARTHA } from "@/constants/config";
import { mockArthaABI } from "@/lib/abi/mockArthaABI";

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

    const handleCreatePool = async (collateralToken: string, loanToken: string, oracle: string, irm: string, ltv: string, lth: string) => {
        try {
            await writeCreatePool({
                abi: mockArthaABI,
                address: ADDRESS_ARTHA,
                functionName: 'createPool',
                args: [{
                    collateralToken: collateralToken as HexAddress,
                    loanToken: loanToken as HexAddress,
                    // oracle: keccak256(toHex(oracle)),
                    // irm: keccak256(toHex(irm)),
                    oracle: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
                    irm: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
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