import React from 'react';
import { usePriceOracle } from "@/hooks/contract/usePriceOracle";
import SkeletonWrapper from '@/components/loader/SkeletonWrapper';
import { formatNumberWithDots } from '@/lib/utils';

type PriceOracleCellProps = {
    oracleAddress: HexAddress;
    loanTokenAddress: string;
};

const PriceOracleCell: React.FC<PriceOracleCellProps> = ({ oracleAddress, loanTokenAddress }) => {
    const { priceOracle, priceOracleLoading } = usePriceOracle(oracleAddress, loanTokenAddress);

    return (
        <div className="flex items-center gap-2">
            <SkeletonWrapper isLoading={priceOracleLoading}>
                <span>{formatNumberWithDots((priceOracle as number)/1e6)}</span>
            </SkeletonWrapper>
        </div>
    );
};

export default PriceOracleCell;