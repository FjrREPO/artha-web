import React from 'react'
import TablePool from './_components/TablePool'
import { Label } from '@/components/ui/label'

export default function page() {
    return (
        <div className='pt-[100px] flex flex-col gap-10'>
            <div className='flex flex-col gap-1 max-w-lg'>
                <Label className='text-2xl'>Pool Markets</Label>
                <Label className='text-md text-gray-400'>Lend or borrow. If you’ve never deposited before, please read through this quick introduction.</Label>
            </div>
            <TablePool />
        </div>
    )
}
