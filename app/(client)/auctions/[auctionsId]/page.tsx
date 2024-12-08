import React, { use } from 'react'
import AuctionsIdComponent from './_components/AuctionsIdComponent'

type Params = Promise<{ auctionsId: string }>

const Page = (props: { params: Params }) => {
    const params = use(props.params);
    const auctionsId = params.auctionsId;

    return (
        <div className="w-full flex-1 px-5 sm:px-10 lg:px-20">
            <div className="w-full h-full flex xl:max-w-screen-xl lg:max-w-screen-lg mx-auto justify-center">
                <AuctionsIdComponent auctionsId={auctionsId} />
            </div>
        </div>
    )
}

export default Page