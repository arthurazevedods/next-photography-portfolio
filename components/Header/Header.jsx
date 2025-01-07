'use client';

import { useStat, useEffect } from "react";
import { ThemeToggler } from "../Theme/ThemeToggler";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import MobileNavigation from "../MobileNavigation/MobileNavigation";



export default function Header() {
    return (
        <header>
            <div className="container mx-auto ">
                <div className="flex justify-between items-center">
                    <Logo />
                    <div className="flex items-center gap-x-6">
                        {/* Navigation */}
                        <Nav 
                            containerStyles='xl:flex items-center gap-x-8 hidden' 
                            linkStyles='relative hover:text-primary transition-all'
                            underlineStyles='bg-primary w-full absolute left-0 top-full h-[2px]'
                        />

                         {/* Theme Toggle */}
                        <ThemeToggler />

                         {/* Mobile Nav */}
                         <div className="xl:hidden">
                            <MobileNavigation />
                         </div>
                    </div>
                </div>
            </div>

        </header>
    )
}