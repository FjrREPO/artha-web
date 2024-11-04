type HexAddress = `0x${string}`;

interface Token {
    address: string;
    name: string;
    symbol: string;
    description: string;
    decimals: number;
}

interface TVL {
    totalAssets: string;
    tvl: number;
    price: number;
}

interface Fees {
    performance: number;
    management: number;
}

interface Points {
    weekAgo: number;
    monthAgo: number;
    inception: number;
}

interface PricePerShare {
    today: number;
    weekAgo: number;
    monthAgo: number;
}

interface Extra {
    stakingRewardsAPR: number | null;
    gammaRewardAPR: number | null;
}

interface Composite {
    boost: number | null;
    poolAPY: number | null;
    boostedAPR: number | null;
    baseAPR: number | null;
    cvxAPR: number | null;
    rewardsAPR: number | null;
    v3OracleCurrentAPR: number;
    v3OracleStratRatioAPR: number;
}

interface ForwardAPR {
    type: string;
    netAPR: number;
    composite: Composite;
}

interface APR {
    type: string;
    netAPR: number;
    fees: Fees;
    points: Points;
    pricePerShare: PricePerShare;
    extra: Extra;
    forwardAPR: ForwardAPR;
}

interface StrategyDetails {
    totalDebt: string;
    totalLoss: string;
    totalGain: string;
    performanceFee: number;
    lastReport: number;
    debtRatio?: number; // Optional, as some strategies might not include it
}

interface Strategy {
    address: string;
    name: string;
    details: StrategyDetails;
}

interface Rewards {
    "address": "0x41252E8691e964f7DE35156B68493bAb6797a275",
    "name": "Discount YFI",
    "symbol": "dYFI",
    "decimals": 18,
    "price": 3187.2419723344524,
    "isFinished": false,
    "finishedAt": 1731542400,
    "apr": 0.06267604443361119,
    "perWeek": 0
}

interface Staking {
    address: string;
    available: boolean;
    source: string;
    rewards: Rewards[]; // Adjust based on the actual structure of rewards
}

interface Migration {
    available: boolean;
    address: string;
    contract: string;
}

interface Info {
    riskLevel: number;
    isRetired: boolean;
    isBoosted: boolean;
    isHighlighted: boolean;
    riskScore: number[];
}

interface Vault {
    address: string;
    type: string;
    kind: string;
    symbol: string;
    name: string;
    category: string;
    version: string;
    description: string;
    decimals: number;
    chainID: number;
    token: Token;
    tvl: TVL;
    apr: APR;
    strategies: Strategy[];
    staking: Staking;
    migration: Migration;
    featuringScore: number;
    pricePerShare: string;
    info: Info;
}

interface EarnData {
    address: HexAddress;
    lendAsset: string;
    lendTo: string[];
    accurator: string;
    aggregatorName: string;
    whitelistedPools: string[];
    lendAPY: string;
    tvl: string;
    rewards?: string[];
}

interface PoolData {
    address: string;
    type: string;
    kind: string;
    symbol: string;
    name: string;
    category: string;
    version: string;
    description: string;
    decimals: number;
    chainID: number;
    token: Token;
    tvl: TVL;
    apr: APR;
    strategies: Strategy[];
    staking: Staking;
    migration: Migration;
    featuringScore: number;
    pricePerShare: string;
    info: Info;
}