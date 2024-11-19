import { AlchemyNftSchema } from "@/lib/validation/types"
import { useQuery } from "@tanstack/react-query"
// import { useAccount } from "wagmi"

interface QueryData {
    ownedNfts: AlchemyNftSchema[]
}

export const useOwnerNft = () => {
    // const { address } = useAccount()
    const address = "0xe785E82358879F061BC3dcAC6f0444462D4b5330"
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