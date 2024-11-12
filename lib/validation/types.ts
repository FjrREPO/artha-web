import { z } from 'zod';
import { CoinMarketCapSchema, poolSchema } from './schemas';

export type PoolSchema = z.infer<typeof poolSchema>;

export type CoinMarketCapSchema = z.infer<typeof CoinMarketCapSchema>;