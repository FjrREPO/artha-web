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
    }
}`