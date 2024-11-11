"use client"

import React from 'react';
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
import { toast } from 'sonner';

const formSchema = z.object({
    collateral: z.string().min(1, "Please select a collateral"),
    loanToken: z.string().min(1, "Please select a loan token"),
    irm: z.string().min(1, "Please select an interest rate model"),
    oracle: z.string().min(1, "Please select an oracle"),
    ltv: z.string().transform((val) => (val === '' ? '0' : val)),
    lth: z.string().transform((val) => (val === '' ? '0' : val)),
});

type FormData = z.infer<typeof formSchema>;

const CreatePoolComponent = () => {
    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            collateral: "",
            loanToken: "",
            irm: "",
            oracle: "",
            ltv: "0",
            lth: "0",
        },
    });

    const collateralOptions = ["BTC", "ETH", "MATIC", "BNB"];
    const loanTokenOptions = ["USDC", "USDT", "DAI"];
    const irmOptions = ["Linear Rate", "Non-Linear Rate", "Dynamic Rate"];
    const oracleOptions = ["Chainlink", "Band Protocol", "API3"];

    const onSubmit = (data: FormData) => {
        const formattedData = {
            ...data,
            ltv: parseFloat(data.ltv) || 0,
            lth: parseFloat(data.lth) || 0,
        };
        console.log('Form submitted:', formattedData);
        toast.success("Pool created successfully");
    };

    return (
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
                            name="collateral"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Collateral</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select collateral IP" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {collateralOptions.map((option) => (
                                                <SelectItem key={option} value={option}>{option}</SelectItem>
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
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select loan token" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {loanTokenOptions.map((option) => (
                                                <SelectItem key={option} value={option}>{option}</SelectItem>
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
                                        defaultValue={field.value}
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
                                        defaultValue={field.value}
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

                        <Button type="submit" className="w-full">
                            Submit Configuration
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
};

export default CreatePoolComponent;