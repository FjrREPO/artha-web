"use client";

import { columns } from "@/components/tables/dashboard/earn/columns";
import { DataTable } from "@/components/tables/dashboard/earn/DataTable";
import { EarnSchema } from "@/lib/validation/types";

type Props = {
    earnData: EarnSchema[];
    earnLoading: boolean;
    earnRefetching: boolean;
};

export default function TableEarn({
    earnData,
    earnLoading,
    earnRefetching
}: Props) {
    return (
        <div className="w-full space-y-4 h-auto z-10">
            <DataTable
                data={earnData || []}
                columns={columns()}
                isLoading={earnLoading || earnRefetching}
            />
        </div>
    );
}
