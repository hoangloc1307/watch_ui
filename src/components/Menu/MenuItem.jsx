import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

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

    const props = {};
    let Tag = 'div';

    if (item.href) {
        props.to = item.href;
        Tag = Link;
    }

    const handleClickMenuItem = callback => {
        if (Tag === 'div' && item.children) {
            setShowChildren(!showChildren);
        } else if (Tag === 'div') {
            callback();
        }
    };

    return (
        <div>
            <Tag
                {...props}
                className={`flex items-center gap-2 w-full p-2 my-2 relative rounded-l-full cursor-pointer ${
                    pathname === item.href && 'text-primary'
                } ${showChildren && 'text-primary'} hover:text-primary`}
                onClick={() =>
                    handleClickMenuItem(() => {
                        console.log('callback');
                    })
                }
            >
                <span className="material-symbols-outlined">{item.icon}</span>
                <span className={`text-sm`}>{item.title}</span>
                {Tag === 'div' && item.children && (
                    <span
                        className={`material-symbols-outlined transition-transform duration-500 ease-in-out ${
                            showChildren && '-rotate-180'
                        } absolute top-2 right-2`}
                    >
                        expand_more
                    </span>
                )}
            </Tag>

            {/* Children */}
            {Tag === 'div' && item.children && (
                <div
                    className={`ml-5 overflow-hidden transition-height duration-500 ease-in-out ${
                        showChildren ? `h-[${item.children.length * 40 + (item.children.length + 1) * 8}px]` : 'h-0'
                    }`}
                >
                    {item.children.map(i => (
                        <MenuItem key={i.id} item={i} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default MenuItem;
