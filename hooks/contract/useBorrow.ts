import { toast } from "sonner";
import { useAccount, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { ADDRESS_ARTE } from "@/constants/config";
import { mockArteABI } from "@/lib/abi/mockArteABI";

export const useBorrow = () => {
    const { address } = useAccount()
    
    const {
        data: borrowHash,
        isPending: isBorrowPending,
        writeContract: writeBorrow
    } = useWriteContract();

    const {
        isLoading: isBorrowConfirming,
        isSuccess: isBorrowConfirmed
    } = useWaitForTransactionReceipt({
        hash: borrowHash,
    });

    const handleBorrow = async (id: string, tokenId: string, amount: string) => {
        try {
            await writeBorrow({
                abi: mockArteABI,
                address: ADDRESS_ARTE,
                functionName: 'borrow',
                args: [
                    id,
                    BigInt(tokenId),
                    BigInt(amount),
                    address as HexAddress,
                    address as HexAddress
                ],
            });

            while (!isBorrowConfirmed) {
                await new Promise(resolve => setTimeout(resolve, 1000));
            }

            toast.success('Borrow successfully!');
        } catch (error) {
            console.error('Transaction error:', error);
            toast.error(error instanceof Error ? error.message : 'Transaction failed. Please try again.');
        }
    };

    return {
        borrowHash,
        isBorrowPending,
        isBorrowConfirming,
        isBorrowConfirmed,
        handleBorrow
    }
}