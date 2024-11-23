import { gql } from "graphql-request";

export const queryPool = gql`{
    pools(orderBy: blockTimestamp, orderDirection: desc) {
        id
        collateralToken
        loanToken
        irm
        oracle
        lth
        ltv
        supplyAssets
        borrowAssets
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