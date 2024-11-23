import React from 'react'
import BorrowComponent from './_components/BorrowComponent'

export default function page() {
    return (
        <div className="w-full flex-1 px-5 sm:px-10 lg:px-20">
            <div className="w-full h-full flex xl:max-w-screen-xl lg:max-w-screen-lg mx-auto">
                <BorrowComponent />
            </div>
        </div>
    )
}