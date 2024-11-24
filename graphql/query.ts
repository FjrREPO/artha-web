import { gql } from "graphql-request";

export const queryPool = gql`{
    pools(orderBy: blockTimestamp, orderDirection: desc) {
        id
        collateralAddress
        borrowRate
        irm
        lendingRate
        loanAddress
        lth
        ltv
        oracle
        totalBorrowAssets
        totalBorrowShares
        totalSupplyAssets
        totalSupplyShares
        transactionHash
        utilizationRate
        collateralToken {
            id
            collateralToken
        }
        loanToken {
            id
            loanToken
        }
    }
}`

export const queryLTV = gql`{
    ltvs(orderBy: blockTimestamp, orderDirection: desc) {
        ltv
    }
}`

export const queryIRM = gql`{
    interestRateModels(orderBy: blockTimestamp, orderDirection: desc) {
        irm
    }
}`

export const queryCurator = gql`{
    curators(orderBy: blockTimestamp, orderDirection: desc) {
        id
        name
        asset
        symbol
        curator
        allocations
        pools {
            id
        }
    }
}`

export const queryCollateralTokens = gql`{
    collaterals(orderBy: blockTimestamp, orderDirection: desc) {
        id
        collateralToken
        pool {
            id
        }
    }
}`

export const queryLoanTokens = gql`{
    loanTokens(orderBy: blockTimestamp, orderDirection: desc) {
        id
        loanToken
        pool {
            id
        }
    }
}`

export const queryPosition = (account: string, poolId: string) => gql`{
    positions(where: {account: "${account.toLowerCase()}", pool_: {id: "${poolId}"}}) {
        id
        tokenId
        borrowShares
        pool {
            id
        }
    }
}`