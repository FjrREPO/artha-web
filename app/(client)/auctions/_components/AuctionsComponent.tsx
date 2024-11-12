"use client"

import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import {
    Card,
    CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ChevronUp, ChevronDown } from "lucide-react";
import SkeletonWrapper from '@/components/loader/SkeletonWrapper';
import Image from 'next/image';
import { AuctionsDataSchema } from '@/lib/validation/types';

type CollectionOption = string;
type OrderDirection = 'asc' | 'desc';

const Sidebar: React.FC<{ onFilterChange: (filters: { search: string; selectedCollections: CollectionOption[]; orderBy: 'healthFactor' | 'bidPrice' | 'debt'; orderDirection: OrderDirection }) => void, data?: AuctionsDataSchema[] }> = ({ onFilterChange, data }) => {
    const [searchText, setSearchText] = useState('');
    const [selectedCollections, setSelectedCollections] = useState<CollectionOption[]>([]);
    const [orderBy, setOrderBy] = useState<'healthFactor' | 'bidPrice' | 'debt'>('healthFactor');
    const [orderDirection, setOrderDirection] = useState<OrderDirection>('desc');

    const handleFilterChange = () => {
        onFilterChange({
            search: searchText,
            selectedCollections,
            orderBy,
            orderDirection,
        });
    };

    return (
        <div className="w-64 p-4 border-r">
            <Input
                type="text"
                placeholder="Token ID"
                className="mb-4"
                value={searchText}
                onChange={(e) => {
                    setSearchText(e.target.value);
                    handleFilterChange();
                }}
            />

            <Accordion type="single" collapsible>
                <AccordionItem value="collection">
                    <AccordionTrigger className='hover:no-underline'>Collection</AccordionTrigger>
                    <AccordionContent>
                        <div className="space-y-2">
                            {[...new Set(data?.map(item => item.collectionName))].map(collection => (
                                <div key={collection} className="flex items-center space-x-2 cursor-pointer">
                                    <Checkbox
                                        id={collection}
                                        checked={selectedCollections.includes(collection)}
                                        onChange={(checked) => {
                                            if (checked) {
                                                setSelectedCollections([...selectedCollections, collection]);
                                            } else {
                                                setSelectedCollections(selectedCollections.filter(c => c !== collection));
                                            }
                                            handleFilterChange();
                                        }}
                                    />
                                    <Label htmlFor={collection} className='cursor-pointer'>{collection}</Label>
                                </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="order-by">
                    <AccordionTrigger className='hover:no-underline'>Order by</AccordionTrigger>
                    <AccordionContent>
                        <RadioGroup
                            value={orderBy}
                            onValueChange={(value) => {
                                setOrderBy(value as 'healthFactor' | 'bidPrice' | 'debt');
                                handleFilterChange();
                            }}
                        >
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="healthFactor" id="healthFactor" />
                                <Label htmlFor="healthFactor">Health factor</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="bidPrice" id="bidPrice" />
                                <Label htmlFor="bidPrice">Bid price</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="debt" id="debt" />
                                <Label htmlFor="debt">Debt</Label>
                            </div>
                        </RadioGroup>
                        
                        <div className="flex items-center space-x-2 mt-4">
                            <Button
                                variant={orderDirection === 'asc' ? 'secondary' : 'ghost'}
                                onClick={() => {
                                    setOrderDirection('asc');
                                    handleFilterChange();
                                }}
                            >
                                ASC <ChevronUp size={16} />
                            </Button>
                            <Button
                                variant={orderDirection === 'desc' ? 'secondary' : 'ghost'}
                                onClick={() => {
                                    setOrderDirection('desc');
                                    handleFilterChange();
                                }}
                            >
                                DESC <ChevronDown size={16} />
                            </Button>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            <Button
                variant="outline"
                className="w-full mt-4"
                onClick={() => {
                    setSearchText('');
                    setSelectedCollections([]);
                    setOrderBy('healthFactor');
                    setOrderDirection('desc');
                    handleFilterChange();
                }}
            >
                Clear all filters
            </Button>
        </div>
    );
};

interface NFTCardProps {
    nft: AuctionsDataSchema;
    isLoading: boolean;
}

const NFTCard: React.FC<NFTCardProps> = ({ nft, isLoading }) => {
    return (
        <SkeletonWrapper isLoading={isLoading}>
            <Card className="w-full max-w-sm">
                <CardContent className="p-4">
                    <Image
                        src={nft.image}
                        alt='NFT'
                        width={300}
                        height={300}
                        className="rounded-lg mb-4 w-full aspect-square object-cover"
                    />
                    <div className="space-y-2">
                        <Label className='text-sm'>WKODA # {nft.loanId}</Label>
                        <div className="flex justify-between">
                            <span className="text-sm font-medium">Floor Price</span>
                            <span className="text-sm">{parseFloat(nft.floorPrice).toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-sm font-medium">Debt</span>
                            <span className="text-sm">{parseFloat((Number(nft.borrowed)/1_000_000_000_000_000_000).toString()).toFixed(4)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-sm font-medium">First bid bonus</span>
                            <span className="text-sm">{parseFloat(nft.bidFine).toFixed(1)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-sm font-medium">Potential Profit</span>
                            <span className="text-sm">1.1213</span>
                        </div>
                    </div>
                    <Button className="w-full mt-4">Place a bid</Button>
                </CardContent>
            </Card>
        </SkeletonWrapper>
    );
};

const AuctionsComponent: React.FC = () => {
    const [filters, setFilters] = useState<{
        search: string;
        selectedCollections: CollectionOption[];
        orderBy: 'healthFactor' | 'bidPrice' | 'debt';
        orderDirection: OrderDirection;
    }>({
        search: '',
        selectedCollections: [],
        orderBy: 'healthFactor',
        orderDirection: 'desc',
    });

    const { data, isLoading } = useQuery<{ data: AuctionsDataSchema[] }>({
        queryKey: ["auctions", filters],
        queryFn: async () => {
            const response = await fetch('https://gist.githubusercontent.com/FjrREPO/2aa775ebc0f289f660457d5c0607218d/raw/b5b83d948c291e9650ac4953109991730c88b532/auctions.json');
            return response.json();
        },
        refetchInterval: 60000,
    });

    const filteredData = data?.data.filter((nft) => {
        if (filters.search && !nft.loanId.includes(filters.search)) {
            return false;
        }
        if (filters.selectedCollections.length > 0 && !filters.selectedCollections.includes(nft.collectionName)) {
            return false;
        }
        return true;
    }).sort((a, b) => {
        switch (filters.orderBy) {
            case 'healthFactor':
                return filters.orderDirection === 'asc' ? a.healthFactor - b.healthFactor : b.healthFactor - a.healthFactor;
            case 'bidPrice':
                return filters.orderDirection === 'asc' ? parseFloat(a.bidPrice) - parseFloat(b.bidPrice) : parseFloat(b.bidPrice) - parseFloat(a.bidPrice);
            case 'debt':
                return filters.orderDirection === 'asc' ? parseFloat(a.borrowed) - parseFloat(b.borrowed) : parseFloat(b.borrowed) - parseFloat(a.borrowed);
            default:
                return 0;
        }
    });

    return (
        <div className="flex flex-col sm:flex-row min-h-screen w-full">
            <Sidebar onFilterChange={setFilters} data={data?.data}/>
            <div className="flex-1 px-6 py-4">
                <div className="mb-6">
                    <Alert>
                        <AlertDescription>
                            The first bidder will receive the first bid bonus if the borrower redeems his debt before the auction ends.
                        </AlertDescription>
                    </Alert>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {filteredData?.map((nft, index) => (
                        <NFTCard key={index} nft={nft} isLoading={isLoading} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AuctionsComponent;