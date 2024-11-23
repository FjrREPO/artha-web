import { toast } from "sonner";
import { useAccount, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { mockCuratorABI } from "@/lib/abi/mockCuratorABI";

export const useWithdrawCurator = (curatorAddress: HexAddress) => {
    const { address } = useAccount();
    
    const {
        data: withdrawCuratorHash,
        isPending: isWithdrawCuratorPending,
        writeContract: writeWithdrawCurator
    } = useWriteContract();

    const {
        isLoading: isWithdrawCuratorConfirming,
        isSuccess: isWithdrawCuratorConfirmed
    } = useWaitForTransactionReceipt({
        hash: withdrawCuratorHash
    });

    const handleWithdrawCurator = async (
        amount: string
    ) => {
        try {
            await writeWithdrawCurator({
                abi: mockCuratorABI,
                address: curatorAddress,
                functionName: 'withdraw',
                args: [
                    BigInt(amount),
                    address as HexAddress,
                    curatorAddress as HexAddress
                ],
            });

            while (!isWithdrawCuratorConfirmed) {
                await new Promise(resolve => setTimeout(resolve, 1000));
            }

            toast.success('WithdrawCollateral curator successfully!');
        } catch (error) {
            console.error('Transaction error:', error);
            toast.error(error instanceof Error ? error.message : 'Transaction failed. Please try again.');
        }
    };

    return {
        withdrawCuratorHash,
        isWithdrawCuratorPending,
        isWithdrawCuratorConfirming,
        isWithdrawCuratorConfirmed,
        handleWithdrawCurator
    }
}