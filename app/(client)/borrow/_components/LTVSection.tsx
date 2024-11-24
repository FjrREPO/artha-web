import React, { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { FormField, FormItem, FormLabel, FormDescription, FormControl } from '@/components/ui/form';
import { Slider } from '@/components/ui/slider';
import { UseFormReturn } from 'react-hook-form';
import { PoolSchema, SupplyCollateralAndBorrow } from '@/lib/validation/types';
import SkeletonWrapper from '@/components/loader/SkeletonWrapper';

interface Props {
    form: UseFormReturn<SupplyCollateralAndBorrow>;
    poolData: PoolSchema[];
    poolLoading: boolean
}

export const LTVSection = ({ form, poolData, poolLoading }: Props) => {
    const supplyPool = form.watch('supplyPool');

    const selectedPool = poolData?.find((pool) => pool.id === supplyPool);

    const maxLTV = selectedPool?.ltv ? Number(selectedPool.ltv) : 80;

    useEffect(() => {
        if (poolData) {
            form.setValue('ltv', parseInt(poolData[0]?.ltv as string));
        }
        if (selectedPool) {
            form.setValue('ltv', Number(selectedPool.ltv));
        }
    }, [supplyPool, selectedPool, poolData, form]);

    return (
        <Card className="p-5">
            <CardContent className="p-2">
                <FormField
                    control={form.control}
                    name="ltv"
                    render={({ field }) => (
                        <FormItem className="w-full py-5 flex flex-col gap-3 space-y-0">
                            <div className="flex flex-row justify-between">
                                <FormLabel className="text-xl">Loan to Value (LTV)</FormLabel>
                                <SkeletonWrapper isLoading={poolLoading}>
                                    <FormLabel className="text-xl">
                                        {field.value?.toFixed(2)}%
                                    </FormLabel>
                                </SkeletonWrapper>
                            </div>
                            <div className="flex flex-row justify-between">
                                <FormDescription>
                                    Ratio of the collateral value to the borrowed value
                                </FormDescription>
                                <SkeletonWrapper isLoading={poolLoading}>
                                    <FormDescription>
                                        Max. {maxLTV.toFixed(2)}%
                                    </FormDescription>
                                </SkeletonWrapper>
                            </div>
                            <FormControl>
                                <SkeletonWrapper isLoading={poolLoading}>
                                    <Slider
                                        value={[field.value || 0]}
                                        max={maxLTV}
                                        step={1}
                                        onValueChange={(values) => {
                                            field.onChange(values[0]);
                                        }}
                                        className="cursor-pointer pt-5"
                                    />
                                </SkeletonWrapper>
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