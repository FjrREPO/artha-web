"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import React, { useState } from 'react';
import Withdraw from './Withdraw';
import { PoolSchema } from '@/lib/validation/types';
import Supply from './Supply';

interface LendProps {
    filteredData?: PoolSchema;
}

export default function Lend({ 
    filteredData,
}: LendProps) {
    const [activeTab, setActiveTab] = useState('supply');

    return (
        <Tabs defaultValue="supply" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-fit bg-transparent">
                <TabsTrigger 
                    value="supply" 
                    className={`w-full border-b rounded-none ${activeTab === "supply" ? 'border-b-primary' : 'border-transparent'}`}
                >
                    Supply
                </TabsTrigger>
                <TabsTrigger 
                    value="withdraw" 
                    className={`w-full border-b rounded-none ${activeTab === "withdraw" ? 'border-b-primary' : 'border-transparent'}`}
                >
                    Withdraw
                </TabsTrigger>
            </TabsList>
            <TabsContent value="supply">
                <Supply 
                    filteredData={filteredData!} 
                />
            </TabsContent>
            <TabsContent value="withdraw">
                <Withdraw 
                    filteredData={filteredData!} 
                />
            </TabsContent>
        </Tabs>
    );
}