import { useState } from 'react';

const Search = () => {
    const [show, setShow] = useState(false);

    return (
        <div>
            <span
                className="material-symbols-outlined pl-2 pt-2 pb-2"
                onClick={() => {
                    setShow(!show);
                }}
            >
                search
            </span>
            {show && (
                <div className="absolute top-full right-0 w-full max-w-lg">
                    <input
                        type="text"
                        placeholder="Enter keyword to search..."
                        className="w-full outline-none text-black text-xm py-2 pl-4 pr-28"
                    />
                    <button className="absolute top-0 bottom-0 right-0 px-4 w-24 bg-primary text-center text-sm font-normal tracking-wider">
                        Tìm kiếm
                    </button>
                </div>
            )}
        </div>
    );
};

export default Search;
