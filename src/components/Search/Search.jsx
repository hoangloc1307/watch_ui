import { useState } from 'react';
import Button from '../Button';

const Search = () => {
    const [show, setShow] = useState(false);

    return (
        <div>
            {/* Icon */}
            <Button
                icon="search"
                onClick={() => {
                    setShow(!show);
                }}
            />
            {/* Search box */}
            {show && (
                <div className="absolute top-full right-0 w-full max-w-lg z-10 lg:left-8">
                    <input
                        type="text"
                        placeholder="Enter keyword to search..."
                        className="w-full outline-none text-black text-xm py-2 pl-4 pr-28 lg:rounded-lg"
                    />
                    <button className="absolute top-0 bottom-0 right-0 px-4 w-24 bg-primary bg-opacity-80 text-center text-sm text-white font-normal tracking-wider active:bg-opacity-100 hover:bg-opacity-100 lg:rounded-r-lg">
                        Search
                    </button>
                </div>
            )}
        </div>
    );
};

export default Search;
