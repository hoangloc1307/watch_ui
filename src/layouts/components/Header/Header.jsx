import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Menu from '../Menu';
import Cart from '~/components/Cart';
import { hideAllPopUp, toggleNavigation, togglePopUp } from '~/app/slices/popUp.slice';
import { flagEN, flagVI, logoWhite } from '~/assets/images';
import Search from '~/components/Search';
import { menu } from '~/assets/datas';

const Header = () => {
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
        <header className="">
            {/* Menu mobile */}
            {/* Topbar */}
            <nav
                ref={refTopBar}
                className={`bg-black text-white ${
                    pathname === '/' ? 'absolute top-0 left-0 right-0 z-10 bg-opacity-50' : 'relative'
                } lg:hidden`}
            >
                <div className="my-container flex justify-between items-center relative">
                    <span
                        className="material-symbols-outlined pr-2 pt-2 pb-2 active:text-primary"
                        onClick={() => dispatch(togglePopUp({ popUp: 'menu', showMenu }))}
                    >
                        menu
                    </span>
                    <Link to="/">
                        <img src={logoWhite} alt="logo" className="w-[100px]" />
                    </Link>
                    <Search />
                </div>
            </nav>
            {/* End Topbar */}

            {/* Bottom navigation */}
            <nav
                className={`fixed left-0 w-full bottom-0 z-20 shadow-[0_0_2px_0_#ccc] overflow-hidden ${
                    showNavigation ? 'duration-500 h-my-navigation-height' : 'h-0'
                } bg-white lg:hidden`}
            >
                <div className="flex items-center justify-evenly w-full max-w-screen-sm h-my-navigation-height mx-auto ">
                    <Link to="/" className={`p-1 flex flex-col items-center ${pathname === '/' && 'text-primary'}`}>
                        <span className={`${pathname === '/' && 'fill'} material-symbols-outlined`}>home</span>
                        <span className="text-sm">Home</span>
                    </Link>
                    <Menu />
                    <Cart />
                    <Link to={false ? '/' : '/login'} className={`p-1 flex flex-col items-center`}>
                        <span className="material-symbols-outlined">person</span>
                        <span className="text-sm">Me</span>
                    </Link>
                </div>
            </nav>
            {/* End Bottom navigation */}
            {/* End Menu mobile */}

            {/* Menu PC */}
            <nav className="hidden bg-black bg-opacity-70 relative z-10 lg:block">
                {/* Top bar */}
                <div className="my-container flex flex-row-reverse items-center justify-between text-white gap-8 py-2">
                    <div className="flex gap-3">
                        <Link to={'/'} className="opacity-50 hover:opacity-100 uppercase">
                            Login
                        </Link>
                        <Link to={'/'} className="opacity-50 hover:opacity-100 uppercase">
                            Register
                        </Link>
                    </div>
                    <div className="flex gap-2">
                        <img src={flagVI} alt="VI" className="w-8 h-8 object-cover cursor-pointer p-1 hover:bg-white" />
                        <img src={flagEN} alt="EN" className="w-8 h-8 object-cover cursor-pointer p-1 hover:bg-white" />
                    </div>
                </div>
                {/* End Top bar */}

                {/* Middle bar */}
                <div className="my-container relative flex justify-between items-center">
                    <Search />
                    <Link to="/">
                        <img src={logoWhite} alt="Dyoss Logo" className="max-w-[150px]" />
                    </Link>
                    <Cart />
                </div>
                {/* End Middle bar */}

                {/*  */}
                <div className="flex justify-center gap-2 text-white border-t border-white border-opacity-20">
                    {menu.map(item => {
                        if (item.desktop) {
                            return (
                                <Link
                                    key={item.id}
                                    to={item.href}
                                    className={`capitalize px-2 py-3 font-light relative overflow-hidden group ${
                                        pathname === item.href && 'text-primary'
                                    } hover:text-primary`}
                                >
                                    {item.title}
                                    <span
                                        className={`absolute w-full h-0.5 bg-primary bottom-2 duration-500 ease-in-out ${
                                            pathname === item.href ? 'left-0' : '-left-full'
                                        } group-hover:left-0`}
                                    ></span>
                                </Link>
                            );
                        }
                        return null;
                    })}
                </div>
            </nav>
            {/* End Menu PC */}
        </header>
    );
};

export default Header;
