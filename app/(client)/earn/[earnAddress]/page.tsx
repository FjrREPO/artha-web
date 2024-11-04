import React from 'react'
import EarnAddressPage from './_components/EarnAddressPage'

interface IParams {
    params: {
        earnAddress: string
    }
}

export default function page({ params }: IParams) {
    const { earnAddress } = params

    return (
        <div className='pt-[100px]'>
            <EarnAddressPage earnAddress={earnAddress} />
        </div>
    )
}
