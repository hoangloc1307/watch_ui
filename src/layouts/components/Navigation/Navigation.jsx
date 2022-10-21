import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Menu from '../../../components/Menu';
import Cart from '../../../components/Cart';
import { hideAllPopUp, toggleNavigation, togglePopUp } from '../../../app/slices/popUp.slice';
import { logoWhite } from '../../../assets/images';
import Search from '../../../components/Search';

const Navigation = () => {
    const { pathname } = useLocation();
    const dispatch = useDispatch();
    const refTopBar = useRef(null);
    const showNavigation = useSelector(state => state.popup.navigation);
    const showMenu = useSelector(state => state.popup.items.menu);

    useEffect(() => {
        dispatch(hideAllPopUp());
        window.scrollTo({ top: 0, left: 0 });
        document.body.style.overflow = 'unset';
        // eslint-disable-next-line
    }, [pathname]);

    useEffect(() => {
        const topBarHeight = refTopBar.current.clientHeight;

        const handleScroll = () => {
            if (window.scrollY >= topBarHeight && !showNavigation) {
                dispatch(toggleNavigation(true));
            }
            if (window.scrollY < topBarHeight && showNavigation) {
                dispatch(toggleNavigation(false));
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
        // eslint-disable-next-line
    }, [showNavigation]);

    return (
        <>
            {/* Topbar */}
            <div
                ref={refTopBar}
                className={`bg-black text-white ${
                    pathname === '/' ? 'bg-opacity-20 absolute top-0 left-0 right-0 z-10' : ''
                }`}
            >
                <div className="my-container flex justify-between items-center py-1">
                    <span
                        className="material-symbols-outlined pr-2 pt-2 pb-2"
                        onClick={() => dispatch(togglePopUp({ popUp: 'menu', showMenu }))}
                    >
                        menu
                    </span>
                    <Link to="/">
                        <img src={logoWhite} alt="logo" className="w-[100px]" />
                    </Link>
                    <Search />
                </div>
            </div>

            {/* Bottom navigation */}
            <div
                className={`fixed left-0 w-full bottom-0 z-10 shadow-[0_0_2px_0_#ccc] overflow-hidden ${
                    showNavigation ? 'duration-500 h-my-navigation-height' : 'h-0'
                } bg-white`}
            >
                <div className="flex items-center justify-evenly w-full max-w-screen-sm h-my-navigation-height mx-auto ">
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
        </>
    );
};

export default Navigation;
