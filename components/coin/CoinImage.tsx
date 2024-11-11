import Image from "next/image";
import { CryptoToken } from "@/constants/cryptoToken";

export const CoinImage = ({ symbol, address }: { symbol?: string, address?: string }) => {
    const fallbackImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVYS7KEXYFAwqdRCW81e4DSR_nSLYSFStx1Q&s';

    const coinLogoBySymbol = CryptoToken.find(
        (coin) => coin.symbol === symbol
    )?.logo;

    const coinLogoByAddress = CryptoToken.find(
        (coin) => coin.contract_address[0].contract_address.toLowerCase() === address?.toLowerCase()
    )?.logo;

    return (
        <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
            {symbol ?
                <Image
                    src={coinLogoBySymbol ?? fallbackImage}
                    alt={coinLogoBySymbol ?? 'Default alt text'}
                    className="rounded-full"
                    width={24}
                    height={24}
                />
                :
                <Image
                    src={coinLogoByAddress ?? fallbackImage}
                    alt={coinLogoByAddress ?? 'Default alt text'}
                    className="rounded-full"
                    width={24}
                    height={24}
                />
            }
        </div>
    );
};
