import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Menu from '../Menu';
import Cart from '~/components/Cart';
import { hideAllPopUp, toggleNavigation, togglePopUp } from '~/app/slices/popUp.slice';
import { flagEN, flagVI, logoWhite } from '~/assets/images';
import Search from '~/components/Search';
import { menu } from '~/assets/datas';
import Button from '~/components/Button';

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
                    <Button icon="menu" onClick={() => dispatch(togglePopUp({ popUp: 'menu', showMenu }))} />
                    <Link to="/">
                        <img src={logoWhite} alt="logo" className="w-[80px]" />
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
                    <Button icon="home" label="Home" to="/" vertical fill={pathname === '/'} />
                    <Menu />
                    <Cart />
                    <Button icon="person" label="Me" to={false ? '/' : '/login'} vertical />
                </div>
            </nav>
            {/* End Bottom navigation */}
            {/* End Menu mobile */}

            {/* Menu PC */}
            <nav className="hidden bg-black bg-opacity-70 relative z-10 lg:block">
                {/* Top bar */}
                <div className="my-container flex items-center justify-between text-white">
                    <div className="flex">
                        <Button
                            label={
                                <img
                                    src={flagEN}
                                    alt="EN"
                                    className="w-6 h-6 object-cover border-2 border-transparent rounded-full hover:border-primary"
                                />
                            }
                            className="px-2"
                        />
                        <Button
                            label={
                                <img
                                    src={flagVI}
                                    alt="VI"
                                    className="w-6 h-6 object-cover border-2 border-transparent rounded-full hover:border-primary"
                                />
                            }
                            className="px-2"
                        />
                    </div>
                    <div className="flex">
                        <Button to="/" label="Login" className="h-max hover:text-primary" />
                        <Button to="/" label="Register" className="h-max hover:text-primary" />
                    </div>
                </div>
                {/* End Top bar */}

                {/* Middle bar */}
                <div className="my-container relative flex justify-between items-center text-white my-2">
                    <Search />
                    <Link to="/">
                        <img src={logoWhite} alt="Dyoss Logo" className="max-w-[100px]" />
                    </Link>
                    <Cart />
                </div>
                {/* End Middle bar */}

                {/*  */}
                <div className="flex justify-center gap-2 text-white border-y border-white border-opacity-20">
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
