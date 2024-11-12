import React from 'react';
import PoolIdPage from './_components/PoolIdPage';

type Props = {
    params: {
        poolId: string
    }
}

const Page = ({ params }: Props) => {
    const { poolId } = params;

    return (
        <div className='pt-[100px]'>
            <PoolIdPage PoolId={poolId} />
        </div>
    );
};

export default Page;