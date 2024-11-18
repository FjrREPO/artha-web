"use client"

import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Form } from "@/components/ui/form";
import { FieldValues, SubmitHandler, useForm, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { curatorSchema } from '@/lib/validation/schemas';
import { useCreateCurator } from '@/hooks/useCreateCurator';
import { LoadingTransaction } from '@/components/loader/LoadingTransaction';
import { SuccessDialog } from '@/components/dialog/SuccessDialog';
import { Progress } from '@/components/ui/progress';
import { CreateCuratorSteps } from './CreateCuratorSteps';
import { useQuery } from '@tanstack/react-query';
import { API_SUBGRAPH } from '@/constants/config';
import { queryPool } from '@/graphql/query';
import { PoolSchema } from '@/lib/validation/types';
import request from 'graphql-request';

type FormData = z.infer<typeof curatorSchema>;

interface QueryData {
    pools: PoolSchema[];
}

interface PoolAllocation {
    poolId: string;
    allocation: number;
}

const CreateCuratorComponent = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [showSuccessDialog, setShowSuccessDialog] = useState(false);
    const [validationError, setValidationError] = useState<string | null>(null);
    const [selectedPools, setSelectedPools] = useState<PoolAllocation[]>([]);
    const [totalAllocation, setTotalAllocation] = useState(0);

    const steps = [
        { title: 'Basic Information', fields: ['_name', '_symbol'] },
        { title: 'Asset Configuration', fields: ['_asset'] },
        { title: 'Pool Selection & Allocation', fields: ['allocations'] },
    ];

    const { data: poolData, isLoading: isPoolsLoading } = useQuery<QueryData>({
        queryKey: ['pool'],
        queryFn: async () => {
            return await request(API_SUBGRAPH, queryPool);
        },
        refetchInterval: 600000000,
    });

    const form: UseFormReturn<FieldValues> = useForm<FieldValues>({
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
        dataCurator,
        createCuratorHash,
        isCreateCuratorPending,
        handleCreateCurator,
        isCreateCuratorConfirmed,
        isCreateCuratorConfirming
    } = useCreateCurator();

    const validateCurrentStep = async () => {
        const currentFields = steps[activeStep].fields;
        setValidationError(null);

        for (const field of currentFields) {
            const fieldValue = form.getValues(field as keyof FormData);
            if (!fieldValue || (Array.isArray(fieldValue) && fieldValue.length === 0)) {
                setValidationError(`${field} is required`);
                return false;
            }
        }

        if (activeStep === 3) {
            if (totalAllocation !== 100) {
                setValidationError("Total allocation must equal 100%");
                return false;
            }
        }

        return true;
    };

    const nextStep = async () => {
        const isValid = await validateCurrentStep();
        if (!isValid) return;

        setIsAnimating(true);
        setTimeout(() => {
            setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
            setValidationError(null);
            setIsAnimating(false);
        }, 300);
    };

    const prevStep = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setActiveStep((prev) => Math.max(prev - 1, 0));
            setValidationError(null);
            setIsAnimating(false);
        }, 300);
    };

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const isValid = await validateCurrentStep();
        if (!isValid) return;

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
            setActiveStep(0);
            setTotalAllocation(0);
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
                txHash={createCuratorHash as HexAddress || ""}
                processName="Create Curator"
                enabledLogs={true}
                logs={dataCurator?.logs?.[0]}
            />
            <Card className="w-full max-w-xl mx-auto bg-white/5 backdrop-blur-lg border-none shadow-2xl">
                <CardHeader className="flex flex-col gap-3">
                    <div className="flex flex-col gap-1">
                        <CardTitle>Create Curator</CardTitle>
                        <CardDescription>
                            Step {activeStep + 1} of {steps.length}: {steps[activeStep].title}
                        </CardDescription>
                    </div>
                    <Progress value={(activeStep + 1) * 100 / steps.length} />
                </CardHeader>

                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <CreateCuratorSteps
                                form={form}
                                validationError={validationError}
                                activeStep={activeStep}
                                isAnimating={isAnimating}
                                selectedPools={selectedPools}
                                setSelectedPools={setSelectedPools}
                                totalAllocation={totalAllocation}
                                setTotalAllocation={setTotalAllocation}
                                poolData={poolData}
                                isPoolsLoading={isPoolsLoading}
                            />

                            <div className="flex justify-between mt-8">
                                <Button
                                    type="button"
                                    onClick={prevStep}
                                    disabled={activeStep === 0}
                                    variant="outline"
                                >
                                    <ChevronLeft className="h-4 w-4" /> Back
                                </Button>
                                {activeStep === steps.length - 1 ? (
                                    <Button 
                                        type="submit"
                                        disabled={isCreateCuratorPending || isCreateCuratorConfirming || form.getValues('pools').length === 0}
                                    >
                                        Create Curator
                                    </Button>
                                ) : (
                                    <Button
                                        type="button"
                                        onClick={nextStep}
                                    >
                                        Next <ChevronRight className="h-4 w-4" />
                                    </Button>
                                )}
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </>
    );
};

export default CreateCuratorComponent;