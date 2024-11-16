"use client"

import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Form } from "@/components/ui/form";
import { FieldValues, SubmitHandler, useForm, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { poolSchema } from '@/lib/validation/schemas';
import { useCreatePool } from '@/hooks/useCreatePool';
import { CryptoToken } from '@/constants/cryptoToken';
import { OracleData } from '@/constants/oracleData';
import { LoadingTransaction } from '@/components/loader/LoadingTransaction';
import SuccessDialog from '@/components/dialog/SuccessDialog';
import { Progress } from '@/components/ui/progress';
import { CreatePoolSteps } from './CreatePoolSteps';

export type FormData = z.infer<typeof poolSchema>;

const CreatePoolComponent = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [showSuccessDialog, setShowSuccessDialog] = useState(false);
    const [validationError, setValidationError] = useState<string | null>(null);

    const steps = [
        { title: 'Token Selection', field: 'collateralToken' },
        { title: 'Rate Configuration', field: 'loanToken' },
        { title: 'Risk Parameters', field: 'irm' },
        { title: 'Oracle Configuration', field: 'oracle' },
        { title: 'Loan to Value (LTV)', field: 'ltv' },
        { title: 'Liquidation Threshold (LTH)', field: 'lth' }
    ];

    const form: UseFormReturn<FieldValues> = useForm<FieldValues>({
        resolver: zodResolver(poolSchema),
        defaultValues: {
            collateralToken: "",
            loanToken: "",
            irm: "",
            oracle: "",
            ltv: "",
            lth: "",
        },
        mode: "onSubmit"
    });

    const {
        createPoolHash,
        isCreatePoolPending,
        isCreatePoolConfirming,
        isCreatePoolConfirmed,
        handleCreatePool,
    } = useCreatePool();

    const validateCurrentStep = async () => {
        const currentField = steps[activeStep].field as keyof FormData;
        const fieldValue = form.getValues(currentField);

        setValidationError(null);

        if (!fieldValue) {
            setValidationError("This field is required");
            return false;
        }

        if (currentField === 'ltv' || currentField === 'lth') {
            const numValue = Number(fieldValue);
            if (isNaN(numValue) || numValue < 0 || numValue > 100 || !Number.isInteger(numValue)) {
                setValidationError("Value must be a whole number between 0 and 100");
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

        const findCollateralBySymbol = CryptoToken.find((token) => token.symbol === data.collateralToken);
        const findLoanTokenBySymbol = CryptoToken.find((token) => token.symbol === data.loanToken);
        const findOracleBySymbol = OracleData.find((token) => token.symbol === data.oracle);

        handleCreatePool(
            findCollateralBySymbol?.contract_address[0].contract_address || "",
            findLoanTokenBySymbol?.contract_address[0].contract_address || "",
            findOracleBySymbol?.contract_address[0].contract_address || "",
            data.irm || "",
            data.ltv || "",
            data.lth || ""
        );
    };

    useEffect(() => {
        if (createPoolHash && isCreatePoolConfirmed) {
            setShowSuccessDialog(true);
            form.reset();
            setActiveStep(0);
            setValidationError(null);
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
                txHash={createPoolHash as HexAddress || ""}
                processName="Create Pool"
            />
            <Card className="w-full max-w-xl mx-auto bg-white/5 backdrop-blur-lg border-none shadow-2xl">
                <CardHeader className='flex flex-col gap-3'>
                    <div className='flex flex-col gap-1'>
                        <CardTitle>Create Pool</CardTitle>
                        <CardDescription>
                            Step {activeStep + 1} of {steps.length}: {steps[activeStep].title}
                        </CardDescription>
                    </div>
                    <Progress value={(activeStep + 1) * 100 / steps.length} />
                </CardHeader>

                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <CreatePoolSteps
                                form={form}
                                validationError={validationError}
                                activeStep={activeStep}
                                isAnimating={isAnimating}
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
                                    <Button type="submit">
                                        Create Pool
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

export default CreatePoolComponent;