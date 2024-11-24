import { CryptoToken } from "@/constants/cryptoToken";
import { Label } from "../ui/label";
import { cn } from "@/lib/utils";

export const CoinSymbol = ({ address, className }: { address: string, className?: string }) => {
    const coinSymbolByAddress = CryptoToken.find(
        (coin) => coin.contract_address[0].contract_address.toLowerCase() === address?.toLowerCase()
    )?.symbol;

    return (
        <Label className={cn("cursor-pointer", className)}>{coinSymbolByAddress}</Label>
    );
};
