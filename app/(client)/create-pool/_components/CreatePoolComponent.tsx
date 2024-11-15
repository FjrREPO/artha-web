"use client"

import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCreatePool } from '@/hooks/useCreatePool';
import { LoadingTransaction } from '@/components/loader/LoadingTransaction';
import { SuccessDialog } from '@/components/dialog/SuccessDialog';
import { poolSchema } from '@/lib/validation/schemas';
import { CoinImage } from '@/components/coin/CoinImage';
import { Label } from '@/components/ui/label';
import { CryptoToken } from '@/constants/cryptoToken';

type FormData = z.infer<typeof poolSchema>;

const CreatePoolComponent = () => {
    const [showSuccessDialog, setShowSuccessDialog] = useState(false);

    const form = useForm<FormData>({
        resolver: zodResolver(poolSchema),
        defaultValues: {
            collateralToken: "",
            loanToken: "",
            irm: "",
            oracle: "",
            ltv: "0",
            lth: "0",
        },
    });

    const collateralOptions = ["AZUKI", "BAYC"];
    const loanTokenOptions = ["USDC", "USDT"];
    const irmOptions = ["Linear Rate", "Non-Linear Rate", "Dynamic Rate"];
    const oracleOptions = ["Chainlink", "Band Protocol", "API3"];

    const {
        createPoolHash,
        isCreatePoolPending,
        isCreatePoolConfirming,
        isCreatePoolConfirmed,
        handleCreatePool,
    } = useCreatePool();

    const onSubmit = (data: FormData) => {
        const findCollateralBySymbol = CryptoToken.find((token) => token.symbol === data.collateralToken);
        const findLoanTokenBySymbol = CryptoToken.find((token) => token.symbol === data.loanToken);

        handleCreatePool(
            findCollateralBySymbol?.contract_address[0].contract_address || "",
            findLoanTokenBySymbol?.contract_address[0].contract_address || "",
            data.oracle || "",
            data.irm || "",
            data.ltv || "",
            data.lth || ""
        );
    };

    useEffect(() => {
        if (createPoolHash && isCreatePoolConfirmed) {
            setShowSuccessDialog(true);
            form.reset();
        }
    }, [createPoolHash, isCreatePoolConfirmed, form]);

    return (
        <>
            {(isCreatePoolConfirming || isCreatePoolPending) && (
                <LoadingTransaction
                    message={isCreatePoolConfirming ? "Creating..." : "Confirming create..."}
                />
            )}
            <SuccessDialog
                isOpen={showSuccessDialog}
                onClose={() => setShowSuccessDialog(false)}
                txHash={createPoolHash || ""}
                processName="Create Pool"
            />
            <Card className="w-full max-w-lg mx-auto">
                <CardHeader>
                    <CardTitle>Lending Protocol Configuration</CardTitle>
                    <CardDescription>Configure your lending pool parameters</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                                control={form.control}
                                name="collateralToken"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Collateral</FormLabel>
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value || ""}
                                        >
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select collateral IP" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {collateralOptions.map((option) => (
                                                    <SelectItem key={option} value={option}>
                                                        <div className='flex flex-row gap-2 items-center'>
                                                            <CoinImage symbol={option} />
                                                            <Label>{option}</Label>
                                                        </div>
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
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
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value || ""}
                                        >
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select loan token" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {loanTokenOptions.map((option) => (
                                                    <SelectItem key={option} value={option}>
                                                        <div className='flex flex-row gap-2 items-center'>
                                                            <CoinImage symbol={option} />
                                                            <Label>{option}</Label>
                                                        </div>
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormDescription>
                                            Select the token you want to borrow
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="irm"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Interest Rate Model</FormLabel>
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value || ""}
                                        >
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select interest rate model" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {irmOptions.map((option) => (
                                                    <SelectItem key={option} value={option}>{option}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
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
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value || ""}
                                        >
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select oracle provider" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {oracleOptions.map((option) => (
                                                    <SelectItem key={option} value={option}>{option}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormDescription>
                                            Select the price feed oracle
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="ltv"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>LTV (Loan to Value)</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="number"
                                                {...field}
                                                value={field.value || ''}
                                                onChange={(e) => {
                                                    const value = e.target.value;
                                                    field.onChange(value === '' ? '' : value);
                                                }}
                                                min="0"
                                                max="100"
                                                placeholder="Enter LTV percentage"
                                            />
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
                                        <FormLabel>LTH (Liquidation Threshold)</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="number"
                                                {...field}
                                                value={field.value || ''}
                                                onChange={(e) => {
                                                    const value = e.target.value;
                                                    field.onChange(value === '' ? '' : value);
                                                }}
                                                min="0"
                                                max="100"
                                                placeholder="Enter LTH percentage"
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            Enter the Liquidation Threshold in percentage
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button
                                type="submit"
                                className="w-full"
                                disabled={isCreatePoolPending || isCreatePoolConfirming}
                            >
                                {isCreatePoolPending
                                    ? 'Creating Pool...'
                                    : isCreatePoolConfirming
                                        ? 'Confirming Transaction...'
                                        : 'Create Pool'
                                }
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </>
    );
};

export default CreatePoolComponent;