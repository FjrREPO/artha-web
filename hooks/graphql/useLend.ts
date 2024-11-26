import { API_SUBGRAPH } from "@/constants/config";
import { queryAccount } from "@/graphql/query";
import { AccountSchema, LendSchema } from "@/lib/validation/types";
import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import { useAccount } from "wagmi";

type QueryData = {
    account: AccountSchema;
};

export default function useLend() {
    const { address } = useAccount();

    const { data, isLoading: lendLoading, isRefetching: lendRefetching } = useQuery<QueryData>({
        queryKey: ['lend'],
        queryFn: async () => {
            return await request(API_SUBGRAPH, queryAccount(address as HexAddress));
        },
        refetchInterval: 600000000,
    });

    const lendData: LendSchema[] = data?.account.lend || [];

    return {
        lendData,
        lendLoading,
        lendRefetching
    }
}
