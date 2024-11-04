import React from 'react';
import PoolAddressPage from './_components/PoolAddressPage';

interface IParams {
    poolAddress: string;
}

interface PageProps {
    params: IParams;
}

export const Page: React.FC<PageProps> = ({ params }) => {
    const { poolAddress } = params;

    return (
        <div className='pt-[100px]'>
            <PoolAddressPage poolAddress={poolAddress} />
        </div>
    );
};