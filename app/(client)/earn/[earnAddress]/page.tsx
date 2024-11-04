import React from 'react';
import EarnAddressPage from './_components/EarnAddressPage';

interface IParams {
    earnAddress: string;
}

interface PageProps {
    params: IParams;
}

const Page: React.FC<PageProps> = ({ params }) => {
    const { earnAddress } = params;

    return (
        <div className='pt-[100px]'>
            <EarnAddressPage earnAddress={earnAddress} />
        </div>
    );
};

export default Page;