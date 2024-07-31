import Link from "next/link";
import React from "react";

interface Navlink {
    title: string
    href: string
}

export default function Navigation({navlinks}:{navlinks:Navlink[]}){
    return(
        <nav>
        <ul className="flex items-center gap-12">
            {
                navlinks.map((link,index)=> <li key={index}>
                    <Link href={link.href}>
                    {link.title}
                    </Link>
                </li>)
            }
        </ul>
        </nav>
    )
}