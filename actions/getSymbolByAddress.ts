import { CryptoToken } from "@/constants/cryptoToken";

export const getSymbolByAddress = async (address: string) => {
    const coinSymbolByAddress = CryptoToken.find(
        (coin) => coin.contract_address[0].contract_address.toLowerCase() === address?.toLowerCase()
    )?.symbol;

    return coinSymbolByAddress
};