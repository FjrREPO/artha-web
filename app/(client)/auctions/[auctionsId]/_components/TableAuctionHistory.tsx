import { columns } from "@/components/tables/auctions/history/columns";
import { DataTable } from "@/components/tables/auctions/history/DataTable";
import { AuctionHistorySchema } from "@/lib/validation/types";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";

export const TableAuctionHistory = () => {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    const { data, isLoading, refetch, isRefetching } = useQuery<AuctionHistorySchema[]>({
        queryKey: ['auction-history'],
        queryFn: async () => {
            const response = await fetch("https://gist.githubusercontent.com/FjrREPO/b8438768ef1e01c77b923bd61b10438e/raw/298ab2e2b2c7f4c1efda36a47b4cd5bf504b8762/auctionhistory.json");
            return response.json();
        },
        refetchInterval: 600000000,
    });

    const handleRefresh = () => {
        refetch();
    };

    if (!hasMounted) {
        return null;
    }
    return (
        <div className="w-full space-y-4 h-auto z-10">
            <DataTable
                data={data || []}
                columns={columns()}
                handleRefresh={handleRefresh}
                isLoading={isLoading || isRefetching}
            />
        </div>
    )
}