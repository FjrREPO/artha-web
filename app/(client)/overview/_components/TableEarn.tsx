"use client";

import { columns } from "@/components/tables/overview/earn/columns";
import { DataTable } from "@/components/tables/overview/earn/DataTable";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { EarnSchema, PoolSchema } from "@/lib/validation/types";
import { API_SUBGRAPH } from "@/constants/config";
import { queryCurator, queryPool } from "@/graphql/query";
import request from "graphql-request";

type QueryData = {
    curatorDeployeds: EarnSchema[];
};

type QueryDataPool = {
    pools: PoolSchema[];
};

export default function TablePool() {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    const { data, isLoading, refetch, isRefetching } = useQuery<QueryData>({
        queryKey: ['earn'],
        queryFn: async () => {
            return await request(API_SUBGRAPH, queryCurator);
        },
        refetchInterval: 60000,
    });

    const { data: dataPool, isLoading: isLoadingPool } = useQuery<QueryDataPool>({
        queryKey: ['pool'],
        queryFn: async () => {
            return await request(API_SUBGRAPH, queryPool);
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
                data={data?.curatorDeployeds || []}
                columns={columns({dataPool: dataPool?.pools as PoolSchema[], isLoadingPool: isLoadingPool})}
                handleRefresh={handleRefresh}
                isLoading={isLoading || isRefetching}
            />
        </div>
    );
}
