import { AlchemyNftSchema } from "@/lib/validation/types"
import { useQuery } from "@tanstack/react-query"
import { useAccount } from "wagmi"

interface QueryData {
    ownedNfts: AlchemyNftSchema[]
}

export const useOwnerNft = () => {
    const { address } = useAccount()
    const { data: ownedNfts, isLoading: nftLoading } = useQuery<QueryData>({
        queryKey: ["ownerNft", address],
        queryFn: async () => {
            const response = await fetch(
                `/api/nft?ownerAddress=${address}`
            )
            return response.json()
        },
        refetchInterval: 600000000
    })

    const nftData: AlchemyNftSchema[] = ownedNfts?.ownedNfts || []

    return { nftData, nftLoading }
}