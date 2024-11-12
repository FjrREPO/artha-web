import React, { use } from 'react';
import PoolIdPage from './_components/PoolIdPage';

type Params = Promise<{ poolId: string }>

const Page = (props: { params: Params }) => {
    const params = use(props.params);
    const poolId = params.poolId;
    
    return (
        <div className='pt-[100px]'>
            <PoolIdPage PoolId={poolId} />
        </div>
    );
};

export default Page;