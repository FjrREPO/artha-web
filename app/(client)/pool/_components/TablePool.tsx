"use client";

import { columns } from "@/components/tables/pool/columns";
import { DataTable } from "@/components/tables/pool/DataTable";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { PoolSchema } from "@/lib/validation/types";
import { API_SUBGRAPH } from "@/constants/config";
import { queryPool } from "@/graphql/query";
import request from "graphql-request";

type QueryData = {
    pools: PoolSchema[];
};

export default function TablePool() {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    const { data, isLoading, refetch, isRefetching } = useQuery<QueryData>({
        queryKey: ['pool'],
        queryFn: async () => {
            return await request(API_SUBGRAPH, queryPool);
        },
        refetchInterval: 10000,
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
                data={data?.pools || []}
                columns={columns()}
                handleRefresh={handleRefresh}
                isLoading={isLoading || isRefetching}
            />
        </div>
    );
}
