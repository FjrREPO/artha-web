import React from 'react';
import EarnAddressPage from './_components/EarnAddressPage';
import { use } from 'react';

type Params = Promise<{ earnAddress: string }>

const Page = (props: { params: Params }) => {
    const params = use(props.params);
    const earnAddress = params.earnAddress;

    return (
        <div className='pt-[100px]'>
            <EarnAddressPage earnAddress={earnAddress} />
        </div>
    );
};

export default Page;