import React from 'react';
import PoolAddressPage from './_components/PoolAddressPage';
import { use } from 'react';

type Params = Promise<{ poolAddress: string }>

const Page = (props: { params: Params }) => {
    const params = use(props.params);
    const poolAddress = params.poolAddress;

    return (
        <div className='pt-[100px]'>
            <PoolAddressPage poolAddress={poolAddress} />
        </div>
    );
};

export default Page;