"use client";

import { columns } from "@/components/tables/pool/columns";
import { DataTable } from "@/components/tables/pool/DataTable";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

export default function TablePool() {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    const url = 'https://run.mocky.io/v3/8e9fbb6f-ad14-4e20-8be7-ae048ef23259';

    const { data, isLoading, refetch, isRefetching } = useQuery<Vault[]>({
        queryKey: ['pool'],
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

    const tableData = Array.isArray(data) ? data : [];

    return (
        <div className="w-full space-y-4 h-auto z-10">
            <DataTable
                data={tableData}
                columns={columns()}
                handleRefresh={handleRefresh}
                isLoading={isLoading || isRefetching}
            />
        </div>
    );
}
