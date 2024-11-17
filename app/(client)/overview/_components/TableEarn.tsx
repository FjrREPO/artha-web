"use client";

import { columns } from "@/components/tables/overview/earn/columns";
import { DataTable } from "@/components/tables/overview/earn/DataTable";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { EarnSchema } from "@/lib/validation/types";
import { API_SUBGRAPH } from "@/constants/config";
import { queryCurator } from "@/graphql/query";
import request from "graphql-request";

type QueryData = {
    curatorDeployeds: EarnSchema[];
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

    if (!hasMounted) {
        return null;
    }

    return (
        <div className="w-full space-y-4 h-auto z-10">
            <DataTable
                data={data?.curatorDeployeds || []}
                columns={columns()}
                isLoading={isLoading || isRefetching}
            />
        </div>
    );
}
