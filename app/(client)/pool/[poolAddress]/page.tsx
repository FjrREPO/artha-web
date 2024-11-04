import React from 'react'
import PoolAddressPage from './_components/PoolAddressPage'

interface IParams {
    params: {
        poolAddress: string;
    };
}

const Page: React.FC<IParams> = ({ params }) => {
    const { poolAddress } = params;

    return (
        <div className='pt-[100px]'>
            <PoolAddressPage poolAddress={poolAddress} />
        </div>
    );
};

export default Page;
