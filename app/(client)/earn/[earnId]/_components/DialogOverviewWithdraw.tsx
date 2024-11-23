import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AlchemyNftSchema, EarnSchema } from '@/lib/validation/types'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { OverviewNFT } from './OverviewNFT'
import WithdrawCollateral from './WithdrawCollateralCurator'

interface Props {
    filteredData?: EarnSchema
    nftData?: AlchemyNftSchema
    trigger: React.ReactNode
}

export const DialogOverviewWithdraw = ({ filteredData, nftData, trigger }: Props) => {
    return (
        <Dialog>
            <DialogTrigger>
                {trigger}
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className='text-lg'>Details</DialogTitle>
                </DialogHeader>
                <Tabs defaultValue='overview' className='w-full'>
                    <TabsList className='w-full'>
                        <TabsTrigger value="overview" className='w-full'>Overview</TabsTrigger>
                        <TabsTrigger value="withdraw" className='w-full'>Withdraw Collateral</TabsTrigger>
                    </TabsList>
                    <TabsContent value="overview">
                        <OverviewNFT nftData={nftData} />
                    </TabsContent>
                    <TabsContent value="withdraw">
                        <WithdrawCollateral filteredData={filteredData} nftData={nftData} />
                    </TabsContent>
                </Tabs>
            </DialogContent>
        </Dialog>
    )
}