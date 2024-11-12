import React from 'react';
import PoolAddressPage from './_components/PoolAddressPage';
import { use } from 'react';

type Params = Promise<{ PoolAddress: string }>

const Page = (props: { params: Params }) => {
    const params = use(props.params);
    const PoolAddress = params.PoolAddress;

    return (
        <div className='pt-[100px]'>
            <PoolAddressPage PoolAddress={PoolAddress} />
        </div>
    );
};

export default Page;