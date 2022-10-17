import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { menu } from '../../../assets/datas';
import { icon_menu_gif, icon_menu_png } from '../../../assets/images';

const Menu = () => {
    const location = useLocation();
    const [show, setShow] = useState(false);

    const handleShowMenu = () => {
        setShow(!show);
    };

    return (
        <>
            <span className={`p-1 flex flex-col items-center`} onClick={handleShowMenu}>
                <img src={show ? icon_menu_gif : icon_menu_png} alt="Menu" className={`h-[30px]`} />
                <span className="text-xs text-white">Menu</span>
            </span>
            {/* Overlay */}
            <span
                className={`fixed top-0 left-0 right-0 bottom-my-navigation-height bg-black bg-opacity-40 ${
                    show
                        ? 'opacity-100 [transition:opacity_0.3s_0.3s_ease-in-out] pointer-events-auto'
                        : 'opacity-0 [transition:opacity_0.3s_ease-in-out] pointer-events-none'
                }`}
                onClick={() => {
                    setShow(false);
                }}
            />
            {/* Menu */}
            <div
                className={`fixed left-0 top-0 bottom-my-navigation-height w-[250px] overflow-scroll bg-[#292929] pt-4 pl-4 pb-4 duration-700 ease-in-out ${
                    show ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
                }`}
            >
                {menu.map(item => (
                    <Link
                        key={item.href}
                        to={item.href}
                        className={`flex items-center gap-2 w-full p-2 my-2 group rounded-l-2xl ${
                            location.pathname === item.href && 'bg-white'
                        } hover:bg-white`}
                    >
                        <img
                            src={item.iconPNG}
                            alt="Icon"
                            className={`w-6 ${location.pathname === item.href && 'hidden'} group-hover:hidden`}
                        />
                        <img
                            src={item.iconGIF}
                            alt="Icon"
                            className={`w-6 ${location.pathname !== item.href && 'hidden'} group-hover:inline`}
                        />
                        <span
                            className={`uppercase text-sm ${
                                location.pathname === item.href ? 'text-black' : 'text-white'
                            } group-hover:text-black`}
                        >
                            {item.title}
                        </span>
                    </Link>
                ))}
            </div>
        </>
    );
};

export default Menu;
