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
import { X } from 'lucide-react';
import { LoadingTransaction } from '@/components/loader/LoadingTransaction';
import { SuccessDialog } from '@/components/dialog/SuccessDialog';
import { curatorSchema } from '@/lib/validation/schemas';
import { useCreateCurator } from '@/hooks/useCreateCurator';
import { useQuery } from '@tanstack/react-query';
import { PoolSchema } from '@/lib/validation/types';
import request from 'graphql-request';
import { API_SUBGRAPH } from '@/constants/config';
import { queryPool } from '@/graphql/query';
import SkeletonWrapper from '@/components/loader/SkeletonWrapper';
import { CoinImage } from '@/components/coin/CoinImage';
import { CoinSymbol } from '@/components/coin/CoinSymbol';
import { Alert, AlertDescription } from '@/components/ui/alert';

type FormData = z.infer<typeof curatorSchema>;

interface QueryData {
    pools: PoolSchema[];
}

interface PoolAllocation {
    poolId: string;
    allocation: number;
}

const CreateCuratorComponent = () => {
    const [showSuccessDialog, setShowSuccessDialog] = useState(false);
    const [selectedPools, setSelectedPools] = useState<PoolAllocation[]>([]);
    const [totalAllocation, setTotalAllocation] = useState(0);
    const [allocationError, setAllocationError] = useState<string | null>(null);

    const { data: poolData, isLoading: isPoolsLoading } = useQuery<QueryData>({
        queryKey: ['pool'],
        queryFn: async () => {
            return await request(API_SUBGRAPH, queryPool);
        },
        refetchInterval: 60000,
    });

    const form = useForm<FormData>({
        resolver: zodResolver(curatorSchema),
        defaultValues: {
            _name: "",
            _symbol: "",
            _asset: "",
            pools: [],
            allocations: []
        },
    });

    const {
        createCuratorHash,
        isCreateCuratorPending,
        handleCreateCurator,
        isCreateCuratorConfirmed,
        isCreateCuratorConfirming
    } = useCreateCurator();

    const remainingAllocation = 100 - totalAllocation;

    const updateTotalAllocation = (allocations: number[]) => {
        const total = allocations.reduce((sum, allocation) => sum + (allocation || 0), 0);
        setTotalAllocation(total);

        if (total > 100) {
            setAllocationError("Total allocation cannot exceed 100%");
        } else if (total < 100 && selectedPools.length > 0) {
            setAllocationError(`Total allocation must be 100%. Currently: ${total}%`);
        } else {
            setAllocationError(null);
        }
    };

    const handlePoolSelection = (selectedPoolId: string) => {
        if (!selectedPools.some(p => p.poolId === selectedPoolId)) {
            const newPool = { poolId: selectedPoolId, allocation: 0 };
            setSelectedPools([...selectedPools, newPool]);

            // Update form values
            const currentPools = form.getValues('pools');
            const currentAllocations = form.getValues('allocations');
            form.setValue('pools', [...currentPools, selectedPoolId]);
            form.setValue('allocations', [...currentAllocations, 0]);
            updateTotalAllocation([...currentAllocations, 0]);
        }
    };

    const handleRemovePool = (poolId: string, index: number) => {
        setSelectedPools(selectedPools.filter(p => p.poolId !== poolId));
        const currentPools = form.getValues('pools');
        const currentAllocations = form.getValues('allocations');

        const newPools = currentPools.filter((_, i) => i !== index);
        const newAllocations = currentAllocations.filter((_, i) => i !== index);

        form.setValue('pools', newPools);
        form.setValue('allocations', newAllocations);
        updateTotalAllocation(newAllocations);
    };

    const handleAllocationChange = (value: number, index: number) => {
        const currentAllocations = form.getValues('allocations');
        const newAllocations = [...currentAllocations];

        const otherAllocationsTotal = currentAllocations.reduce((sum, allocation, i) =>
            i !== index ? sum + (allocation || 0) : sum, 0);
        const maxAllowedAllocation = 100 - otherAllocationsTotal;

        const clampedValue = Math.min(Math.max(0, value), maxAllowedAllocation);
        newAllocations[index] = clampedValue;

        form.setValue(`allocations.${index}`, clampedValue);
        updateTotalAllocation(newAllocations);
    };

    const onSubmit = (data: FormData) => {
        handleCreateCurator(
            data._name,
            data._symbol,
            data._asset,
            data.pools,
            data.allocations
        );
    };

    useEffect(() => {
        if (createCuratorHash && isCreateCuratorConfirmed) {
            setShowSuccessDialog(true);
            form.reset();
            setSelectedPools([]);
        }
    }, [createCuratorHash, isCreateCuratorConfirmed, form]);

    return (
        <>
            {(isCreateCuratorConfirming || isCreateCuratorPending) && (
                <LoadingTransaction
                    message={isCreateCuratorConfirming ? "Creating..." : "Confirming create..."}
                />
            )}
            <SuccessDialog
                isOpen={showSuccessDialog}
                onClose={() => setShowSuccessDialog(false)}
                txHash={createCuratorHash || ""}
                processName="Create Pool"
            />
            <Card className="w-full max-w-lg mx-auto">
                <CardHeader>
                    <CardTitle>Create Accurator</CardTitle>
                    <CardDescription>Create an Accurator</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <SkeletonWrapper isLoading={isPoolsLoading}>
                                <FormField
                                    control={form.control}
                                    name="_name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Name" {...field} />
                                            </FormControl>
                                            <FormDescription>
                                                Enter the curator name
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </SkeletonWrapper>
                            <SkeletonWrapper isLoading={isPoolsLoading}>
                                <FormField
                                    control={form.control}
                                    name="_symbol"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Symbol</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Symbol" {...field} />
                                            </FormControl>
                                            <FormDescription>
                                                Enter the curator symbol
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </SkeletonWrapper>
                            <SkeletonWrapper isLoading={isPoolsLoading}>
                                <FormField
                                    control={form.control}
                                    name="_asset"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Asset</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Asset address" {...field} />
                                            </FormControl>
                                            <FormDescription>
                                                Enter the asset address
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </SkeletonWrapper>
                            <div className="space-y-4">
                                <SkeletonWrapper isLoading={isPoolsLoading}>
                                    <FormItem>
                                        <FormLabel>Pool Selection</FormLabel>
                                        <Select onValueChange={handlePoolSelection}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select pools" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {poolData?.pools.map((pool) => (
                                                    <SelectItem
                                                        key={pool.id}
                                                        value={pool.id!}
                                                        disabled={selectedPools.some(p => p.poolId === pool.id)}
                                                    >
                                                        <div className="flex flex-row gap-2 items-center">
                                                            <CoinImage address={pool.collateralToken} />
                                                            <CoinSymbol address={pool.collateralToken} />
                                                        </div>
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </FormItem>
                                </SkeletonWrapper>

                                {selectedPools.length > 0 && (
                                    <Alert>
                                        <AlertDescription>
                                            Total Allocation: {totalAllocation}% | Remaining: {remainingAllocation}%
                                        </AlertDescription>
                                    </Alert>
                                )}

                                {allocationError && (
                                    <Alert variant="destructive">
                                        <AlertDescription>{allocationError}</AlertDescription>
                                    </Alert>
                                )}
                                <SkeletonWrapper isLoading={isPoolsLoading}>
                                    {selectedPools.map((selectedPool, index) => {
                                        const pool = poolData?.pools.find(p => p.id === selectedPool.poolId);
                                        return (
                                            <div key={selectedPool.poolId} className="relative p-4 border rounded-lg">
                                                <Button
                                                    type="button"
                                                    variant="ghost"
                                                    size="sm"
                                                    className="absolute right-2 top-2"
                                                    onClick={() => handleRemovePool(selectedPool.poolId, index)}
                                                >
                                                    <X className="h-4 w-4" />
                                                </Button>
                                                <div className="flex items-center gap-2 mb-2">
                                                    <CoinImage address={pool?.collateralToken ?? ""} />
                                                    <CoinSymbol address={pool?.collateralToken ?? ""} />
                                                </div>
                                                <FormField
                                                    control={form.control}
                                                    name={`allocations.${index}`}
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Allocation Percentage</FormLabel>
                                                            <FormControl>
                                                                <Input
                                                                    type="number"
                                                                    min="0"
                                                                    max="100"
                                                                    step="0.1"
                                                                    placeholder="Enter allocation percentage"
                                                                    {...field}
                                                                    onChange={(e) => {
                                                                        const value = parseFloat(e.target.value);
                                                                        handleAllocationChange(value, index);
                                                                    }}
                                                                />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>
                                        );
                                    })}
                                </SkeletonWrapper>
                            </div>
                            <SkeletonWrapper isLoading={isPoolsLoading}>
                                <Button
                                    type="submit"
                                    className="w-full"
                                    disabled={isCreateCuratorPending || isCreateCuratorConfirming}
                                >
                                    {isCreateCuratorPending
                                        ? 'Creating Curator...'
                                        : isCreateCuratorConfirming
                                            ? 'Confirming Transaction...'
                                            : 'Create Curator'
                                    }
                                </Button>
                            </SkeletonWrapper>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </>
    );
};

export default CreateCuratorComponent;