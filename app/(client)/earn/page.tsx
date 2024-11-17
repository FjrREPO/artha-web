import React from 'react'
import TableEarn from './_components/TableEarn'
import { Label } from '@/components/ui/label'
export default function page() {
    return (
        <div className='pt-[100px] flex flex-col gap-10'>
            <div className='flex flex-col gap-1 max-w-lg'>
                <Label className='text-2xl'>Artha Earn</Label>
                <Label className='text-md text-gray-400'>Earn yield by depositing your assets with a curator. The curator will manage them to achieve the highest possible returns across a variety of risk levels.</Label>
            </div>
            <TableEarn />
        </div>
    )
}
