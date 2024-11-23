import { toast } from "sonner";
import { useAccount, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { mockCuratorABI } from "@/lib/abi/mockCuratorABI";
import { mockUSDCABI } from "@/lib/abi/mockUSDCABI";

export const useDepositCurator = (curatorAddress: HexAddress) => {
    const { address } = useAccount()

    const {
        data: approvalHash,
        isPending: isApprovalPending,
        writeContract: writeApproval
    } = useWriteContract();

    const {
        isLoading: isApprovalConfirming
    } = useWaitForTransactionReceipt({
        hash: approvalHash,
    });

    const {
        data: depositCuratorHash,
        isPending: isDepositCuratorPending,
        writeContract: writeDepositCurator
    } = useWriteContract();

    const {
        isLoading: isDepositCuratorConfirming,
        isSuccess: isDepositCuratorConfirmed
    } = useWaitForTransactionReceipt({
        hash: depositCuratorHash
    });

    const handleDepositCurator = async (
        amount: string
    ) => {
        try {
            await writeApproval({
                abi: mockUSDCABI,
                address: curatorAddress,
                functionName: 'approve',
                args: [
                    address as HexAddress, 
                    BigInt(amount)
                ],
            });

            await writeDepositCurator({
                abi: mockCuratorABI,
                address: curatorAddress,
                functionName: 'deposit',
                args: [
                    BigInt(amount),
                    curatorAddress as HexAddress
                ],
            });

            while (!isDepositCuratorConfirmed) {
                await new Promise(resolve => setTimeout(resolve, 1000));
            }

            toast.success('Deposit curator successfully!');
        } catch (error) {
            console.error('Transaction error:', error);
            toast.error(error instanceof Error ? error.message : 'Transaction failed. Please try again.');
        }
    };

    return {
        isApprovalPending,
        isApprovalConfirming,
        approvalHash,
        depositCuratorHash,
        isDepositCuratorPending,
        isDepositCuratorConfirming,
        isDepositCuratorConfirmed,
        handleDepositCurator
    }
}