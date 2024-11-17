import React from 'react'
import CardPortfolio from './CardPortfolio'
import CardRewards from './CardRewards'
import { Card, CardContent } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { ArrowDown, ArrowUp, ChevronUp, UserRound } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const data = [
    {
        name: "Earn",
        icon: <UserRound className='w-8 h-8' />,
        text: "Earn",
        link: "earn"
    },
    {
        name: "Borrow",
        icon: <ArrowUp className='w-8 h-8' />,
        text: "Earn Market",
        link: "pool"
    },
    {
        name: "Lend",
        icon: <ArrowDown className='w-8 h-8' />,
        text: "Lend Market",
        link: "pool"
    }
]

export default function DashboardPage() {
    return (
        <div className='w-full h-full flex flex-col gap-5'>
            <div className='flex flex-row w-full justify-between items-center gap-5'>
                <CardPortfolio />
                <CardRewards />
            </div>
            <div>
                {data.map((item, index) => (
                    <CardFeatures name={item.name} icon={item.icon} text={item.text} link={item.link} key={index} />
                ))}
            </div>
        </div>
    )
}

export const CardFeatures = ({ name, icon, text, link }: { name: string, icon: JSX.Element, text: string, link: string }) => {
    return (
        <Card className='w-full'>
            <CardContent className='p-5 space-y-5'>
                <div className='flex flex-row justify-between items-center'>
                    <div className='flex flex-row gap-2 items-center'>
                        {icon}
                        <div className='flex flex-col gap-1 justify-center'>
                            <Label className='text-lg'>{name}</Label>
                            <Label>0 Positions</Label>
                        </div>
                    </div>
                    <div className='flex flex-row gap-2 items-center'>
                        <Label className='text-lg'>$0.00</Label>
                        <ChevronUp className='w-5 h-5 cursor-pointer'/>
                    </div>
                </div>
                <Separator />
                <div className='flex flex-col gap-5 items-center justify-center py-10'>
                    <Label className='text-lg'>No Position Yet</Label>
                    <Link href={`/${link.toLowerCase()}`}><Button className='w-fit'>View {text}</Button></Link>
                </div>
            </CardContent>
        </Card>
    )
}