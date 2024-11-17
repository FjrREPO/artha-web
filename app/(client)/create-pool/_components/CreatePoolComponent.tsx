"use client"

import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { poolSchema } from '@/lib/validation/schemas';
import { useCreatePool } from '@/hooks/useCreatePool';
import { LoadingTransaction } from '@/components/loader/LoadingTransaction';
import SuccessDialog from '@/components/dialog/SuccessDialog';
import { Progress } from '@/components/ui/progress';
import { CreatePoolSteps } from './CreatePoolSteps';
import { z } from 'zod';
import { useOracle } from '@/hooks/useOracle';
import { useCryptoToken } from '@/hooks/useCryptoToken';

type FormData = z.infer<typeof poolSchema>;

const CreatePoolComponent = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [validationError, setValidationError] = useState<string | null>(null);
    const [showSuccessDialog, setShowSuccessDialog] = useState(false);

    const steps = [
        { title: 'Token Selection', fields: ['collateralToken', 'loanToken'] },
        { title: 'Risk Parameters & Oracle', fields: ['irm', 'oracle'] },
        { title: 'Loan to Value (LTV) & Liquidation Threshold (LTH)', fields: ['ltv', 'lth'] }
    ];

    const { oracleData, oracleLoading } = useOracle()
    const { cryptoTokenData, cryptoTokenLoading } = useCryptoToken()

    const form = useForm<FormData>({
        resolver: zodResolver(poolSchema),
        defaultValues: {
            collateralToken: "",
            loanToken: "",
            irm: "",
            oracle: "",
            ltv: "",
            lth: "",
        }
    });

    const {
        createPoolHash,
        isCreatePoolPending,
        isCreatePoolConfirming,
        isCreatePoolConfirmed,
        handleCreatePool,
    } = useCreatePool();

    const validateCurrentStep = async () => {
        const currentFields = steps[activeStep].fields as Array<keyof FormData>;
        setValidationError(null);

        const result = await form.trigger(currentFields);
        if (!result) {
            const errors = form.formState.errors;
            const firstError = currentFields.find(field => errors[field]);
            if (firstError) {
                setValidationError(errors[firstError]?.message as string || `${firstError} is required`);
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

    const onSubmit = async (data: FormData) => {
        try {
            const isValid = await validateCurrentStep();
            if (!isValid) return;

            setValidationError(null);

            const findCollateralToken = await cryptoTokenData?.find(
                (token) => token.platform?.token_address === data.collateralToken
            );
            const findLoanToken = await cryptoTokenData?.find(
                (token) => token.platform?.token_address === data.loanToken
            );
            const findOracle = await oracleData?.find(
                (token) => token.platform?.token_address === data.oracle
            );

            if (!findCollateralToken || !findLoanToken || !findOracle) {
                console.error('Missing token data');
                return;
            }

            handleCreatePool(
                findCollateralToken.platform?.token_address,
                findLoanToken.platform?.token_address,
                findOracle.platform?.token_address,
                data.irm || "",
                data.ltv || "",
                data.lth || ""
            );
        } catch (error) {
            setValidationError("An error occurred while submitting the form.");
            console.error(error);
        }
    };

    useEffect(() => {
        if (createPoolHash && isCreatePoolConfirmed) {
            setShowSuccessDialog(true);
            form.reset();
            setActiveStep(0);
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
                                oracleData={oracleData}
                                isOracleLoading={oracleLoading}
                                cryptoTokenData={cryptoTokenData}
                                cryptoTokenLoading={cryptoTokenLoading}
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
                                        disabled={isCreatePoolPending || isCreatePoolConfirming}
                                        onClick={() => onSubmit(form.getValues())}
                                    >
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