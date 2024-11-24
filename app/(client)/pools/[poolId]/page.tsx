import React, { use } from 'react';
import PoolIdPage from './_components/PoolIdPage';

type Params = Promise<{ poolId: string }>

const Page = (props: { params: Params }) => {
    const params = use(props.params);
    const poolId = params.poolId;

    return (
        <div className="w-full flex-1 px-5 sm:px-10 lg:px-20">
            <div className="w-full h-full flex xl:max-w-screen-xl lg:max-w-screen-lg mx-auto">
                <PoolIdPage PoolId={poolId} />
            </div>
        </div>
    );
};

export default Page;