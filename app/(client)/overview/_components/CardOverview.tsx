import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import React from 'react'

export default function CardOverview() {
    return (
        <Card className='flex pb-5'>
            <CardContent className='flex flex-row w-full flex-wrap gap-10 justify-between p-6'>
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-1'>
                        <Label className='text-xl max-w-xl'>Artha is a permissionless lending protocol for intellectual property (IP) built natively on the Story Protocol.</Label>
                        <CardDescription>Start earning now.</CardDescription>
                    </div>
                    <Button className='w-fit'>View docs</Button>
                </div>
                <div className='flex flex-row gap-5 justify-start sm:justify-center items-center flex-wrap'>
                    <div className='flex flex-col gap-1'>
                        <Label className='text-textSecondary'>Curator Highest APY</Label>
                        <Label className='text-2xl'>24.53%</Label>
                    </div>
                    <Separator orientation='vertical' className='h-[60%] hidden sm:flex' />
                    <div className='flex flex-col gap-1'>
                        <Label className='text-textSecondary'>Total Value Locked</Label>
                        <Label className='text-2xl'>$10.79M</Label>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}