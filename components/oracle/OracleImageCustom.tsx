import Image from "next/image";
import { OracleData } from "@/constants/oracleData";
import { cn } from "@/lib/utils";

export const OracleImageCustom = ({ symbol, address, className }: { symbol?: string, address?: string, className?: string }) => {
    const fallbackImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVYS7KEXYFAwqdRCW81e4DSR_nSLYSFStx1Q&s';

    const oracleLogoBySymbol = OracleData.find(
        (oracle) => oracle.symbol === symbol
    )?.logo;

    const oracleLogoByAddress = OracleData.find(
        (oracle) => oracle.contract_address[0].contract_address.toLowerCase() === address?.toLowerCase()
    )?.logo;

    return (
        <>
            {symbol ?
                <Image
                    src={oracleLogoBySymbol ?? fallbackImage}
                    alt={oracleLogoBySymbol ?? 'Default alt text'}
                    className={cn("rounded-full", className)}
                    width={96}
                    height={96}
                />
                :
                <Image
                    src={oracleLogoByAddress ?? fallbackImage}
                    alt={oracleLogoByAddress ?? 'Default alt text'}
                    className={cn("rounded-full", className)}
                    width={96}
                    height={96}
                />
            }
        </>
    );
};
