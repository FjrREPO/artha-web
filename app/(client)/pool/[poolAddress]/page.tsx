import React from 'react'
import EarnAddressPage from './_components/PoolAddressPage'

interface IParams {
    params: {
        poolAddress: string
    }
}

export default function page({ params }: IParams) {
    const { poolAddress } = params

    return (
        <div className='pt-[100px]'>
            <EarnAddressPage poolAddress={poolAddress} />
        </div>
    )
}
