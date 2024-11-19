import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { FormField, FormItem, FormLabel, FormDescription, FormControl } from '@/components/ui/form';
import { Slider } from '@/components/ui/slider';
import { UseFormReturn } from 'react-hook-form';
import { z } from 'zod';
import { supplyCollateralAndBorrow } from '@/lib/validation/schemas';

type FormData = z.infer<typeof supplyCollateralAndBorrow>;

export const LTVSection = ({ form }: {form: UseFormReturn<FormData>}) => {
    return (
        <Card className='p-5'>
            <CardContent className='p-2'>
                <FormField
                    control={form.control}
                    name="ltv"
                    render={({ field }) => (
                        <FormItem className='w-full py-5 flex flex-col gap-3 space-y-0'>
                            <div className='flex flex-row justify-between'>
                                <FormLabel className='text-xl'>Loan to Value (LTV)</FormLabel>
                                <FormLabel className='text-xl'>{field.value[0]}%</FormLabel>
                            </div>
                            <div className='flex flex-row justify-between'>
                                <FormDescription>Ratio of the collateral value to the borrowed value</FormDescription>
                                <FormDescription>Max. 80.00%</FormDescription>
                            </div>
                            <FormControl>
                                <Slider
                                    defaultValue={[50]}
                                    max={100}
                                    step={1}
                                    onValueChange={field.onChange}
                                    className='cursor-pointer pt-5'
                                />
                            </FormControl>
                            <div className="flex justify-between text-xs text-textGraycustom">
                                <span>Conservative</span>
                                <span>Moderate</span>
                                <span>Aggressive</span>
                                <span>Liquidation</span>
                            </div>
                        </FormItem>
                    )}
                />
            </CardContent>
        </Card>
    );
};