import Link from "next/link";

//Hooks
import { usePathname } from "next/navigation";

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
                            {link.name}
                        </Link>
                    )
                })
            }
        </nav>
    )
}