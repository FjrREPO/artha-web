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
        enabled
    }
}`

export const queryCurator = gql`{
    curatorDeployeds(orderBy: blockTimestamp, orderDirection: desc) {
        allocations
        curator
        id
        pools {
            id
        }
    }
}`