import Image from "next/image";
import Link from "next/link";


export default function Logo() {
    return (
        <Link href='/'>
            <Image src='/logo.png' width={32} height={32} priority alt="logo" />
        </Link>

    )
}