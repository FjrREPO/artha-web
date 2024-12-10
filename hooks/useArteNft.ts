import { ADDRESS_ARTE } from "@/constants/config"
import { AlchemyNftSchema } from "@/lib/validation/types"
import { useQuery } from "@tanstack/react-query"

interface QueryData {
    ownedNfts: AlchemyNftSchema[]
}

export const useArteNft = () => {
    const address = ADDRESS_ARTE
    const contractAdresses = ["0xC9653e8916ac9818A40fDEbB4d6D9cD39Bcd0f20", "0x46591ad4dCA64032D2a1218974977Ad36200EC24", "0xF82026Bf3088a237d4B9727f0993dC0d3B171a9C"]
    const { data: ownedNfts, isLoading: nftArteLoading } = useQuery<QueryData>({
        queryKey: ["ArteNft", address, contractAdresses],
        queryFn: async () => {
            const response = await fetch(
                `/api/nft?ownerAddress=${address}&contractAddress=${contractAdresses}`
            )
            return response.json()
        },
        refetchInterval: 600000000
    })

    const nftArteData: AlchemyNftSchema[] = ownedNfts?.ownedNfts || []

    return { nftArteData, nftArteLoading }
}