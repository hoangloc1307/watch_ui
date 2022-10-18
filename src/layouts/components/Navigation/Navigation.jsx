import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Menu from '../../../components/Menu';
import Cart from '../../../components/Cart';

const Navigation = () => {
    const location = useLocation();
    const [show, setShow] = useState({ menu: false, cart: false, profile: false });

    useEffect(() => {
        setShow({ menu: false, cart: false, profile: false });
    }, [location.pathname]);

    const handleTogglePopUp = (item, showStatus) => {
        if (showStatus) {
            document.body.style.overflow = 'unset';
            setShow({ ...show, [item]: !showStatus });
        } else {
            document.body.style.overflow = 'hidden';
            setShow({ menu: false, cart: false, profile: false, [item]: !showStatus });
        }
    };

    return (
        <div id="navigation" className="fixed left-0 bottom-0 w-full h-my-navigation-height bg-white">
            <div className="flex items-center justify-evenly w-full max-w-screen-sm h-my-navigation-height mx-auto">
                <Link
                    to="/"
                    className={`p-1 flex flex-col items-center ${location.pathname === '/' && 'text-primary'}`}
                >
                    <span className={`${location.pathname === '/' && 'fill'} material-symbols-outlined`}>home</span>
                    <span className="text-sm">Home</span>
                </Link>
                <Menu show={show.menu} onToggleShow={handleTogglePopUp} />
                <Cart show={show.cart} onToggleShow={handleTogglePopUp} />
                <Link to="/" className={`p-1 flex flex-col items-center`}>
                    <span class="material-symbols-outlined">person</span>
                    <span className="text-sm">Profile</span>
                </Link>
            </div>
        </div>
    );
};

export default Navigation;
