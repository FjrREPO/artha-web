"use client"

import { columns } from "@/components/tables/earn/columns";
import { DataTable } from "@/components/tables/earn/DataTable";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

export default function TableEarn() {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    const url = 'https://gist.githubusercontent.com/azizrosyid/3f8d9c2da91d6b5a893067762b26de73/raw/9bc70f649d38d78b3b4d819904fe5811a05da317/earn.json';

    const { data, isLoading, refetch, isRefetching } = useQuery<EarnData[]>({
        queryKey: ['earn'],
        queryFn: async () => {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
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
    );
}
