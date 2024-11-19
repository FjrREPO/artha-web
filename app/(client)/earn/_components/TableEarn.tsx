"use client";

import { columns } from "@/components/tables/earn/columns";
import { DataTable } from "@/components/tables/earn/DataTable";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { EarnSchema, PoolSchema } from "@/lib/validation/types";
import { API_SUBGRAPH } from "@/constants/config";
import { queryCurator, queryPool } from "@/graphql/query";
import request from "graphql-request";

type QueryData = {
    curators: EarnSchema[];
};

type QueryDataPool = {
    pools: PoolSchema[];
};

export default function TablePool() {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    const { data, isLoading, isRefetching } = useQuery<QueryData>({
        queryKey: ['earn'],
        queryFn: async () => {
            return await request(API_SUBGRAPH, queryCurator);
        },
        refetchInterval: 600000000,
    });

    const { data: dataPool, isLoading: isLoadingPool } = useQuery<QueryDataPool>({
        queryKey: ['pool'],
        queryFn: async () => {
            return await request(API_SUBGRAPH, queryPool);
        },
        refetchInterval: 600000000,
    });

    if (!hasMounted) {
        return null;
    }

    return (
        <div className="w-full space-y-4 h-auto z-10">
            <DataTable
                data={data?.curators || []}
                columns={columns({dataPool: dataPool?.pools as PoolSchema[], isLoadingPool: isLoadingPool})}
                isLoading={isLoading || isRefetching}
            />
        </div>
    );
}
