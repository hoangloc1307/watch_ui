import { memo } from 'react';
import Button from '../Button';

export default memo(function Search() {
    return (
        <div className="group">
            {/* Icon */}
            <Button icon="search" className="peer" />
            {/* Search box */}
            <div className="hidden absolute top-full right-0 w-full max-w-[500px] z-10 md:right-8 lg:left-8 lg:top-[calc(100%+8px)] peer-focus:block focus-within:block hover:block">
                <input
                    type="text"
                    placeholder="Enter keyword to search..."
                    className="w-full outline-none text-black text-sm py-2 pl-4 pr-28 lg:rounded-lg"
                />
                <Button
                    icon="search"
                    background
                    className="absolute top-0 bottom-0 right-0 h-auto rounded-none lg:rounded-r-lg"
                >
                    Search
                </Button>
            </div>
        </div>
    );
});
