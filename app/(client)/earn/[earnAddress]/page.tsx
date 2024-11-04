import React from 'react'
import EarnAddressPage from './_components/EarnAddressPage'

interface IParams {
    params: {
        earnAddress: string;
    };
}

const Page: React.FC<IParams> = ({ params }) => {
    const { earnAddress } = params;

    return (
        <div className='pt-[100px]'>
            <EarnAddressPage earnAddress={earnAddress} />
        </div>
    );
};

export default Page;
