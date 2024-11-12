import React from 'react';
import PoolAddressPage from './_components/PoolAddressPage';
import { use } from 'react';

type Params = Promise<{ poolId: string }>

const Page = (props: { params: Params }) => {
    const params = use(props.params);
    const poolId = params.poolId;

    return (
        <div className='pt-[100px]'>
            <PoolAddressPage poolId={poolId} />
        </div>
    );
};

export default Page;