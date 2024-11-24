import { mockUSDCABI } from "@/lib/abi/mockUSDCABI";
import { formatBigNumber } from "@/lib/utils";
import { useReadContract } from "wagmi";

export const useDecimal = (addressToken: HexAddress) => {
    const { data, isLoading: decimalLoading } = useReadContract({
        abi: mockUSDCABI,
        address: addressToken,
        functionName: 'decimals',
        args: [],
    });

    const val = data == 0 ? 6 : data
    
    const decimal = formatBigNumber(Number(val));

    return {
        decimal,
        decimalLoading
    };
};