import React from 'react'

const Button = ({ title, color = "bg-[#5d57c9]" }) => {
    return (
        <button className={`px-2.5 py-1 ${color} text-[color:var(--text)] border-none rounded-sm cursor-pointer flex items-center gap-1`}>{title}</button>
    )
}

export default Button