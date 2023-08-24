import { FaSearch } from "react-icons/fa";

const Search = () => {

    return (
        <div className="relative mr-4">
            <form >
                <input type="search" name="search" placeholder="Search" className="px-2 py-2 rounded-md outline-primary border border-slate-300 w-full" />
                <button type="submit" className='absolute right-1/4 translate-x-12 top-1/2  -translate-y-1/2'><FaSearch  /></button>
            </form>
        </div>
    );
};

export default Search;