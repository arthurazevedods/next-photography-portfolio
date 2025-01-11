'use client';

import Link from 'next/link';
import {  RiInstagramFill, RiTwitterXFill, RiMediumFill, RiFacebookFill } from 'react-icons/ri'

const icons = [
   
    {
        path: '/',
        name: <RiInstagramFill />,
    },
    {
        path: '/',
        name: <RiTwitterXFill />,
    },
    {
        path: '/',
        name: <RiMediumFill />,
    },
    {
        path: '/',
        name: <RiFacebookFill />,
    }
]


export default function Socials({ containerStyles, iconStyles }) {
    return (
        <div className={`${containerStyles}`}>
            {
                icons.map((icon, index) => {
                    return (
                        <Link href={icon.path} key={index}>
                            <div className={`${iconStyles}`}>
                                {
                                    icon.name
                                }
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}