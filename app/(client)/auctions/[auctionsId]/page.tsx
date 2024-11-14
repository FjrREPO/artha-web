import React, { use } from 'react'
import AuctionsIdComponent from './_components/AuctionsIdComponent'

type Params = Promise<{ auctionsId: string }>

const Page = (props: { params: Params }) => {
    const params = use(props.params);
    const auctionsId = params.auctionsId;

    return (
        <div className='pt-[100px]'>
            <AuctionsIdComponent auctionsId={auctionsId} />
        </div>
    )
}

export default Page