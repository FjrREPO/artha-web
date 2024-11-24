import { ADDRESS_MOCK_USDC } from "@/constants/config";
import { mockUSDCABI } from "@/lib/abi/mockUSDCABI";
import { useReadContract } from "wagmi";

export const useBalance = (
    address: HexAddress
) => {
    const { data, isLoading: balanceLoading } = useReadContract({
        abi: mockUSDCABI,
        address: ADDRESS_MOCK_USDC,
        functionName: 'balanceOf',
        args: [
            address as HexAddress
        ],
    });

    const balance = data && (data as bigint).toString()

    return {
        balance,
        balanceLoading
    };
};