import { Link, useLocation } from 'react-router-dom';

import { icon_cart_png, icon_home_gif, icon_home_png, icon_profile_png } from '../../../assets/images';
import Menu from '../Menu';

const Navigation = () => {
    const location = useLocation();

    return (
        <div id="navigation" className="fixed left-0 bottom-0 w-full flex justify-center bg-[#292929]">
            <div className="flex items-center justify-evenly w-full h-my-navigation-height max-w-screen-sm">
                <Link to="/" className={`p-1 flex flex-col items-center`}>
                    <img
                        src={location.pathname === '/' ? icon_home_gif : icon_home_png}
                        alt="Home"
                        className="h-[30px]"
                    />
                    <span className="text-xs text-white">Home</span>
                </Link>
                <Menu />
                <Link to="/" className={`p-1 flex flex-col items-center`}>
                    <img src={icon_cart_png} alt="Cart" className="h-[30px]" />
                    <span className="text-xs text-white">Cart</span>
                </Link>
                <Link to="/" className={`p-1 flex flex-col items-center`}>
                    <img src={icon_profile_png} alt="Profile" className="h-[30px]" />
                    <span className="text-xs text-white">Profile</span>
                </Link>
            </div>
        </div>
    );
};

export default Navigation;
