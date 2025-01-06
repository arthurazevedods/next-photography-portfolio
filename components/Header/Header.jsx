'use client';

import { useStat, useEffect } from "react";
import { ThemeToggler } from "../Theme/ThemeToggler";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import MobileNavigation from "../MobileNavigation/MobileNavigation";



export default function Header() {
    return (
        <header>
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <Logo />
                    <div className="flex">
                        {/* Navigation */}
                        <Nav />

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