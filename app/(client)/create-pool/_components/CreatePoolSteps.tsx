import React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Percent } from 'lucide-react';
import SelectCoinImage from '@/components/select/SelectCoinImage';
import SelectOracleImage from '@/components/select/SelectOracleImage';
import { UseFormReturn } from 'react-hook-form';

interface StepProps {
    form: UseFormReturn;
    validationError: string | null;
    activeStep: number;
    isAnimating: boolean;
}

export const CreatePoolSteps: React.FC<StepProps> = ({
    form,
    validationError,
    activeStep,
    isAnimating
}) => {
    const collateralOptions = ["AZUKI", "BAYC"];
    const loanTokenOptions = ["USDC", "USDT"];
    const irmOptions = ["Linear Rate", "Non-Linear Rate", "Dynamic Rate"];
    const oracleOptions = ["LINK", "BAND", "API3", "TRB", "UNI"];

    const ValidationError = () => (
        validationError ? (
            <Card className='bg-red-800/10 px-5 py-3'>
                <CardContent className='p-0'>
                    <p className="text-sm text-red-500">{validationError}</p>
                </CardContent>
            </Card>
        ) : null
    );

    return (
        <div className={`transition-opacity duration-300 h-full ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
            {activeStep === 0 && (
                <FormField
                    control={form.control}
                    name="collateralToken"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-white">Collateral Token</FormLabel>
                            <SelectCoinImage
                                data={collateralOptions}
                                value={field.value || ""}
                                onChange={field.onChange}
                            />
                            <FormDescription>
                                Select the IP that will be used as collateral
                            </FormDescription>
                            <ValidationError />
                        </FormItem>
                    )}
                />
            )}

            {activeStep === 1 && (
                <FormField
                    control={form.control}
                    name="loanToken"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-white">Loan Token</FormLabel>
                            <SelectCoinImage
                                data={loanTokenOptions}
                                value={field.value || ""}
                                onChange={field.onChange}
                            />
                            <FormDescription>
                                Select the token you want to borrow
                            </FormDescription>
                            <ValidationError />
                        </FormItem>
                    )}
                />
            )}

            {activeStep === 2 && (
                <FormField
                    control={form.control}
                    name="irm"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Interest Rate Model</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value || ""}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select rate model" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {irmOptions.map((option) => (
                                        <SelectItem key={option} value={option}>
                                            {option}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <FormDescription>
                                Choose the interest rate calculation model
                            </FormDescription>
                            <ValidationError />
                        </FormItem>
                    )}
                />
            )}

            {activeStep === 3 && (
                <FormField
                    control={form.control}
                    name="oracle"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-white">Oracle</FormLabel>
                            <SelectOracleImage
                                data={oracleOptions}
                                value={field.value || ""}
                                onChange={field.onChange}
                            />
                            <FormDescription>
                                Select an oracle you want to use
                            </FormDescription>
                            <ValidationError />
                        </FormItem>
                    )}
                />
            )}

            {activeStep === 4 && (
                <FormField
                    control={form.control}
                    name="ltv"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-white">Loan to Value (LTV)</FormLabel>
                            <FormControl>
                                <div className="relative">
                                    <Input
                                        type="number"
                                        {...field}
                                        className="pr-10"
                                        placeholder="Enter LTV percentage (0-100)"
                                        value={field.value || ""}
                                        min="0"
                                        max="100"
                                        onChange={(e) => {
                                            const value = (e.target as HTMLInputElement).value;
                                            const sanitizedValue = value.replace(/[^0-9]/g, '');
                                            const cappedValue = Math.min(Number(sanitizedValue), 100);
                                            field.onChange(cappedValue.toString());
                                        }}
                                    />
                                    <Percent className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                                </div>
                            </FormControl>
                            <FormDescription>
                                Enter the Loan to Value ratio in percentage
                            </FormDescription>
                            <ValidationError />
                        </FormItem>
                    )}
                />
            )}

            {activeStep === 5 && (
                <FormField
                    control={form.control}
                    name="lth"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-white">Liquidation Threshold (LTH)</FormLabel>
                            <FormControl>
                                <div className="relative">
                                    <Input
                                        type="number"
                                        {...field}
                                        className="pr-10"
                                        placeholder="Enter LTH percentage (0-100)"
                                        value={field.value || ""}
                                        min="0"
                                        max="100"
                                        onChange={(e) => {
                                            const value = (e.target as HTMLInputElement).value;
                                            const sanitizedValue = value.replace(/[^0-9]/g, '');
                                            const cappedValue = Math.min(Number(sanitizedValue), 100);
                                            field.onChange(cappedValue.toString());
                                        }}
                                    />
                                    <Percent className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                                </div>
                            </FormControl>
                            <FormDescription>
                                Enter the Liquidation Threshold in percentage
                            </FormDescription>
                            <ValidationError />
                        </FormItem>
                    )}
                />
            )}
        </div>
    );
};