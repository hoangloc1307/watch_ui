import { icon_cart_png, icon_home_png, icon_profile_png } from '../../../assets/images';
import Menu from '../Menu';

export const Navigation = () => (
    <div id="navigation" className="fixed left-0 bottom-0 w-full flex justify-center border-t">
        <div className="flex items-center justify-evenly w-full h-my-navigation-height max-w-screen-sm">
            <a href="/">
                <img src={icon_home_png} alt="Home" className="h-[40px]" />
            </a>
            <Menu />
            <a href="/">
                <img src={icon_cart_png} alt="Cart" className="h-[40px]" />
            </a>
            <a href="/">
                <img src={icon_profile_png} alt="Profile" className="h-[40px]" />
            </a>
        </div>
    </div>
);
