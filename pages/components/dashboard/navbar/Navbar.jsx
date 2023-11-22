"use client"
import { usePathname } from 'next/navigation'
import React from 'react'
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from 'react-icons/md'

const Navbar = () => {

    const pathname = usePathname();

    const navigation = pathname.split("/").pop();

    return (
        <div className="flex items-center justify-between p-5 rounded-lg bg-[color:var(--bgSoft)]">
            <div className="text-[color:var(--textSoft)] font-bold capitalize">{navigation}</div>
            <div className="flex items-center gap-5">
                <div className="flex items-center gap-3 bg-[#2e374a] p-3 rounded-xl">
                    <MdSearch />
                    <input type="text" placeholder="Search..." className="bg-transparent border-none text-[color:var(--text)]" />
                </div>
                <div className="flex gap-5">
                    <MdNotifications size={20} />
                    <MdOutlineChat size={20} />
                    <MdPublic size={20} />
                </div>
            </div>
        </div>
    )
}

export default Navbar