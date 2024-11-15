import { z } from 'zod';
import { auctionActivitySchema, auctionHistorySchema, AuctionsDataSchema, coinMarketCapSchema, curatorSchema, poolSchema } from './schemas';

export type PoolSchema = z.infer<typeof poolSchema>;

export type CuratorSchema = z.infer<typeof curatorSchema>;

export type AuctionHistorySchema = z.infer<typeof auctionHistorySchema>;

export type AuctionActivitySchema = z.infer<typeof auctionActivitySchema>;

export type CoinMarketCapSchema = z.infer<typeof coinMarketCapSchema>;

export type AuctionsDataSchema = z.infer<typeof AuctionsDataSchema>;