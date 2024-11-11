import { z } from 'zod';

export const poolSchema = z.object({
    id: z.string().uuid(),
    irm: z.string(),
    loanToken: z.string(),
    lth: z.number().min(0).max(100),
    ltv: z.number().min(0).max(100),
    oracle: z.string(),
    collateralToken: z.string(),
});
