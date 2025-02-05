import Link from "next/link";

//Hooks
import { usePathname } from "next/navigation";
import { motion } from 'framer-motion'

const links = [
    { path: '/', name: 'início' },
    { path: '/sobremim', name: 'sobre mim' },
    { path: '/portfolio', name: 'portfólio' },
    { path: '/valores', name: 'valores' },
    { path: '/contato', name: 'contato' },

];



export default function Nav({ containerStyles, linkStyles, underlineStyles }) {

    const path = usePathname();
    return (
        <nav className={`${containerStyles}`}>
            {
                links.map((link, index) => {
                    return (
                        <Link
                        href={link.path}
                        key={index}
                        className={`capitalize ${linkStyles}`}
                        >
                            {link.path === path && (
                                <motion.span 
                                initial={{ y: '-100%' }}
                                animate={{ y: 0 }}
                                transition={{ type: 'tween' }}
                                layoutId='underline'
                                className={`${underlineStyles}`}
                                />
                            )}
                           {link.name}
                        </Link>
                    )
                })
            }
        </nav>
    )
}