import React from 'react';
import EarnIdPage from './_components/EarnIdPage';
import { use } from 'react';

type Params = Promise<{ earnId: string }>

const Page = (props: { params: Params }) => {
    const params = use(props.params);
    const earnId = params.earnId;

    return (
        <div className="w-full flex-1 px-5 sm:px-10 lg:px-20 items-center justify-center flex">
            <div className="w-full h-full flex xl:max-w-screen-xl lg:max-w-screen-lg mx-auto">
                <EarnIdPage earnId={earnId} />
            </div>
        </div>
    );
};

export default Page;