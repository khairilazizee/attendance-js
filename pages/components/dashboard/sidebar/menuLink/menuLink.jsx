"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const MenuLink = ({ item }) => {

    const pathname = usePathname();

    return (
        <Link href={item.path} className={`p-2.5 flex items-center gap-2.5 m-5 rounded-xl hover:bg-[#2e374a] ${pathname === item.path && "bg-[#2e374a]"}`}>
            {item.icon}
            {item.title}
        </Link>
    )
}

export default MenuLink