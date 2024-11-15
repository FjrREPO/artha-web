import { CoinImage } from '@/components/coin/CoinImage'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { PoolSchema } from '@/lib/validation/types'
import { Wallet } from 'lucide-react'

interface WithdrawProps {
    filteredData: PoolSchema;
    handleWithdrawChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleMaxWithdraw: () => void;
    withdrawAmount: number;
}

export default function Withdraw({ filteredData, handleWithdrawChange, handleMaxWithdraw, withdrawAmount }: WithdrawProps) {
    return (
        <div className='flex flex-col gap-5'>
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
                                onClick={handleMaxWithdraw}
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
                            <CoinImage address={filteredData?.collateralToken || ""} />
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Button className='w-full'>Withdraw</Button>
            <Card className='w-full'>
                <CardContent className='p-5 space-y-5'>
                    <Label className='font-bold'>Transaction Overview</Label>
                    <div className='flex flex-row justify-between'>
                        <Label className='text-textSecondary'>Gas Fee</Label>
                        <Label>-</Label>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
