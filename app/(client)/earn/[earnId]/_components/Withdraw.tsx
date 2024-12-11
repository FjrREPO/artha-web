import { CoinImage } from '@/components/coin/CoinImage'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { EarnSchema } from '@/lib/validation/types'
import { Wallet } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { useWithdrawCurator } from '@/hooks/contract/write/useWithdrawCurator'
import SuccessDialog from '@/components/dialog/SuccessDialog'
import { LoadingTransaction } from '@/components/loader/LoadingTransaction'
import { toast } from 'sonner'
import { useAccount } from 'wagmi'

interface WithdrawProps {
    filteredData?: EarnSchema;
}

interface WithdrawFormValues {
    amount: number;
}

export default function Withdraw({ filteredData }: WithdrawProps) {
    const { address } = useAccount();
    const [showSuccessDialog, setShowSuccessDialog] = useState(false);

    const form = useForm<WithdrawFormValues>({
        defaultValues: {
            amount: 0,
        },
    });

    const handleMaxWithdraw = () => {
        form.setValue('amount', 0);
    };

    const {
        mutation,
        txHash
    } = useWithdrawCurator(filteredData?.curator as HexAddress)

    const onSubmit = async (data: WithdrawFormValues) => {
        if (!address || !filteredData) {
            return;
        }

        mutation.mutate(
            {
                amount: data.amount.toString(),
                userAddress: address as HexAddress,
            },
            {
                onSuccess: () => {
                    setShowSuccessDialog(true);
                    form.reset();
                },
                onError: (error) => {
                    toast.error(`Error borrowing: ${error}`);
                    console.error("Error borrowing:", error);
                },
            }
        );
    };

    return (
        <>
            {mutation.isPending && <LoadingTransaction message={"Loading.."} />}
            <SuccessDialog
                isOpen={showSuccessDialog}
                onClose={() => setShowSuccessDialog(false)}
                txHash={txHash as HexAddress || ""}
                processName="Withdraw"
            />
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
                    <Card className="w-full p-5">
                        <CardContent className="flex flex-col gap-5 p-0">
                            <div className="flex flex-row justify-between items-center">
                                <Label>Withdraw</Label>
                                <div className="flex flex-row gap-2 items-center">
                                    <Wallet />
                                    <Label>0</Label>
                                    <Button
                                        type="button"
                                        variant="outline"
                                        className="cursor-pointer px-3"
                                        onClick={handleMaxWithdraw}
                                    >
                                        <Label className="text-[11px] cursor-pointer">Max</Label>
                                    </Button>
                                </div>
                            </div>
                            <FormField
                                control={form.control}
                                name="amount"
                                render={({ field }) => (
                                    <FormItem className="relative">
                                        <FormControl>
                                            <div className="relative">
                                                <Input
                                                    type="number"
                                                    min={0}
                                                    className="w-full pr-10"
                                                    {...field}
                                                    onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                                                />
                                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-fit">
                                                    <CoinImage address={filteredData?.asset || ""} />
                                                </div>
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </CardContent>
                    </Card>
                    <Button type="submit" className="w-full">Withdraw</Button>
                    <Card className="w-full">
                        <CardContent className="p-5 space-y-5">
                            <Label className="font-bold">Transaction Overview</Label>
                            <div className="flex flex-row justify-between">
                                <Label className="text-textSecondary">Gas Fee</Label>
                                <Label>-</Label>
                            </div>
                        </CardContent>
                    </Card>
                </form>
            </Form>
        </>
    )
}