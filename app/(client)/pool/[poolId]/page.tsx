import React from 'react';
import PoolIdPage from './_components/PoolIdPage';

type Props = {
    params: {
        poolId: string
    }
}

const Page = ({ params }: Props) => {
    return (
        <div className='pt-[100px]'>
            <PoolIdPage PoolId={params.poolId} />
        </div>
    );
};

export default Page;