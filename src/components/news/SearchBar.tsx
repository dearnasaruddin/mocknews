import React from 'react'
import { Input } from '../ui/input'
import { IoSearch } from "react-icons/io5";

const SearchBar = ({ onSearch }: { onSearch: (query: string) => void }) => {
    return (
        <div className='relative w-2/5'>
            <Input type="search" onChange={(e) => onSearch(e.target.value)} placeholder="Search news..." className="p-2.5 border rounded-md" />
            <IoSearch className="absolute right-3 top-2.5" />
        </div>
    )
}

export default SearchBar