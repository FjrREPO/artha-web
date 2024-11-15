import { toast } from "sonner";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { ADDRESS_ARTHA } from "@/constants/config";
import { mockArthaABI } from "@/lib/abi/mockArthaABI";

export const useSupply = () => {

    const {
        data: supplyHash,
        isPending: isSupplyPending,
        writeContract: writeSupply
    } = useWriteContract();

    const {
        isLoading: isSupplyConfirming,
        isSuccess: isSupplyConfirmed
    } = useWaitForTransactionReceipt({
        hash: supplyHash,
    });

    const handleSupply = async (id: string, amount: string, onBehalfOf: string) => {
        try {
            await writeSupply({
                abi: mockArthaABI,
                address: ADDRESS_ARTHA,
                functionName: 'supply',
                args: [
                    id,
                    BigInt(amount),
                    onBehalfOf as HexAddress
                ],
            });

            while (!isSupplyConfirmed) {
                await new Promise(resolve => setTimeout(resolve, 1000));
            }

            toast.success('Supply successfully!');
        } catch (error) {
            console.error('Transaction error:', error);
            toast.error(error instanceof Error ? error.message : 'Transaction failed. Please try again.');
        }
    };

    return {
        supplyHash,
        isSupplyPending,
        isSupplyConfirming,
        isSupplyConfirmed,
        handleSupply
    }
}