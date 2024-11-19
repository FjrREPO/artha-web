"use client"

import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form"
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { LTVSection } from './LTVSection';
import { supplyCollateralAndBorrow } from '@/lib/validation/schemas';
import { useCryptoToken } from '@/hooks/useCryptoToken';
import { DepositAndBorrowSection } from './DepositAndBorrowSection';

type FormData = z.infer<typeof supplyCollateralAndBorrow>;

const BorrowComponent: React.FC = () => {
    const { cryptoTokenData, cryptoTokenLoading } = useCryptoToken();
    const [isClientSide, setIsClientSide] = useState(false);

    const form = useForm<FormData>({
        resolver: zodResolver(supplyCollateralAndBorrow),
        defaultValues: {
            depositAmount: '',
            depositToken: '',
            borrowAmount: '',
            borrowToken: '',
            ltv: [50],
        }
    });

    useEffect(() => {
        setIsClientSide(true);
    }, []);

    useEffect(() => {
        if (isClientSide && cryptoTokenData && cryptoTokenData.length > 0 && form.getValues('depositToken') === '' && form.getValues('borrowToken') === '') {
            const defaultTokenAddress = cryptoTokenData[0].contract_address[0].contract_address;

            if (!form.getValues('depositToken')) {
                form.setValue('depositToken', defaultTokenAddress);
            }
            if (!form.getValues('borrowToken')) {
                form.setValue('borrowToken', defaultTokenAddress);
            }
        }
    }, [cryptoTokenData, form, isClientSide]);

    const onSubmit = (values: z.infer<typeof supplyCollateralAndBorrow>) => {
        console.log('Form Submitted:', values);
    };

    if (!isClientSide) return null;

    return (
        <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-1 max-w-lg'>
                <Label className='text-2xl'>Artha Borrow</Label>
                <Label className='text-md text-textGraycustom'>
                    Borrow here. Choose based on your risk tolerance. Remember to DYOR (Do Your Own Research).
                </Label>
            </div>
            <div className='flex flex-row w-full gap-5'>
                <Card className='w-4/6'>
                    <CardContent className='p-2'>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                <DepositAndBorrowSection form={form} cryptoTokenData={cryptoTokenData || []} cryptoTokenLoading={cryptoTokenLoading} />
                                <LTVSection form={form} />
                                <Button type="submit" className="w-full">
                                    Borrow
                                </Button>
                            </form>
                        </Form>
                    </CardContent>
                </Card>
                <Card className='w-2/6 h-fit'>
                    <CardContent className='p-10 flex flex-col gap-3'>
                        <Label className='text-lg'>Borrow Rate</Label>
                        <Label className='text-4xl'>8.51%</Label>
                        <Label className='font-normal'>Borrow token directly from artha finance</Label>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default BorrowComponent;