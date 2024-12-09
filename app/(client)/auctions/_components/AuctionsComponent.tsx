"use client"

import React, { useState, useMemo } from 'react';
import {
    Card,
    CardContent
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Filter, X } from "lucide-react";
import SkeletonWrapper from '@/components/loader/SkeletonWrapper';
import Image from 'next/image';
import { AuctionApiSchema } from '@/lib/validation/types';
import Link from 'next/link';
import { getAllAuction } from '@/actions/get-all-auction';

const COLLECTIONS = ['All Collections', 'Collection A', 'Collection B', 'Collection C'];
const SORT_OPTIONS = [
    { label: 'Potential Profit (Highest)', value: 'profit_desc' },
    { label: 'Potential Profit (Lowest)', value: 'profit_asc' },
    { label: 'Floor Price (Highest)', value: 'floor_desc' },
    { label: 'Floor Price (Lowest)', value: 'floor_asc' },
];

const Sidebar: React.FC<{
    searchText: string;
    setSearchText: (text: string) => void;
    collection: string;
    setCollection: (collection: string) => void;
    sortBy: string;
    setSortBy: (sort: string) => void;
    onClearFilters: () => void;
}> = ({
    searchText,
    setSearchText,
    collection,
    setCollection,
    sortBy,
    setSortBy,
    onClearFilters
}) => {
        return (
            <div className="w-full lg:w-64 p-4 border-r shadow-sm">
                <div className="flex items-center mb-4">
                    <Filter className="mr-2 text-gray-500" size={20} />
                    <h2 className="text-lg font-semibold">Filters</h2>
                </div>

                <div className="relative mb-4">
                    <Input
                        type="text"
                        placeholder="Search by Token ID"
                        className="pr-8"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    {searchText && (
                        <X
                            className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700"
                            size={16}
                            onClick={() => setSearchText('')}
                        />
                    )}
                </div>

                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="collection">
                        <AccordionTrigger className='hover:no-underline'>
                            Collection
                        </AccordionTrigger>
                        <AccordionContent>
                            <RadioGroup
                                value={collection}
                                onValueChange={setCollection}
                                className="space-y-2"
                            >
                                {COLLECTIONS.map(col => (
                                    <div key={col} className="flex items-center space-x-2">
                                        <RadioGroupItem value={col} id={col} />
                                        <Label htmlFor={col}>{col}</Label>
                                    </div>
                                ))}
                            </RadioGroup>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="order-by">
                        <AccordionTrigger className='hover:no-underline'>
                            Sort By
                        </AccordionTrigger>
                        <AccordionContent>
                            <RadioGroup
                                value={sortBy}
                                onValueChange={setSortBy}
                                className="space-y-2"
                            >
                                {SORT_OPTIONS.map(option => (
                                    <div key={option.value} className="flex items-center space-x-2">
                                        <RadioGroupItem value={option.value} id={option.value} />
                                        <Label htmlFor={option.value}>{option.label}</Label>
                                    </div>
                                ))}
                            </RadioGroup>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                <Button
                    variant="outline"
                    className="w-full mt-4 text-red-500 hover:text-red-600"
                    onClick={onClearFilters}
                >
                    <X className="mr-2" size={16} /> Clear all filters
                </Button>
            </div>
        );
    };

interface NFTCardProps {
    nft: AuctionApiSchema;
    isLoading: boolean;
}

const NFTCard: React.FC<NFTCardProps> = ({ nft, isLoading }) => {
    const potentialProfit = useMemo(() => {
        const debt = parseFloat(nft.debt)/1e6;
        const floorPrice = parseFloat(nft.floorPrice)/1e6;
        return (floorPrice - debt).toFixed(2);
    }, [nft.debt, nft.floorPrice]);

    return (
        <SkeletonWrapper isLoading={isLoading}>
            <Card className="w-full max-w-sm hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4">
                    <div className="relative mb-4">
                        <Image
                            src={nft.nftData.contract.openSeaMetadata.imageUrl || '/img/placeholder-nft.jpg'}
                            alt={`NFT ${nft.nftData.name} #${nft.position.tokenId}`}
                            width={300}
                            height={300}
                            className="rounded-lg w-full aspect-square object-cover"
                            priority
                        />
                        <div className="absolute top-2 right-2 bg-background/80 px-2 py-1 rounded-full text-xs font-medium">
                            #{nft.position.tokenId}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-sm font-semibold truncate">
                            {nft.nftData.name}
                        </h3>

                        <div className="grid grid-cols-2 gap-2">
                            <div className="text-xs text-textGraycustom">Floor Price</div>
                            <div className="text-xs font-medium text-right">{parseInt(nft.floorPrice)/1e6}</div>

                            <div className="text-xs text-textGraycustom">Debt</div>
                            <div className="text-xs font-medium text-right">{parseInt(nft.debt)/1e6}</div>

                            <div className="text-xs text-textGraycustom">Potential Profit</div>
                            <div className={`text-xs font-medium text-right ${parseFloat(potentialProfit) > 0 ? 'text-green-500' : 'text-red-500'
                                }`}>
                                {potentialProfit}
                            </div>
                        </div>
                    </div>

                    <Link href={`/auctions/${nft.position.id}`} className="block mt-4">
                        <Button className="w-full" variant="default">
                            Place a Bid
                        </Button>
                    </Link>
                </CardContent>
            </Card>
        </SkeletonWrapper>
    );
};

const AuctionsComponent: React.FC = () => {
    const [searchText, setSearchText] = useState('');
    const [collection, setCollection] = useState('All Collections');
    const [sortBy, setSortBy] = useState('profit_desc');

    const { auctionData, auctionLoading } = getAllAuction();

    const filteredAndSortedAuctions = useMemo(() => {
        if (!auctionData) return [];

        return auctionData
            .filter(nft =>
                nft.position.tokenId.toString().includes(searchText) &&
                (collection === 'All Collections' ||
                    nft.nftData.contract.name === collection)
            )
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
            <Sidebar
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

                {filteredAndSortedAuctions.length === 0 ? (
                    <div className="text-center py-12 text-gray-500">
                        No auctions found. Try adjusting your filters.
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {filteredAndSortedAuctions.map((nft) => (
                            <NFTCard
                                key={nft.position.id}
                                nft={nft}
                                isLoading={auctionLoading}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AuctionsComponent;