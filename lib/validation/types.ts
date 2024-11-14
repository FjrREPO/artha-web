import { z } from 'zod';
import { AuctionsDataSchema, coinMarketCapSchema, curatorSchema, poolSchema } from './schemas';

export type PoolSchema = z.infer<typeof poolSchema>;

export type CuratorSchema = z.infer<typeof curatorSchema>;

export type CoinMarketCapSchema = z.infer<typeof coinMarketCapSchema>;

export type AuctionsDataSchema = z.infer<typeof AuctionsDataSchema>;