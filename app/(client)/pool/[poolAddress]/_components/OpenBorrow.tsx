"use client"

import { Label } from '@/components/ui/label';
import { PoolSchema } from '@/lib/validation/types';
import DepositCollateral from './DepositCollateral';
import BorrowForm from './BorrowForm';

interface OpenBorrowProps {
    filteredData?: PoolSchema;
}

export default function OpenBorrow({ filteredData }: OpenBorrowProps) {
    const handleDeposit = async (amount: string, tokenId: string) => {
        try {
            console.log("Depositing:", amount, tokenId);
        } catch (error) {
            console.error("Error depositing:", error);
            throw error;
        }
    };

    if (!filteredData) {
        return (
            <div className="flex justify-center items-center p-4">
                <Label>No pool data available</Label>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-5">
            <DepositCollateral
                filteredData={filteredData}
                onDeposit={handleDeposit}
            />
            <Label className="text-center">And / Or</Label>
            <BorrowForm
                filteredData={filteredData}
            />
        </div>
    );
}