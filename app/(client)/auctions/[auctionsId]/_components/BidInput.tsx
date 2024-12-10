import { CoinSymbol } from "@/components/coin/CoinSymbol";
import { Button } from "@/components/ui/button";
import { AuctionApiSchema } from "@/lib/validation/types";
import { TooltipProvider, TooltipTrigger, TooltipContent, Tooltip } from "@/components/ui/tooltip";
import { Coins } from "lucide-react";
import { useState } from "react";

export const BidInput = ({
    minBid,
    balance,
    onBidChange,
    onMaxBid,
    auctionDetails,
    isAuctionEnded
}: {
    minBid: number,
    balance: number,
    onBidChange: (value: string) => void,
    onMaxBid: () => void,
    auctionDetails: AuctionApiSchema | undefined,
    isAuctionEnded: boolean
}) => {
    const [bidError, setBidError] = useState<string | null>(null);

    const validateBid = (value: string) => {
        const numericBid = parseFloat(value);

        if (isAuctionEnded) {
            setBidError("Auction has ended");
            return false;
        }

        if (isNaN(numericBid)) {
            setBidError("Please enter a valid number");
            return false;
        }

        if (numericBid < minBid) {
            setBidError(`Bid must be at least ${minBid.toFixed(2)} USDC`);
            return false;
        }

        if (numericBid > balance) {
            setBidError("Insufficient balance");
            return false;
        }

        setBidError(null);
        return true;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        validateBid(value);
        onBidChange(value);
    };

    return (
        <div className="space-y-3">
            <div className="flex justify-between text-sm text-muted-foreground">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>Minimum Bid</TooltipTrigger>
                        <TooltipContent>
                            The lowest acceptable bid amount
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <div className='flex flex-row gap-1 items-center'>
                    <span>Balance: {balance.toFixed(2)}</span>
                    <CoinSymbol address={auctionDetails?.loanAddress || ""} />
                </div>
            </div>
            <div className="flex items-center space-x-2">
                <div className="relative flex-grow">
                    <input
                        type="number"
                        placeholder={`Min. ${(minBid.toFixed(2))} USDC`}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded-2xl px-2 focus:ring-2 focus:ring-primary pl-8"
                        disabled={isAuctionEnded}
                    />
                    <Coins className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                </div>
                <Button
                    variant="outline"
                    onClick={onMaxBid}
                    disabled={isAuctionEnded}
                    className="px-4 border-primary text-primary border-2 hover:bg-primary/10"
                >
                    Max
                </Button>
            </div>
            {bidError && (
                <div className="text-red-500 text-sm">
                    {bidError}
                </div>
            )}
        </div>
    )
}