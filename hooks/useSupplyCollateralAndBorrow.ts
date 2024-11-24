import { toast } from "sonner";
import { useAccount, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { ADDRESS_ARTHA } from "@/constants/config";
import { mockArthaABI } from "@/lib/abi/mockArthaABI";

export const useSupplyCollateralAndBorrow = () => {
    const { address } = useAccount()
    
    const {
        data: supplyCollateralAndBorrowHash,
        isPending: isSupplyCollateralAndBorrowPending,
        writeContract: writeSupplyCollateralAndBorrow
    } = useWriteContract();

    const {
        isLoading: isSupplyCollateralAndBorrowConfirming,
        isSuccess: isSupplyCollateralAndBorrowConfirmed
    } = useWaitForTransactionReceipt({
        hash: supplyCollateralAndBorrowHash,
    });

    const handleSupplyCollateralAndBorrow = async (id: string, tokenId: string, amount: string) => {
        try {
            await writeSupplyCollateralAndBorrow({
                abi: mockArthaABI,
                address: ADDRESS_ARTHA,
                functionName: 'supplyCollateralAndBorrow',
                args: [
                    id,
                    BigInt(tokenId),
                    BigInt(amount),
                    address as HexAddress,
                    address as HexAddress
                ],
            });

            while (!isSupplyCollateralAndBorrowConfirmed) {
                await new Promise(resolve => setTimeout(resolve, 1000));
            }

            toast.success('SupplyCollateralAndBorrow successfully!');
        } catch (error) {
            console.error('Transaction error:', error);
            toast.error(error instanceof Error ? error.message : 'Transaction failed. Please try again.');
        }
    };

    return {
        supplyCollateralAndBorrowHash,
        isSupplyCollateralAndBorrowPending,
        isSupplyCollateralAndBorrowConfirming,
        isSupplyCollateralAndBorrowConfirmed,
        handleSupplyCollateralAndBorrow
    }
}