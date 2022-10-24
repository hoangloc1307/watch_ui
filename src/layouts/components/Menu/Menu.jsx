import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { togglePopUp } from '~/app/slices/popUp.slice';
import { menu } from '~/assets/datas';
import { logo } from '~/assets/images';
import MenuItem from './MenuItem';

const Menu = () => {
    const dispatch = useDispatch();

    const show = useSelector(state => state.popup.items.menu);
    const navigationShow = useSelector(state => state.popup.navigation);

    return (
        <div id="menu">
            {/* Icons */}
            <span
                className={`p-1 flex flex-col items-center cursor-pointer ${show && 'text-primary'}`}
                onClick={() => dispatch(togglePopUp({ popUp: 'menu', show }))}
            >
                <span className={`${show && 'fill'} material-symbols-outlined`}>menu</span>
                <span className="text-sm">Menu</span>
            </span>

            {/* Overlay */}
            <span
                className={`fixed top-0 left-0 right-0 ${
                    navigationShow ? 'bottom-my-navigation-height' : 'bottom-0'
                } bg-black bg-opacity-40 ${show ? 'overlay-show ' : 'overlay-hide'}`}
                onClick={() => dispatch(togglePopUp({ popUp: 'menu', show }))}
            />

            {/* Menu */}
            <div
                className={`fixed left-0 top-0 ${
                    navigationShow ? 'bottom-my-navigation-height' : 'bottom-0'
                } w-[250px] overflow-scroll bg-white p-4 duration-700 ease-in-out ${
                    show ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
                }`}
            >
                {/* Logo */}
                <Link to="/" className="flex justify-center mb-6">
                    <img src={logo} alt="Logo" className="w-[100px]" />
                </Link>

                {/* Menu items */}
                <div>
                    {menu.map(item => (
                        <MenuItem key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Menu;
