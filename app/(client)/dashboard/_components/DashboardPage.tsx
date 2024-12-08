"use client";

import React, { useEffect, useState } from 'react'
import CardPortfolio from './CardPortfolio'
import CardRewards from './CardRewards'
import { BorrowSection } from './BorrowSection'
import { EarnSection } from './EarnSection';
import useBorrows from '@/hooks/graphql/useBorrow';
import usePools from '@/hooks/graphql/usePools';
import { useOwnerNft } from '@/hooks/useOwnerNft';
import { useAccount } from 'wagmi';
import useEarn from '@/hooks/graphql/useEarn';
import { LendSection } from './LendSection';
import useAccountLend from '@/hooks/graphql/useAccountLend';
import { WarningConnectWallet } from '@/components/web3/warning-connect-wallet';

export default function DashboardPage() {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    const { address } = useAccount()
    const { borrowData, borrowLoading, borrowRefetching } = useBorrows()
    const { poolData, poolLoading } = usePools();
    const { nftData, nftLoading } = useOwnerNft();
    const { earnData, earnLoading, earnRefetching } = useEarn()
    const { accountLendData, accountLendLoading, accountLendRefetching } = useAccountLend()
    // const { accountCuratorData, accountCuratorLoading, accountCuratorRefetching } = useAccountCurator()

    if (!hasMounted) {
        return null;
    }

    return (
        <div className='w-full h-full container'>
            {address ? (
                <div className='w-ful h-full flex flex-col gap-5'>
                    <div className='flex flex-col lg:flex-row w-full justify-between items-center gap-5'>
                        <CardPortfolio />
                        <CardRewards />
                    </div>
                    <div className='flex flex-col gap-5'>
                        <EarnSection
                            earnData={earnData}
                            earnLoading={earnLoading}
                            earnRefetching={earnRefetching}
                        // accountCuratorData={accountCuratorData}
                        // accountCuratorLoading={accountCuratorLoading}
                        // accountCuratorRefetching={accountCuratorRefetching}
                        />
                        <BorrowSection
                            borrowData={borrowData}
                            borrowLoading={borrowLoading}
                            borrowRefetching={borrowRefetching}
                            nftData={nftData}
                            nftLoading={nftLoading}
                            poolData={poolData}
                            poolLoading={poolLoading}
                            address={address as HexAddress}
                        />
                        <LendSection
                            poolData={poolData}
                            poolLoading={poolLoading}
                            accountLendData={accountLendData || []}
                            accountLendLoading={accountLendLoading}
                            accountLendRefetching={accountLendRefetching}
                        />
                    </div>
                </div>
            ) : (
                <WarningConnectWallet />
            )}
        </div>
    )
}