import { z } from 'zod';
import { AuctionsDataSchema, CoinMarketCapSchema, poolSchema } from './schemas';

export type PoolSchema = z.infer<typeof poolSchema>;

export type CoinMarketCapSchema = z.infer<typeof CoinMarketCapSchema>;

export type AuctionsDataSchema = z.infer<typeof AuctionsDataSchema>;