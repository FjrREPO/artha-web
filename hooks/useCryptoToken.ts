import { CoinMarketCapSchema } from "@/lib/validation/types"
import { useQuery } from "@tanstack/react-query"

export const useCryptoToken = () => {
    const { data: cryptoTokenData, isLoading: cryptoTokenLoading } = useQuery<CoinMarketCapSchema[]>({
        queryKey: ["cryptoToken"],
        queryFn: async () => {
            const response = await fetch(
                `https://gist.githubusercontent.com/FjrREPO/096387afddcd21d4a730e6398e4650a4/raw/3e7f5c92dfe6f1f76ad479ad55b0214c9dba361b/crypto-token.json`
            )
            return response.json()
        },
        refetchInterval: 120000
    })

    return { cryptoTokenData, cryptoTokenLoading }
}