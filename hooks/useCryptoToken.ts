import { CoinMarketCapSchema } from "@/lib/validation/types"
import { useQuery } from "@tanstack/react-query"

export const useCryptoToken = () => {
    const { data: cryptoTokenData, isLoading: cryptoTokenLoading } = useQuery<CoinMarketCapSchema[]>({
        queryKey: ["cryptoToken"],
        queryFn: async () => {
            const response = await fetch(
                `https://gist.githubusercontent.com/FjrREPO/096387afddcd21d4a730e6398e4650a4/raw/7046307d56a8ef2f759a8211e92d1a19345961b2/crypto-token.json`
            )
            return response.json()
        },
        refetchInterval: 600000000
    })

    return { cryptoTokenData, cryptoTokenLoading }
}