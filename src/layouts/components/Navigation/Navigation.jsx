import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Menu from '../../../components/Menu';
import Cart from '../../../components/Cart';
import { hideAllPopUp } from '../../../app/slices/popUp.slice';

const Navigation = () => {
    const { pathname } = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(hideAllPopUp());
        // eslint-disable-next-line
    }, [pathname]);

    return (
        <div
            id="navigation"
            className="fixed left-0 bottom-0 w-full h-my-navigation-height bg-white z-10 shadow-[0_0_2px_0_#ccc]"
        >
            <div className="flex items-center justify-evenly w-full max-w-screen-sm h-my-navigation-height mx-auto">
                <Link to="/" className={`p-1 flex flex-col items-center ${pathname === '/' && 'text-primary'}`}>
                    <span className={`${pathname === '/' && 'fill'} material-symbols-outlined`}>home</span>
                    <span className="text-sm">Home</span>
                </Link>
                <Menu />
                <Cart />
                <Link to="/" className={`p-1 flex flex-col items-center`}>
                    <span className="material-symbols-outlined">person</span>
                    <span className="text-sm">Me</span>
                </Link>
            </div>
        </div>
    );
};

export default Navigation;
