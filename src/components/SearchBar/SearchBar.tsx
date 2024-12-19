import { useBlogStore } from '@/store/useBlogStore';
import {useEffect, useState} from "react";
import {useDebounce} from "use-debounce";

const SearchBar = () => {
    const { setSearchQuery } = useBlogStore();
    const [value, setValue] = useState("")
    const [debouncedValue] = useDebounce(value, 300)

    useEffect(() => {
        setSearchQuery(debouncedValue)
    }, [debouncedValue])

    return (
        <div className="mb-6">
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="w-full p-4 rounded-md border dark:bg-gray-800"
                placeholder="Search blog posts"
                aria-label="Search blog posts"
                autoFocus
                tabIndex={0}
            />
        </div>
    );
};

export default SearchBar;
