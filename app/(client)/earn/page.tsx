import React from 'react'
import TableEarn from './_components/TableEarn'
import { Label } from '@/components/ui/label'

export default function page() {
    return (
        <div className='pt-[100px] flex flex-col gap-10'>
            <div className='flex flex-col gap-1 max-w-lg'>
                <Label className='text-2xl'>Earn</Label>
                <Label className='text-md text-gray-400'>Optimize your yield by depositing assets into an aggregator. If you’ve never deposited before, please read through this quick introduction.</Label>
            </div>
            <TableEarn />
        </div>
    )
}
