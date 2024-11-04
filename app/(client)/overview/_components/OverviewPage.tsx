import React from 'react'
import CardOverview from './CardOverview'
import TableEarn from './TableEarn'
import TablePool from './TablePool'

export default function OverviewPage() {
    return (
        <div className='w-full h-auto space-y-[50px]'>
            <CardOverview />
            <div className='w-full flex flex-col xl:flex-row gap-5'>
                <TableEarn />
                <TablePool />
            </div>
        </div>
    )
}