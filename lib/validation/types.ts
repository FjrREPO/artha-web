import { z } from 'zod';
import { alchemyNftSchema, auctionActivitySchema, auctionHistorySchema, AuctionsDataSchema, coinMarketCapSchema, curatorSchema, earnSchema, irmSchema, ltvSchema, poolSchema, supplyCollateralAndBorrow } from './schemas';

export type PoolSchema = z.infer<typeof poolSchema>;

export type LTVSchema = z.infer<typeof ltvSchema>;

export type IRMSchema = z.infer<typeof irmSchema>;

export type SupplyCollateralAndBorrow = z.infer<typeof supplyCollateralAndBorrow>;

export type EarnSchema = z.infer<typeof earnSchema>;

export type CuratorSchema = z.infer<typeof curatorSchema>;

export type AuctionHistorySchema = z.infer<typeof auctionHistorySchema>;

export type AuctionActivitySchema = z.infer<typeof auctionActivitySchema>;

export type AlchemyNftSchema = z.infer<typeof alchemyNftSchema>;

export type CoinMarketCapSchema = z.infer<typeof coinMarketCapSchema>;

export type AuctionsDataSchema = z.infer<typeof AuctionsDataSchema>;