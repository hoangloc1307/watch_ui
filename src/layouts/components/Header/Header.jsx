import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { hideAllPopUp, togglePopUp } from '~/app/slices/popUp.slice';
import { flagEN, flagVI, logoWhite } from '~/assets/images';
import Search from '~/components/Search';
import { menu } from '~/assets/datas';
import Button from '~/components/Button';

const Header = () => {
    const { pathname } = useLocation();
    const dispatch = useDispatch();

    const showMenu = useSelector(state => state.popup.items.menu);
    const showCart = useSelector(state => state.popup.items.cart);

    // Scroll top and reset body overflow
    useEffect(() => {
        dispatch(hideAllPopUp());
        window.scrollTo({ top: 0, left: 0 });
        document.body.style.overflow = 'unset';
        // eslint-disable-next-line
    }, [pathname]);

    return (
        <header>
            {/* Menu mobile */}
            {/* Topbar */}
            <nav
                className={`bg-black text-white ${
                    pathname === '/' ? 'absolute top-0 left-0 right-0 z-[1] bg-opacity-50' : 'relative'
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
                className={`fixed left-0 bottom-0 w-full h-my-navigation-height z-[1] bg-white shadow-[0_0_2px_0_#ccc] duration-500 lg:hidden`}
            >
                <div className="flex items-center justify-evenly w-full max-w-screen-sm h-my-navigation-height mx-auto ">
                    <Button icon="home" to="/" vertical fill={pathname === '/'}>
                        Home
                    </Button>
                    <Button
                        icon="menu"
                        vertical
                        fill={showMenu}
                        onClick={() => dispatch(togglePopUp({ popUp: 'menu', show: showMenu }))}
                    >
                        Menu
                    </Button>
                    <Button
                        icon="shopping_cart"
                        vertical
                        fill={showCart}
                        className="relative"
                        onClick={() => dispatch(togglePopUp({ popUp: 'cart', show: showCart }))}
                    >
                        Cart
                        <span className="absolute -top-1 left-full flex justify-center items-center text-[9px] px-[1px] text-white bg-red-400 rounded-md empty:hidden">
                            25
                        </span>
                    </Button>
                    <Button icon="person" to={false ? '/' : '/login'} vertical>
                        Me
                    </Button>
                </div>
            </nav>
            {/* End Bottom navigation */}
            {/* End Menu mobile */}

            {/* Menu PC */}
            <nav
                className={`hidden bg-black ${
                    pathname === '/' ? 'absolute top-0 left-0 right-0 z-[1] bg-opacity-50' : 'relative'
                } lg:block`}
            >
                {/* Top bar */}
                <div className="my-container flex items-center justify-between text-white">
                    <div className="flex">
                        <Button className="px-2">
                            <img
                                src={flagEN}
                                alt="EN"
                                className="w-6 h-6 object-cover border-2 border-transparent rounded-full hover:border-primary"
                            />
                        </Button>
                        <Button className="px-2">
                            <img
                                src={flagVI}
                                alt="VI"
                                className="w-6 h-6 object-cover border-2 border-transparent rounded-full hover:border-primary"
                            />
                        </Button>
                    </div>
                    <div className="flex">
                        <Button to="/" className="h-max hover:text-primary">
                            Login
                        </Button>
                        <Button to="/" className="h-max hover:text-primary">
                            Register
                        </Button>
                    </div>
                </div>
                {/* End Top bar */}

                {/* Middle bar */}
                <div className="my-container relative flex justify-between items-center text-white my-2">
                    <Search />
                    <Link to="/">
                        <img src={logoWhite} alt="Dyoss Logo" className="max-w-[100px]" />
                    </Link>
                    <Button icon="shopping_bag" onClick={() => dispatch(togglePopUp({ popUp: 'cart', showCart }))} />
                </div>
                {/* End Middle bar */}

                {/*  */}
                <div className="flex justify-center gap-2 text-white border-y border-white border-opacity-20">
                    {menu.map(item => {
                        if (item.desktop) {
                            return (
                                <Link
                                    key={item.id}
                                    to={item.to}
                                    className={`capitalize px-2 py-3 font-light relative overflow-hidden group ${
                                        pathname === item.to && 'text-primary'
                                    } hover:text-primary`}
                                >
                                    {item.title}
                                    <span
                                        className={`absolute w-full h-0.5 bg-primary bottom-2 duration-500 ease-in-out ${
                                            pathname === item.to ? 'left-0' : '-left-full'
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
