import { z } from 'zod';

export const poolSchema = z.object({
    id: z.string(),
    collateralToken: z.string().min(1, "Please select a collateral"),
    loanToken: z.string().min(1, "Please select a loan token"),
    irm: z.string().min(1, "Please select an interest rate model"),
    oracle: z.string().min(1, "Please select an oracle"),
    ltv: z.string().transform((val) => (val === '' ? '0' : val)),
    lth: z.string().transform((val) => (val === '' ? '0' : val)),
});

// CoinMarketCap schema
const PlatformCoin = z.object({
    id: z.string(),
    name: z.string(),
    symbol: z.string(),
    slug: z.string(),
});

const Platform = z.object({
    name: z.string(),
    coin: PlatformCoin,
});

const ContractAddress = z.object({
    contract_address: z.string(),
    platform: Platform,
});

const TokenPlatform = z.object({
    id: z.string(),
    name: z.string(),
    slug: z.string(),
    symbol: z.string(),
    token_address: z.string(),
});

const TokenUrls = z.object({
    website: z.array(z.string()),
    twitter: z.array(z.string()),
    message_board: z.array(z.string()),
    chat: z.array(z.string()),
    facebook: z.array(z.string()),
    explorer: z.array(z.string()),
    reddit: z.array(z.string()),
    technical_doc: z.array(z.string()),
    source_code: z.array(z.string()),
    announcement: z.array(z.string()),
});

export const CoinMarketCapSchema = z.object({
    id: z.number(),
    name: z.string(),
    symbol: z.string(),
    category: z.string(),
    description: z.string(),
    slug: z.string(),
    logo: z.string(),
    subreddit: z.string(),
    notice: z.string(),
    tags: z.array(z.string()),
    "tag-names": z.array(z.string()),
    "tag-groups": z.array(z.string()),
    urls: TokenUrls,
    platform: TokenPlatform,
    date_added: z.string(),
    twitter_username: z.string(),
    is_hidden: z.number(),
    date_launched: z.null(),
    contract_address: z.array(ContractAddress),
    self_reported_circulating_supply: z.null(),
    self_reported_tags: z.null(),
    self_reported_market_cap: z.null(),
    infinite_supply: z.boolean(),
})