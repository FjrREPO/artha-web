import { API_SUBGRAPH } from "@/constants/config";
import { queryCurator } from "@/graphql/query";
import { EarnSchema } from "@/lib/validation/types";
import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";

type QueryData = {
    curators: EarnSchema[];
};

export default function useEarn() {
    const { data, isLoading: earnLoading } = useQuery<QueryData>({
        queryKey: ['earn'],
        queryFn: async () => {
            return await request(API_SUBGRAPH, queryCurator);
        },
        refetchInterval: 600000000,
    });

    const earnData: EarnSchema[] = data?.curators || [];

    return {
        earnData,
        earnLoading
    }
}