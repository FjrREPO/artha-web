import { mockCuratorABI } from "@/lib/abi/mockCuratorABI";
import { useReadContract } from "wagmi";

export const useAssetCurator = (curatorAddress: HexAddress) => {
    const { data, isLoading: assetCuratorLoading } = useReadContract({
        abi: mockCuratorABI,
        address: curatorAddress,
        functionName: 'asset',
        args: [],
    });

    const assetCurator = data && (data as bigint).toString()

    return {
        assetCurator,
        assetCuratorLoading
    };
};