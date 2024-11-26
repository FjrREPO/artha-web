"use client";

import { columns } from "@/components/tables/dashboard/lend/columns";
import { DataTable } from "@/components/tables/dashboard/lend/DataTable";
import { useEffect, useState } from "react";
import { LendSchema, PoolSchema } from "@/lib/validation/types";

type Props = {
    poolData: PoolSchema[];
    poolLoading: boolean;
    lendData?: LendSchema[];
    lendLoading: boolean;
    lendRefetching: boolean;
};

export default function TableLend({ poolData, poolLoading, lendData, lendLoading, lendRefetching }: Props) {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) {
        return null;
    }

    return (
        <div className="w-full space-y-4 h-auto z-10">
            <DataTable
                data={lendData || []}
                columns={columns({
                    poolData: poolData,
                    poolLoading: poolLoading,
                })}
                isLoading={lendLoading || lendRefetching}
            />
        </div>
    );
}
