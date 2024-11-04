import { Label } from '@/components/ui/label'
import React from 'react'

export default function PoolDetails() {
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex flex-row justify-between'>
                <Label className='text-textSecondary'>Max Laverage</Label>
                <Label>0x</Label>
            </div>
            <div className='flex flex-row justify-between'>
                <Label className='text-textSecondary'>Collateral APY</Label>
                <Label>100%</Label>
            </div>
            <div className='flex flex-row justify-between'>
                <Label className='text-textSecondary'>Max APY</Label>
                <Label>100%</Label>
            </div>
            <div className='flex flex-row justify-between'>
                <Label className='text-textSecondary'>Max LTV</Label>
                <Label>100%</Label>
            </div>
            <div className='flex flex-row justify-between'>
                <Label className='text-textSecondary'>Liquidation Fee</Label>
                <Label>3%</Label>
            </div>
        </div>
    )
}
