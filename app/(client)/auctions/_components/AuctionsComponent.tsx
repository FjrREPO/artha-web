"use client"

import React, { useState, useMemo } from 'react';
import { Alert, AlertDescription } from "@/components/ui/alert";
import { getAllAuction } from '@/actions/get-all-auction';
import { NFTCardSkeleton } from './NFTCardSkeleton';
import { AuctionSidebar } from './AuctionSidebar';
import { NFTCard } from './NFTCard';

export const COLLECTIONS = ['All Collections', 'IP1', 'IP2', 'IP3'];
export const SORT_OPTIONS = [
    { label: 'Potential Profit (Highest)', value: 'profit_desc' },
    { label: 'Potential Profit (Lowest)', value: 'profit_asc' },
    { label: 'Floor Price (Highest)', value: 'floor_desc' },
    { label: 'Floor Price (Lowest)', value: 'floor_asc' },
];

const AuctionsComponent: React.FC = () => {
    const [searchText, setSearchText] = useState('');
    const [collection, setCollection] = useState('All Collections');
    const [sortBy, setSortBy] = useState('profit_desc');

    const { auctionData, auctionLoading } = getAllAuction();

    const filteredAndSortedAuctions = useMemo(() => {
        if (!auctionData) return [];

        const currentDate = new Date();
        return auctionData
            .filter(nft => {
            const createdAtDate = nft.createdAt ? new Date(nft.createdAt) : new Date();
            const hoursDifference = (currentDate.getTime() - createdAtDate.getTime()) / (1000 * 3600);
            return hoursDifference <= 25 &&
                nft.tokenId.toString().includes(searchText) &&
                (collection === 'All Collections' || nft.nftSymbol === collection);
            })
            .sort((a, b) => {
            switch (sortBy) {
                case 'profit_desc':
                return (parseInt(b.debt) - parseInt(b.floorPrice)) -
                    (parseInt(a.debt) - parseInt(a.floorPrice));
                case 'profit_asc':
                return (parseInt(a.debt) - parseInt(a.floorPrice)) -
                    (parseInt(b.debt) - parseInt(b.floorPrice));
                case 'floor_desc':
                return parseInt(b.floorPrice) - parseInt(a.floorPrice);
                case 'floor_asc':
                return parseInt(a.floorPrice) - parseInt(b.floorPrice);
                default:
                return 0;
            }
            });
    }, [auctionData, searchText, collection, sortBy]);

    const handleClearFilters = () => {
        setSearchText('');
        setCollection('All Collections');
        setSortBy('profit_desc');
    };

    return (
        <div className="flex flex-col lg:flex-row w-full container">
            <AuctionSidebar
                searchText={searchText}
                setSearchText={setSearchText}
                collection={collection}
                setCollection={setCollection}
                sortBy={sortBy}
                setSortBy={setSortBy}
                onClearFilters={handleClearFilters}
            />

            <div className="flex-1 px-6 py-4">
                <div className="mb-6">
                    <Alert variant="default">
                        <AlertDescription className="text-sm">
                            💡 Tip: The first bidder will receive a bonus if the borrower redeems their debt before the auction ends.
                        </AlertDescription>
                    </Alert>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {auctionLoading
                        ? Array(4).fill(0).map((_, index) => (
                            <NFTCardSkeleton key={index} />
                        ))
                        : filteredAndSortedAuctions.map((nft) => (
                            <NFTCard
                                key={nft.id}
                                nft={nft}
                                isLoading={false}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default AuctionsComponent;