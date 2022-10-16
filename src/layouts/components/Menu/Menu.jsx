import { useState } from 'react';

import { icon_menu_gif, icon_menu_png } from '../../../assets/images';

export const Menu = () => {
    const [show, setShow] = useState(false);

    const handleShowMenu = () => {
        setShow(!show);
    };

    return (
        <>
            <span className="p-3" onClick={handleShowMenu}>
                <img src={show ? icon_menu_gif : icon_menu_png} alt="Menu" className="h-[40px]" />
            </span>
            <div
                className={`fixed top-0 left-0 right-0 bottom-my-navigation-height -translate-x-full duration-1000 ease-in-out bg-black ${
                    show ? 'translate-x-0' : ''
                }`}
            ></div>
        </>
    );
};
