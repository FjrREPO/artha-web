import { z } from 'zod';

export const poolSchema = z.object({
    id: z.string().optional().nullable(),
    collateralToken: z.string().min(1, "Please select a collateral").nullable(),
    loanToken: z.string().min(1, "Please select a loan token").nullable(),
    irm: z.string().min(1, "Please select an interest rate model").nullable(),
    oracle: z.string().min(1, "Please select an oracle").nullable(),
    ltv: z.string().transform((val) => (val === '' ? '0' : val)).nullable(),
    lth: z.string().transform((val) => (val === '' ? '0' : val)).nullable(),
});

export const curatorSchema = z.object({
    _name: z.string(),
    _symbol: z.string(),
    _asset: z.string(),
    pools: z.array(z.string()),
    allocations: z.array(z.number()),
})

export const auctionHistorySchema = z.object({
    event: z.string().min(1),
    amount: z.number().min(0),
    address: z.string().min(1),
    loanId: z.string().min(1),
    date: z.string()
});

export const auctionActivitySchema = z.object({
    activityType: z.string().min(1), 
    price: z.union([z.string().min(1), z.literal('--')]),
    from: z.string().min(1),
    to: z.string().min(1),
    date: z.string()
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

export const coinMarketCapSchema = z.object({
    id: z.number(),
    name: z.string(),
    symbol: z.string(),
    category: z.string(),
    description: z.string(),
    slug: z.string(),
    logo: z.string(),
    subreddit: z.string(),
    notice: z.string(),
    tags: z.union([z.array(z.string()), z.null()]),
    "tag-names": z.union([z.array(z.string()), z.null()]),
    "tag-groups": z.union([z.array(z.string()), z.null()]),
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

// BENDDAO
const ReserveAssetSchema = z.object({
    name: z.string(),
    underlyingAsset: z.string().length(42),
    decimals: z.number(),
    symbol: z.string(),
    price: z.object({
        priceInEth: z.string(),
        oracle: z.object({
            usdPriceEth: z.string(),
            __typename: z.string(),
        }),
        __typename: z.string(),
    }),
    __typename: z.string(),
});

const NFTItemSchema = z.object({
    nftItemInfo: z.object({
        type: z.string(),
        ownerAddress: z.string().length(42),
        collectionAddress: z.string().length(42),
        tokenID: z.string(),
        bnftAddress: z.string().length(42),
        nftItem: z.object({
            tokenURIRaw: z.string(),
            cdnImageUrl: z.string(),
            collection: z.object({
                name: z.string(),
                floorPrice: z.string(),
                openseaImageURL: z.string(),
                creator: z.string(),
                releaseDate: z.string(),
                totalSupply: z.number(),
                royaltyFee: z.string(),
                nftData: z.object({
                    ltv: z.number(),
                    liquidationThreshold: z.number(),
                }),
                bendNFT: z.object({
                    bnftAddress: z.string().length(42),
                }),
                wrapperAssetAddress: z.string(),
                wrapperGatewayAddress: z.string(),
                wrapperAssetNFTCollection: z.string(),
                __typename: z.string(),
            }),
            __typename: z.string(),
        }),
        nftOrder: z.null(),
        loan: z.object({
            subgraphID: z.string(),
            bidStartTimestamp: z.number(),
            currentAmount: z.string(),
            bidPrice: z.string(),
            state: z.string(),
            bidderAddress: z.string(),
            reserveAsset: z.string().length(42),
            reserveData: z.object({
                decimals: z.number(),
                priceInETH: z.string(),
                __typename: z.string(),
            }),
            __typename: z.string(),
        }),
        apeStakingProxies: z.array(z.string()),
        __typename: z.string(),
    }),
    delegated: z.boolean(),
    availableToBorrow: z.string(),
    healthFactor: z.number(),
});

export const AuctionsDataSchema = z.object({
    id: z.string(),
    loanId: z.string(),
    tokenId: z.string(),
    collectionName: z.string(),
    collectionAddress: z.string().length(42),
    borrowed: z.string(),
    bidPrice: z.string(),
    floorPrice: z.string(),
    collateralRatio: z.number(),
    liquidationRatio: z.number(),
    liquidationPrice: z.string(),
    healthFactor: z.number(),
    reserveAsset: ReserveAssetSchema,
    bidEndTime: z.number(),
    bidStartTimestamp: z.number(),
    auctionHistory: z.array(z.any()),
    contractApproved: z.boolean(),
    state: z.string(),
    bidderAddress: z.string().length(42),
    bidFine: z.string(),
    order: z.null(),
    image: z.string().url(),
    nftAsset: NFTItemSchema,
});