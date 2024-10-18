'use client';
import Link from 'next/link'
import React from 'react'
import { AnimatedShinyTextDemo } from './Button'


const TopBar = () => {
   
    return (
        <>
            <div className="sticky top-0 backdrop-blur-xl bg-white z-50 w-screen rounded-3xl p-4">
                <div className="container mx-auto flex items-center justify-between rounded-3xl">
                    <Link href="/">
                        <h1 className="text-xl font-bold text-black">Benelova</h1>
                    </Link>
                    <div className='flex justify-between gap-5 items-center'>
                        <h1 className="font-semibold hidden md:block">+57 302 58 54 039</h1>
                        <a href={"#mapa"}>
                            <AnimatedShinyTextDemo />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopBar