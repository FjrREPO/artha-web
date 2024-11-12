import Image from "next/image";
import { CryptoToken } from "@/constants/cryptoToken";
import { cn } from "@/lib/utils";

export const CoinImageCustom = ({ symbol, address, className }: { symbol?: string, address?: string, className?: string }) => {
    const fallbackImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVYS7KEXYFAwqdRCW81e4DSR_nSLYSFStx1Q&s';

    const coinLogoBySymbol = CryptoToken.find(
        (coin) => coin.symbol === symbol
    )?.logo;

    const coinLogoByAddress = CryptoToken.find(
        (coin) => coin.contract_address[0].contract_address.toLowerCase() === address?.toLowerCase()
    )?.logo;

    return (
        <>
            {symbol ?
                <Image
                    src={coinLogoBySymbol ?? fallbackImage}
                    alt={coinLogoBySymbol ?? 'Default alt text'}
                    className={cn("rounded-full", className)}
                    width={96}
                    height={96}
                />
                :
                <Image
                    src={coinLogoByAddress ?? fallbackImage}
                    alt={coinLogoByAddress ?? 'Default alt text'}
                    className={cn("rounded-full", className)}
                    width={96}
                    height={96}
                />
            }
        </>
    );
};
