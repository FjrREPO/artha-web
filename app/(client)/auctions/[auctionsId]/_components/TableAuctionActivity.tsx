import { columns } from "@/components/tables/auctions/activity/columns";
import { DataTable } from "@/components/tables/auctions/activity/DataTable";
import { AuctionActivitySchema } from "@/lib/validation/types";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";

export const TableAuctionActivity = () => {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    const { data, isLoading, refetch, isRefetching } = useQuery<AuctionActivitySchema[]>({
        queryKey: ['auction-activity'],
        queryFn: async () => {
            const response = await fetch("https://gist.githubusercontent.com/FjrREPO/bacbdeca6af55dcc3ad2805b2f532e10/raw/19bb6b904ffb69baff15374a9032d08732c32dbc/auctionactivity.json");
            return response.json();
        },
        refetchInterval: 60000,
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