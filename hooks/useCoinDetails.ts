import { useQuery, UseQueryResult } from '@tanstack/react-query';

export interface ApiResponse {
    status: Status;
    data: Record<string, CurrencyData>;
}

export interface Status {
    timestamp: string;
    error_code: number;
    error_message: null | string;
    elapsed: number;
    credit_count: number;
    notice: null | string;
}

export interface CurrencyData {
    id: number;
    name: string;
    symbol: string;
    category: string;
    description: string;
    slug: string;
    logo: string;
    subreddit: string;
    notice: string;
    tags: string[];
    "tag-names": string[];
    "tag-groups": string[];
    urls: Urls;
    platform: Platform | null;
    date_added: string;
    twitter_username: string;
    is_hidden: number;
    date_launched: string | null;
    contract_address: ContractAddress[];
    self_reported_circulating_supply: number | null;
    self_reported_tags: null | string[];
    self_reported_market_cap: number | null;
    infinite_supply: boolean;
}

export interface Urls {
    website: string[];
    twitter: string[];
    message_board: string[];
    chat: string[];
    facebook: string[];
    explorer: string[];
    reddit: string[];
    technical_doc: string[];
    source_code: string[];
    announcement: string[];
}

export interface Platform {
    id?: string;
    name: string;
    slug?: string;
    symbol?: string;
    token_address?: string;
    coin?: CoinInfo;
}

export interface CoinInfo {
    id: string;
    name: string;
    symbol: string;
    slug: string;
}

export interface ContractAddress {
    contract_address: string;
    platform: Platform;
}

export const useCoinDetails = (symbol: string): UseQueryResult<ApiResponse> => {
    return useQuery({
        queryKey: ['coinInfo', symbol],
        queryFn: async () => {
            await new Promise(resolve => setTimeout(resolve, 10000));
            const response = await fetch(`/api/crypto?symbol=${symbol}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        },
        refetchInterval: 10000,
        staleTime: 10000,
    });
};