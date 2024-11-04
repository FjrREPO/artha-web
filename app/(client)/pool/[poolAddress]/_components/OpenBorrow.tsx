import { CoinImage } from '@/components/coin/CoinImage'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Wallet } from 'lucide-react'
import React, { useState, useEffect } from 'react'

interface OpenBorrowProps {
    filteredData: PoolData;
}

export default function OpenBorrow({ filteredData }: OpenBorrowProps) {
    const [depositAmount, setDepositAmount] = useState<string>('')
    const [borrowAmount, setBorrowAmount] = useState<string>('')
    const [healthFactor, setHealthFactor] = useState<number | null>(null)
    const [liquidationPrice, setLiquidationPrice] = useState<number>(0)
    const [gasFee, setGasFee] = useState<string>('-')

    const handleDepositChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        if (value === '' || parseFloat(value) >= 0) {
            setDepositAmount(value)
            updateMetrics(value, borrowAmount)
        }
    }

    const handleBorrowChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        if (value === '' || parseFloat(value) >= 0) {
            setBorrowAmount(value)
            updateMetrics(depositAmount, value)
        }
    }

    const handleDeposit = () => {
        const maxDeposit = '0'
        setDepositAmount(maxDeposit)
        updateMetrics(maxDeposit, borrowAmount)
    }

    const handleBorrow = () => {
        const maxBorrow = '0'
        setBorrowAmount(maxBorrow)
        updateMetrics(depositAmount, maxBorrow)
    }

    const updateMetrics = (deposit: string, borrow: string) => {
        const depositValue = parseFloat(deposit) || 0
        const borrowValue = parseFloat(borrow) || 0

        if (depositValue > 0 && borrowValue > 0) {
            const health = (depositValue / borrowValue) * 100
            setHealthFactor(health)

            const liqPrice = borrowValue > 0 ? (depositValue * 0.8) / borrowValue : 0
            setLiquidationPrice(liqPrice)
        } else {
            setHealthFactor(null)
            setLiquidationPrice(0)
        }
    }

    useEffect(() => {
        const estimateGasFee = async () => {
            if (parseFloat(depositAmount) > 0 || parseFloat(borrowAmount) > 0) {
                setGasFee('~0.005 ETH')
            } else {
                setGasFee('-')
            }
        }

        estimateGasFee()
    }, [depositAmount, borrowAmount])

    return (
        <div className='flex flex-col gap-5'>
            <Card className='w-full p-5'>
                <CardContent className='flex flex-col gap-5 p-0'>
                    <div className='flex flex-row justify-between items-center'>
                        <Label>Deposit Collateral</Label>
                        <div className='flex flex-row gap-2 items-center'>
                            <Wallet />
                            <Label>0</Label>
                            <Button
                                variant={'outline'}
                                className="cursor-pointer px-3"
                                onClick={handleDeposit}
                            >
                                <Label className='text-[11px] cursor-pointer'>Max</Label>
                            </Button>
                        </div>
                    </div>
                    <div className='relative flex flex-row justify-between items-center'>
                        <Input
                            className='w-full pr-10'
                            value={depositAmount}
                            onChange={handleDepositChange}
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
                        <Label>Borrow</Label>
                        <div className='flex flex-row gap-2 items-center'>
                            <Wallet />
                            <Label>0</Label>
                            <Button
                                variant={'outline'}
                                className="cursor-pointer px-3"
                                onClick={handleBorrow}
                            >
                                <Label className='text-[11px] cursor-pointer'>Max</Label>
                            </Button>
                        </div>
                    </div>
                    <div className='relative flex flex-row justify-between items-center'>
                        <Input
                            className='w-full pr-10'
                            value={borrowAmount}
                            onChange={handleBorrowChange}
                            type="number"
                            min={0}
                        />
                        <div className='absolute right-3 top-1/2 transform -translate-y-1/2 w-fit'>
                            <CoinImage symbol={filteredData?.token?.symbol || ""} />
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Button className='w-full'>Add Collateral</Button>
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