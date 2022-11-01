import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { togglePopUp } from '~/app/slices/popUp.slice';
import { menu } from '~/assets/datas';
import { logo } from '~/assets/images';
import MenuItem from './MenuItem';

export default memo(function Menu() {
    const dispatch = useDispatch();

    const show = useSelector(state => state.popup.items.menu);

    return (
        <div
            id="menu-popup"
            className={`fixed z-[2] inset-0 bottom-my-navigation-height duration-700 ${
                show ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
        >
            {/* Overlay */}
            <div
                className={`w-full h-full bg-black bg-opacity-70`}
                onClick={() => dispatch(togglePopUp({ popUp: 'menu', show }))}
            />

            {/* Menu */}
            <div
                className={`absolute left-0 top-0 w-[250px] h-full overflow-y-auto bg-white p-4 duration-700 ease-in-out ${
                    show ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
                }`}
            >
                {/* Logo */}
                <Link to="/" className="flex justify-center mb-6">
                    <img src={logo} alt="Logo" className="w-[100px]" />
                </Link>

                {/* Menu items */}
                <div className="flex flex-col gap-2">
                    {menu.map(item => (
                        <MenuItem key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
});
