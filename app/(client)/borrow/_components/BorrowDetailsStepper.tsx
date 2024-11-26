import React, { useMemo } from 'react';
import { Check, Coins, ShieldAlert, TrendingUp, Info } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { CoinMarketCapSchema, PoolSchema, SupplyCollateralAndBorrow } from '@/lib/validation/types';
import { MdOutlineGeneratingTokens } from "react-icons/md";
import { UseFormReturn } from 'react-hook-form';
import { formatNumberWithDots } from '@/lib/utils';

interface BorrowDetailsStepperProps {
    form: UseFormReturn<SupplyCollateralAndBorrow>;
    selectedPool?: PoolSchema;
    selectedBorrowToken?: CoinMarketCapSchema | null;
    priceOracle?: number;
    decimal?: number;
}

const BorrowDetailsStepper: React.FC<BorrowDetailsStepperProps> = ({
    form,
    selectedPool,
    selectedBorrowToken,
    priceOracle,
    decimal
}) => {
    const collateralToken = form.watch('collateralToken');
    const tokenId = form.watch('tokenId');
    const supplyPool = form.watch('supplyPool');
    const borrowAmount = form.watch('borrowAmount');

    const steps = [
        {
            label: 'Collateral Token',
            completed: !!collateralToken,
            icon: <Coins className="mr-2 w-5 h-5" />
        },
        {
            label: 'Token ID',
            completed: !!tokenId,
            icon: <MdOutlineGeneratingTokens className="mr-2 w-5 h-5" />
        },
        {
            label: 'Borrow Token',
            completed: !!selectedBorrowToken,
            icon: <TrendingUp className="mr-2 w-5 h-5" />
        },
        {
            label: 'Supply Pool',
            completed: !!supplyPool,
            icon: <ShieldAlert className="mr-2 w-5 h-5" />
        }
    ];

    const allStepsCompleted = steps.every(step => step.completed);

    const maxBorrow = useMemo(() =>
        parseInt(selectedPool?.ltv as string) * (priceOracle as number) / decimal!,
        [selectedPool, priceOracle, decimal]
    );

    const liquidationValue = useMemo(() =>
        parseInt(selectedPool?.lth as string) * parseInt(borrowAmount || '0') / 100,
        [selectedPool, borrowAmount]
    );

    const riskLevelCalculation = useMemo(() => {
        if (!borrowAmount || !maxBorrow) return 0;
        const borrowPercentage = (parseFloat(borrowAmount) / maxBorrow) * 100;
        return Math.min(borrowPercentage, 100);
    }, [borrowAmount, maxBorrow]);

    return (
        <Card className='sticky top-4 border-2 border-primary/10 shadow-lg'>
            <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                    <Coins className='text-primary' /> Details
                </CardTitle>
            </CardHeader>
            <CardContent className='p-6 space-y-6'>
                <div className='space-y-4'>
                    <div className='space-y-2'>
                        {steps.map((step) => (
                            <div
                                key={step.label}
                                className={`flex items-center space-x-3 ${step.completed ? 'text-blue-500' : 'text-muted-foreground'
                                    }`}
                            >
                                {step.icon}
                                <span className='flex-grow'>Select {step.label}</span>
                                {step.completed && <Check size={16} />}
                            </div>
                        ))}
                    </div>

                    <Progress
                        value={(steps.filter(step => step.completed).length / steps.length) * 100}
                        className='mt-2'
                    />
                </div>

                {allStepsCompleted && (
                    <>
                        <div>
                            <Label className='text-lg flex items-center gap-2'>
                                Borrow Rate <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <Info size={16} className='text-muted-foreground' />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            Annual Percentage Rate (APR) for borrowing
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </Label>
                            <div className='text-4xl font-bold mt-2 flex items-center gap-2'>
                                {(selectedPool?.borrowRate || 0) / 1e16}% <TrendingUp className='text-blue-500' />
                            </div>
                            <Label className='font-normal text-muted-foreground mt-2'>
                                Borrowing {selectedBorrowToken?.name} rate
                            </Label>
                        </div>
                        <div className='space-y-4'>
                            <div>
                                <Label className='flex items-center gap-2'>
                                    <ShieldAlert size={16} /> Liquidation Risk
                                </Label>
                                <Progress
                                    value={riskLevelCalculation}
                                    className='mt-2'
                                    indicatorColor={
                                        riskLevelCalculation < 33 ? 'bg-green-500' :
                                            riskLevelCalculation < 66 ? 'bg-yellow-500' :
                                                'bg-red-500'
                                    }
                                />
                                <Label className='text-sm text-muted-foreground mt-1'>
                                    {riskLevelCalculation < 33 ? 'Low' :
                                        riskLevelCalculation < 66 ? 'Medium' :
                                            'High'} Risk
                                </Label>
                            </div>
                            <div className='grid grid-cols-2 gap-4'>
                                <div>
                                    <Label>LTV</Label>
                                    <div className='font-bold'>{selectedPool?.ltv || 'N/A'}%</div>
                                </div>
                                <div>
                                    <Label>LTH</Label>
                                    <div className='font-bold'>{selectedPool?.lth || 'N/A'}%</div>
                                </div>
                                <div>
                                    <Label>Max Borrow</Label>
                                    <div className='font-bold'>{formatNumberWithDots(maxBorrow) || 'N/A'}</div>
                                </div>
                                <div>
                                    <Label>Liquidation Value</Label>
                                    <div className='font-bold'>{formatNumberWithDots(liquidationValue) || 'N/A'}</div>
                                </div>
                                <div>
                                    <Label>Collateral Value</Label>
                                    <div className='font-bold'>
                                        {formatNumberWithDots(((priceOracle as number) / 1e6) || 0) || 'N/A'}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </CardContent>
        </Card>
    );
};

export default BorrowDetailsStepper;