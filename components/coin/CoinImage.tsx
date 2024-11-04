import { useCoinDetails } from "@/hooks/useCoinDetails";
import SkeletonWrapper from "../loader/SkeletonWrapper";
import Image from "next/image";

export const CoinImage = ({ symbol }: { symbol: string }) => {
    const coinDetails = useCoinDetails(symbol);

    return (
        <SkeletonWrapper isLoading={coinDetails.isLoading}>
            <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                <Image
                    src={coinDetails.data?.data[symbol]?.logo ?? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVYS7KEXYFAwqdRCW81e4DSR_nSLYSFStx1Q&s'}
                    alt={coinDetails.data?.data[symbol]?.name ?? 'Default alt text'}
                    className="rounded-full"
                    width={24}
                    height={24}
                />
            </div>
        </SkeletonWrapper>
    );
};