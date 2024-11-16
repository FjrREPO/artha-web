import { gql } from "graphql-request";

export const queryPool = gql`{
    pools(orderBy: blockTimestamp, orderDirection: desc) {
        id
        collateralToken
        irm
        loanToken
        lth
        ltv
        oracle
        MockArthaEvent_id
    }
}`

export const queryCurator = gql`{
    curatorDeployeds(orderBy: blockTimestamp, orderDirection: desc) {
        id
        curator
        pools
        transactionHash
        blockTimestamp
        blockNumber
        allocations
    }
}`