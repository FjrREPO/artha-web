import React from 'react'
import TablePool from './_components/TablePool'
import { Label } from '@/components/ui/label'

export default function page() {
    return (
        <div className='pt-[100px] flex flex-col gap-10'>
            <div className='flex flex-col gap-1 max-w-lg'>
                <Label className='text-2xl'>Artha Pool</Label>
                <Label className='text-md text-gray-400'>Lend and borrow here. Choose based on your risk tolerance. Remember to DYOR (Do Your Own Research).</Label>
            </div>
            <TablePool />
        </div>
    )
}
