"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import React, { useState } from 'react';
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import { PoolSchema } from '@/lib/validation/types';

interface LendProps {
    filteredData: PoolSchema;
    handleDepositChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleMaxDeposit: () => void;
    depositAmount: number;
    handleWithdrawChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleMaxWithdraw: () => void;
    withdrawAmount: number;
}

export default function Lend({ 
    filteredData, 
    handleDepositChange, 
    handleMaxDeposit, 
    depositAmount, 
    handleWithdrawChange, 
    handleMaxWithdraw, 
    withdrawAmount 
}: LendProps) {
    const [activeTab, setActiveTab] = useState('deposit');

    return (
        <Tabs defaultValue="deposit" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-fit bg-transparent">
                <TabsTrigger 
                    value="deposit" 
                    className={`w-full border-b rounded-none ${activeTab === "deposit" ? 'border-b-primary' : 'border-transparent'}`}
                >
                    Deposit
                </TabsTrigger>
                <TabsTrigger 
                    value="withdraw" 
                    className={`w-full border-b rounded-none ${activeTab === "withdraw" ? 'border-b-primary' : 'border-transparent'}`}
                >
                    Withdraw
                </TabsTrigger>
            </TabsList>
            <TabsContent value="deposit">
                <Deposit 
                    filteredData={filteredData!} 
                    handleDepositChange={handleDepositChange} 
                    handleMaxDeposit={handleMaxDeposit} 
                    depositAmount={depositAmount} 
                />
            </TabsContent>
            <TabsContent value="withdraw">
                <Withdraw 
                    filteredData={filteredData!} 
                    handleWithdrawChange={handleWithdrawChange} 
                    handleMaxWithdraw={handleMaxWithdraw} 
                    withdrawAmount={withdrawAmount} 
                />
            </TabsContent>
        </Tabs>
    );
}