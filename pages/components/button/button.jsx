import React from 'react'

const Button = ({ title, color = "bg-[#5d57c9]" }) => {
    return (
        <button className={`p-2.5 ${color} text-[color:var(--text)] border-none rounded-md cursor-pointer`}>{title}</button>
    )
}

export default Button