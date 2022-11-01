import { memo, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../Button';

export default memo(function Search() {
    const navigate = useNavigate();

    const [keyword, setKeyword] = useState('');
    const [show, setShow] = useState(false);

    const handleSearchShow = useCallback(() => {
        setShow(!show);
    }, [show]);

    const handleSearchClick = e => {
        if (e.type === 'click' || (e.type === 'keydown' && e.code === 'Enter')) {
            setKeyword('');
            setShow(false);
            navigate(`/search?keyword=${keyword}`, { state: { keyword } });
        }
    };
    return (
        <div className="group">
            {/* Icon */}
            <Button icon="search" className={`${show && 'text-primary'}`} onClick={handleSearchShow} />
            {/* Search box */}
            <div
                className={`absolute top-full right-0 w-full max-w-[500px] z-[2] ${
                    show ? 'block' : 'hidden'
                } md:right-8 lg:left-8 lg:top-[calc(100%+8px)]`}
            >
                <input
                    type="text"
                    placeholder="Enter keyword to search..."
                    value={keyword}
                    className="w-full outline-none border border-primary text-black text-sm py-2 pl-4 pr-28 lg:rounded-lg"
                    onKeyDown={handleSearchClick}
                    onChange={e => setKeyword(e.target.value)}
                />
                <Button
                    icon="search"
                    background
                    className="absolute top-0 bottom-0 right-0 h-auto rounded-none lg:rounded-r-lg"
                    onClick={handleSearchClick}
                >
                    Search
                </Button>
            </div>
        </div>
    );
});
