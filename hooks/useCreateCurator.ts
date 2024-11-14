import { toast } from "sonner";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { ADDRESS_CURATOR } from "@/constants/config";
import { curatorABI } from "@/lib/abi/curatorABI";
import { keccak256, toHex } from "viem";

export const useCreateCurator = () => {
    const {
        data: createCuratorHash,
        isPending: isCreateCuratorPending,
        writeContract: writeCreateCurator
    } = useWriteContract();

    const {
        isLoading: isCreateCuratorConfirming,
        isSuccess: isCreateCuratorConfirmed
    } = useWaitForTransactionReceipt({
        hash: createCuratorHash,
    });

    const handleCreateCurator = async (
        _name: string, 
        _symbol: string,
        _asset: string, 
        pools: string[], 
        allocations: number[]
    ) => {
        try {
            const poolsInBytes32 = pools.map(pool => keccak256(toHex(pool)));
            const allocationsInUint256 = allocations.map(allocation => BigInt(allocation));

            await writeCreateCurator({
                abi: curatorABI,
                address: ADDRESS_CURATOR,
                functionName: 'deployCurator',
                args: [
                    _name as string,
                    _symbol as string,
                    _asset as HexAddress,
                    poolsInBytes32,
                    allocationsInUint256
                ],
            });

            while (!isCreateCuratorConfirmed) {
                await new Promise(resolve => setTimeout(resolve, 1000));
            }

            toast.success('Create curator successfully!');
        } catch (error) {
            console.error('Transaction error:', error);
            toast.error(error instanceof Error ? error.message : 'Transaction failed. Please try again.');
        }
    };

    return {
        createCuratorHash,
        isCreateCuratorPending,
        isCreateCuratorConfirming,
        isCreateCuratorConfirmed,
        handleCreateCurator
    }
}