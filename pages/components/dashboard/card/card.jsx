import React from 'react'
import { MdSupervisedUserCircle } from 'react-icons/md'

const Card = () => {
    return (
        <div className="bg-[color:var(--bgSoft)] p-5 rounded-xl flex gap-5 cursor-pointer w-full hover:bg-[#2e374a]">
            <MdSupervisedUserCircle size={24} />
            <div className="flex flex-col gap-5">
                <span className="text-base">Total Users</span>
                <span className="text-2xl font-medium">19.323</span>
                <span className="text-sm font-light">
                    <span className="text-lime-500">12%</span> more than previous weeks
                </span>
            </div>
        </div>
    )
}

export default Card