import { useEffect, useState } from 'react';
import AnimateHeight from 'react-animate-height';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Button from '~/components/Button';

export default (function MenuItem({ item }) {
    const { pathname } = useLocation();
    const [showChildren, setShowChildren] = useState(false);

    const show = useSelector(state => state.popup.items.menu);
    console.log('MenuItem.jsx');

    useEffect(() => {
        if (show) {
            setShowChildren(false);
        }
        // eslint-disable-next-line
    }, [pathname]);

    const handleClickMenuItem = callback => {
        if (item.children) {
            setShowChildren(!showChildren);
        } else {
            callback();
        }
    };

    return (
        <div className="relative">
            <Button
                icon={item.icon}
                to={item.to}
                href={item.href}
                fill={pathname === item.to || showChildren}
                className={`flex justify-start w-full p-0 gap-2${
                    showChildren ? ' text-primary' : ''
                } peer hover:text-primary`}
                onClick={() =>
                    handleClickMenuItem(() => {
                        console.log('callback');
                    })
                }
            >
                {item.title}
            </Button>
            {item.children && (
                <span
                    className={`material-symbols-outlined transition-transform duration-500 ease-in-out text-[20px]${
                        showChildren ? ' -rotate-180 text-primary' : ''
                    } absolute top-1.5 right-4 pointer-events-none peer-hover:text-primary`}
                >
                    expand_more
                </span>
            )}
            {item.children && (
                <AnimateHeight
                    className={`border-l border-l-primary pl-2 ml-1.5`}
                    duration={500}
                    height={showChildren ? item.children.length * 32 : 0}
                >
                    {item.children.map(i => (
                        <MenuItem key={i.id} item={i} />
                    ))}
                </AnimateHeight>
            )}
        </div>
    );
});
