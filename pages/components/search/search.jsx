import React from 'react'
import { MdSearch } from 'react-icons/md'

const Search = ({ placeholder }) => {
    return (
        <div className="flex items-center gap-3 bg-[#2e374a] p-3 rounded-xl">
            <MdSearch />
            <input type="text" placeholder={placeholder} className="bg-transparent border-none text-[color:var(--text)]" />
        </div>
    )
}

export default Search