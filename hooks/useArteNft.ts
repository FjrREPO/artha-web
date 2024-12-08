import { ADDRESS_ARTE } from "@/constants/config"
import { AlchemyNftSchema } from "@/lib/validation/types"
import { useQuery } from "@tanstack/react-query"

interface QueryData {
    ownedNfts: AlchemyNftSchema[]
}

export const useArteNft = () => {
    const address = ADDRESS_ARTE
    const contractAdresses = ["0xd856695F2789a2b7a7B3f6BfFB1a829516bAEfeE", "0x9639F2dFc37B24D472Ca5b8CDe5e663d30ff872b", "0xC8d171F5AF4598b7a29c87B9341ec95025D252b8", "0x11d89C52498627a63D42f3Fc2c56F72C308B804A"]
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