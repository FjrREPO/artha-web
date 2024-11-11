import { z } from 'zod';
import { poolSchema } from './schemas';

export type PoolSchema = z.infer<typeof poolSchema>;