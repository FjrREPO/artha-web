export const calculateMaxBorrowAmount = (priceOracle: number, ltv: number, decimal: number): number => {
    const maxBorrowAmount = ltv * (priceOracle as number) / decimal
    return Number(maxBorrowAmount);
}