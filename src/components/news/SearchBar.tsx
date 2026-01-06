import React from 'react'
import { Input } from '../ui/input'
import { IoSearch } from "react-icons/io5";

const SearchBar = ({ onSearch }: { onSearch: (query: string) => void }) => {

    const [isSearching, setIsSearching] = React.useState(false);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSearch(event.target.value)
        setIsSearching(event.target.value.length > 0);
    }

    return (
        <div className='relative md:w-2/5'>
            <Input type="search" onChange={handleSearch} placeholder="Search news..." className="p-2.5 border rounded-md" />
            {!isSearching && <IoSearch className="absolute right-3 top-2.5" />}
        </div>
    )
}

export default SearchBar