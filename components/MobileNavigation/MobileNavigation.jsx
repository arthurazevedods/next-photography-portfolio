import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Nav from '../Nav/Nav';
import Logo from '../Logo/Logo';
import Socials from '../Socials/Socials';
import { AlignJustify } from 'lucide-react';

export default function MobileNavigation() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <AlignJustify className='cursor-pointer' />
            </SheetTrigger>
            <SheetContent>
                <SheetTitle>Menu</SheetTitle>
                <div className='flex flex-col items-center justify-between h-full py-8'>
                    <div className='flex flex-col items-center gap-y-32'>
                        <Logo />
                        <Nav
                            containerStyles='flex flex-col items-center gap-y-6'
                            linkStyles='text-1xl'
                        />
                    </div>
                    <Socials
                        containerStyles='flex gap-x-4'
                        iconStyles='text-2xl'
                    />
                </div>
            </SheetContent>
        </Sheet>
    )
}