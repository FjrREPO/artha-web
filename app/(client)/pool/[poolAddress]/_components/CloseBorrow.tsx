import { CoinImage } from '@/components/coin/CoinImage'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Wallet } from 'lucide-react'
import React, { useState, useEffect } from 'react'

interface OpenWithdrawProps {
    filteredData: PoolData;
}

export default function CloseWithdraw({ filteredData }: OpenWithdrawProps) {
    const [repayAmount, setRepayAmount] = useState<string>('')
    const [withdrawAmount, setWithdrawAmount] = useState<string>('')
    const [healthFactor, setHealthFactor] = useState<number | null>(null)
    const [liquidationPrice, setLiquidationPrice] = useState<number>(0)
    const [gasFee, setGasFee] = useState<string>('-')

    const handleRepayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        if (value === '' || parseFloat(value) >= 0) {
            setRepayAmount(value)
            updateMetrics(value, withdrawAmount)
        }
    }

    const handleWithdrawChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        if (value === '' || parseFloat(value) >= 0) {
            setWithdrawAmount(value)
            updateMetrics(repayAmount, value)
        }
    }

    const handleRepay = () => {
        const maxRepay = '0'
        setRepayAmount(maxRepay)
        updateMetrics(maxRepay, withdrawAmount)
    }

    const handleWithdraw = () => {
        const maxWithdraw = '0'
        setWithdrawAmount(maxWithdraw)
        updateMetrics(repayAmount, maxWithdraw)
    }

    const updateMetrics = (repay: string, withdraw: string) => {
        const repayValue = parseFloat(repay) || 0
        const withdrawValue = parseFloat(withdraw) || 0

        if (repayValue > 0 && withdrawValue > 0) {
            const health = (repayValue / withdrawValue) * 100
            setHealthFactor(health)

            const liqPrice = withdrawValue > 0 ? (repayValue * 0.8) / withdrawValue : 0
            setLiquidationPrice(liqPrice)
        } else {
            setHealthFactor(null)
            setLiquidationPrice(0)
        }
    }

    useEffect(() => {
        const estimateGasFee = async () => {
            if (parseFloat(repayAmount) > 0 || parseFloat(withdrawAmount) > 0) {
                setGasFee('~0.005 ETH')
            } else {
                setGasFee('-')
            }
        }

        estimateGasFee()
    }, [repayAmount, withdrawAmount])

    return (
        <div className='flex flex-col gap-5'>
            <Card className='w-full p-5'>
                <CardContent className='flex flex-col gap-5 p-0'>
                    <div className='flex flex-row justify-between items-center'>
                        <Label>Repay Debt</Label>
                        <div className='flex flex-row gap-2 items-center'>
                            <Wallet />
                            <Label>0</Label>
                            <Button
                                variant={'outline'}
                                className="cursor-pointer px-3"
                                onClick={handleRepay}
                            >
                                <Label className='text-[11px] cursor-pointer'>Max</Label>
                            </Button>
                        </div>
                    </div>
                    <div className='relative flex flex-row justify-between items-center'>
                        <Input
                            className='w-full pr-10'
                            value={repayAmount}
                            onChange={handleRepayChange}
                            type="number"
                            min={0}
                        />
                        <div className='absolute right-3 top-1/2 transform -translate-y-1/2 w-fit'>
                            <CoinImage symbol={filteredData?.token?.symbol || ""} />
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Label className='text-center'>And / Or</Label>
            <Card className='w-full p-5'>
                <CardContent className='flex flex-col gap-5 p-0'>
                    <div className='flex flex-row justify-between items-center'>
                        <Label>Withdraw</Label>
                        <div className='flex flex-row gap-2 items-center'>
                            <Wallet />
                            <Label>0</Label>
                            <Button
                                variant={'outline'}
                                className="cursor-pointer px-3"
                                onClick={handleWithdraw}
                            >
                                <Label className='text-[11px] cursor-pointer'>Max</Label>
                            </Button>
                        </div>
                    </div>
                    <div className='relative flex flex-row justify-between items-center'>
                        <Input
                            className='w-full pr-10'
                            value={withdrawAmount}
                            onChange={handleWithdrawChange}
                            type="number"
                            min={0}
                        />
                        <div className='absolute right-3 top-1/2 transform -translate-y-1/2 w-fit'>
                            <CoinImage symbol={filteredData?.token?.symbol || ""} />
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Button className='w-full'>Withdraw Collateral Amount</Button>
            <Card className='w-full'>
                <CardContent className='p-5 space-y-5'>
                    <Label className='font-bold'>Transaction Overview</Label>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-row justify-between'>
                            <Label className='text-textSecondary'>Health Factor</Label>
                            <Label>{healthFactor ? healthFactor.toFixed(2) : '-'}</Label>
                        </div>
                        <div className='flex flex-row justify-between'>
                            <Label className='text-textSecondary'>Liquidation Price</Label>
                            <Label>${liquidationPrice.toFixed(2)}</Label>
                        </div>
                        <div className='flex flex-row justify-between'>
                            <Label className='text-textSecondary'>Gas Fee</Label>
                            <Label>{gasFee}</Label>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}