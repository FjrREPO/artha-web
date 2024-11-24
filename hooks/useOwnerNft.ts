import { AlchemyNftSchema } from "@/lib/validation/types"
import { useQuery } from "@tanstack/react-query"
import { useAccount } from "wagmi"

interface QueryData {
    ownedNfts: AlchemyNftSchema[]
}

export const useOwnerNft = () => {
    const { address } = useAccount()
    const contractAdresses = ["0xe074Bb382FD52643ef20Dc2f67f9Bda0C9e5aEd2", "0x0578034760bD3C556e11A6e392449F54b99A4A15", "0xa51A14abCB3177704ae5f94B9E786db7B9EE90c5"]
    const { data: ownedNfts, isLoading: nftLoading } = useQuery<QueryData>({
        queryKey: ["ownerNft", address, contractAdresses],
        queryFn: async () => {
            const response = await fetch(
                `/api/nft?ownerAddress=${address}&contractAddress=${contractAdresses}`
            )
            return response.json()
        },
        refetchInterval: 600000000
    })

    const nftData: AlchemyNftSchema[] = ownedNfts?.ownedNfts || []

    return { nftData, nftLoading }
}