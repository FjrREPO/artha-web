import { z } from 'zod';
import { alchemyNftSchema, auctionActivitySchema, auctionHistorySchema, AuctionsDataSchema, coinMarketCapSchema, curatorSchema, earnSchema, poolSchema } from './schemas';

export type PoolSchema = z.infer<typeof poolSchema>;

export type EarnSchema = z.infer<typeof earnSchema>;

export type CuratorSchema = z.infer<typeof curatorSchema>;

export type AuctionHistorySchema = z.infer<typeof auctionHistorySchema>;

export type AuctionActivitySchema = z.infer<typeof auctionActivitySchema>;

export type AlchemyNftSchema = z.infer<typeof alchemyNftSchema>;

export type CoinMarketCapSchema = z.infer<typeof coinMarketCapSchema>;

export type AuctionsDataSchema = z.infer<typeof AuctionsDataSchema>;