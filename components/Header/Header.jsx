'use client';

import { useState, useEffect } from "react";
import { ThemeToggler } from "../Theme/ThemeToggler";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import MobileNavigation from "../MobileNavigation/MobileNavigation";
import { usePathname } from "next/navigation";



export default function Header() {

    const [header, setHeader] = useState(false);
    const pathname = usePathname();
    
    
    useEffect(()=>{
        const scrollYPos = window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setHeader(true) : setHeader(false)
        });

        return () => window.removeEventListener('scroll', scrollYPos);
    })
    return (
        <header 
        className={`${header 
            ? 'py-4 bg-white shadow-lg dark:bg-accent'
            : 'py-6 dark:bg-transparent'
        }  sticky top-0 z-30 transition-all ${pathname === '/' && 'bg-[#fff]'} `}
        >
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