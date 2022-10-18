import { Link, useLocation } from 'react-router-dom';

import { menu } from '../../assets/datas';
import { logo } from '../../assets/images';

const Menu = ({ show, onToggleShow }) => {
    const location = useLocation();

    const handleShowMenu = () => {
        onToggleShow('menu', show);
    };

    return (
        <div id="menu">
            {/* Icons */}
            <span
                className={`p-1 flex flex-col items-center cursor-pointer ${show && 'text-primary'}`}
                onClick={handleShowMenu}
            >
                <span class={`${show && 'fill'} material-symbols-outlined`}>menu</span>
                <span className="text-sm">Menu</span>
            </span>

            {/* Overlay */}
            <span
                className={`fixed top-0 left-0 bottom-my-navigation-height w-screen bg-black bg-opacity-40 ${
                    show
                        ? 'opacity-100 [transition:opacity_0.3s_0.3s_ease-in-out] pointer-events-auto'
                        : 'opacity-0 [transition:opacity_0.3s_ease-in-out] pointer-events-none'
                }`}
                onClick={handleShowMenu}
            />

            {/* Menu */}
            <div
                className={`fixed left-0 top-0 bottom-my-navigation-height w-[250px] overflow-auto bg-white pt-4 pl-4 pb-4 duration-700 ease-in-out ${
                    show ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
                }`}
            >
                {/* Logo */}
                <Link to="/" className="flex justify-center pr-4 mb-6">
                    <img src={logo} alt="Logo" className="w-[100px]" />
                </Link>

                {/* Menu items */}
                <div>
                    {menu.map((item, index) => (
                        <Link
                            key={index}
                            to={item.href}
                            className={`flex items-center gap-2 w-full p-3 my-2 rounded-l-full ${
                                location.pathname === item.href && 'text-primary bg-black'
                            } hover:text-primary hover:bg-black`}
                        >
                            <span class="material-symbols-outlined">{item.icon}</span>
                            <span className={`text-sm`}>{item.title}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Menu;
