import { memo, useEffect, useState } from 'react';
import AnimateHeight from 'react-animate-height';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Button from '~/components/Button';

const MenuItem = ({ item }) => {
    const { pathname } = useLocation();
    const [showChildren, setShowChildren] = useState(false);

    const show = useSelector(state => state.popup.items.menu);

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
                label={item.title}
                to={item.to}
                href={item.href}
                fill={pathname === item.to || showChildren}
                className={`flex justify-start w-full pl-0 gap-2 text-base font-nunito${
                    showChildren ? ' text-primary' : ''
                } peer hover:text-primary`}
                onClick={() =>
                    handleClickMenuItem(() => {
                        console.log('callback');
                    })
                }
            />
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
                    className={`ml-1.5 pl-1.5 border-l border-l-primary`}
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
};

export default memo(MenuItem);
