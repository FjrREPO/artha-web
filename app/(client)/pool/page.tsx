import React from 'react'
import TablePool from './_components/TablePool'
import { Label } from '@/components/ui/label'

export default function page() {
    return (
        <div className="w-full flex-1 px-5 sm:px-10 lg:px-20">
            <div className="w-full h-full flex flex-col gap-5 xl:max-w-screen-xl lg:max-w-screen-lg mx-auto">
                <div className='flex flex-col gap-1 max-w-lg'>
                    <Label className='text-2xl'>Artha Pool</Label>
                    <Label className='text-md text-gray-400'>Lend and borrow here. Choose based on your risk tolerance. Remember to DYOR (Do Your Own Research).</Label>
                </div>
                <TablePool />
            </div>
        </div>
    )
}
