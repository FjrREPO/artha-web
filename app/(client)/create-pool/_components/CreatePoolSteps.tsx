import React, { useMemo } from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Percent } from 'lucide-react';
import SelectCoinImage from '@/components/select/SelectCoinImage';
import SelectOracleImage from '@/components/select/SelectOracleImage';
import { UseFormReturn } from 'react-hook-form';
import { CoinMarketCapSchema, IRMSchema, LTVSchema } from '@/lib/validation/types';
import { poolSchema } from '@/lib/validation/schemas';
import { z } from 'zod';
import SkeletonWrapper from '@/components/loader/SkeletonWrapper';
import ValidationError from '@/components/error/validation-error';

type FormData = z.infer<typeof poolSchema>;

interface StepProps {
    form: UseFormReturn<FormData>;
    validationError: string | null;
    activeStep: number;
    isAnimating: boolean;
    oracleData?: CoinMarketCapSchema[];
    isOracleLoading: boolean;
    cryptoTokenData?: CoinMarketCapSchema[];
    cryptoTokenLoading: boolean;
    ltvData?: LTVSchema[];
    ltvLoading: boolean;
    irmData?: IRMSchema[];
    irmLoading: boolean;
}

export const CreatePoolSteps: React.FC<StepProps> = ({
    form,
    validationError,
    activeStep,
    isAnimating,
    oracleData,
    isOracleLoading,
    cryptoTokenData,
    cryptoTokenLoading,
    ltvData,
    ltvLoading,
    irmData,
    irmLoading
}) => {
    const collateralOptions = useMemo(() => ["AZUKI", "BAYC", "DAI"], []);
    const loanTokenOptions = useMemo(() => ["USDC", "USDT", "TUSD"], []);

    const findCollateralOptions = React.useMemo(() =>
        cryptoTokenData?.filter((token) => collateralOptions.includes(token.symbol)) ?? [],
        [cryptoTokenData, collateralOptions]
    );

    const findLoanTokenOptions = React.useMemo(() =>
        cryptoTokenData?.filter((token) => loanTokenOptions.includes(token.symbol)) ?? [],
        [cryptoTokenData, loanTokenOptions]
    );

    const handleOracleSelection = (value: string) => {
        form.setValue('oracle', value, { shouldValidate: true });
    };

    const handleCollateralSelection = (value: string) => {
        form.setValue('collateralToken', value, { shouldValidate: true });
    };

    const handleLoanSelection = (value: string) => {
        form.setValue('loanToken', value, { shouldValidate: true });
    };

    return (
        <div className={`transition-opacity duration-300 h-full ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
            {activeStep === 0 && (
                <div className="space-y-5">
                    <FormField
                        control={form.control}
                        name="collateralToken"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Collateral Token</FormLabel>
                                <FormControl>
                                    <SelectCoinImage
                                        data={findCollateralOptions}
                                        onChange={handleCollateralSelection}
                                        value={field.value || ""}
                                        isLoading={cryptoTokenLoading}
                                    />
                                </FormControl>
                                <FormDescription>
                                    Select the IP that will be used as collateral
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="loanToken"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Loan Token</FormLabel>
                                <FormControl>
                                    <SelectCoinImage
                                        data={findLoanTokenOptions}
                                        onChange={handleLoanSelection}
                                        value={field.value || ""}
                                        isLoading={cryptoTokenLoading}
                                    />
                                </FormControl>
                                <FormDescription>
                                    Select the token you want to borrow
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <ValidationError message={validationError} />
                </div>
            )}

            {activeStep === 1 && (
                <div className="space-y-5">
                    <FormField
                        control={form.control}
                        name="irm"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Interest Rate Model</FormLabel>
                                <SkeletonWrapper isLoading={irmLoading}>
                                    <Select onValueChange={field.onChange} value={field.value || ""}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select rate model" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent className='cursor-pointer'>
                                            {irmData?.map((option, index) => (
                                                <SelectItem key={index} value={option.irm} className='cursor-pointer'>
                                                    {option.irm}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </SkeletonWrapper>
                                <FormDescription>
                                    Choose the interest rate calculation model
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="oracle"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Oracle</FormLabel>
                                <FormControl>
                                    <SelectOracleImage
                                        data={oracleData}
                                        onChange={handleOracleSelection}
                                        value={field.value || ""}
                                        isLoading={isOracleLoading}
                                    />
                                </FormControl>
                                <FormDescription>
                                    Select an oracle you want to use
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <ValidationError message={validationError} />
                </div>
            )}

            {activeStep === 2 && (
                <div className="space-y-5">
                    <FormField
                        control={form.control}
                        name="ltv"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Loan to Value (LTV)</FormLabel>
                                <FormControl>
                                    <SkeletonWrapper isLoading={ltvLoading}>
                                        <Select onValueChange={field.onChange} value={field.value || ""}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select LTV Percentage" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent className='cursor-pointer'>
                                                {ltvData?.map((option, index) => (
                                                    <SelectItem key={index} value={option.ltv} className={'cursor-pointer'}>
                                                        {option.ltv}%
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </SkeletonWrapper>
                                </FormControl>
                                <FormDescription>
                                    Enter the Loan to Value ratio in percentage
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="lth"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Liquidation Threshold (LTH)</FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Input
                                            type="number"
                                            className="pr-10"
                                            placeholder="Enter LTH percentage (0-100)"
                                            {...field}
                                            value={field.value || ''}
                                            onChange={(e) => {
                                                const value = e.target.value;
                                                const sanitizedValue = value.replace(/[^0-9]/g, '');
                                                const cappedValue = Math.min(Number(sanitizedValue), 100);
                                                field.onChange(cappedValue.toString());
                                            }}
                                            min="0"
                                            max="100"
                                        />
                                        <Percent className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                                    </div>
                                </FormControl>
                                <FormDescription>
                                    Enter the Liquidation Threshold in percentage
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <ValidationError message={validationError} />
                </div>
            )}
        </div>
    );
};