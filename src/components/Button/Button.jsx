import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

const Button = ({
    children,
    icon,
    background,
    outline,
    fill,
    vertical,
    to,
    href,
    className,
    onClick,
    ...passProps
}) => {
    let Tag = 'button';
    const props = { onClick, ...passProps };
    let styleButton = '';
    let styleIcon = '';

    if (to) {
        Tag = Link;
        props.to = to;
    } else if (href) {
        Tag = 'a';
        props.href = href;
    }

    // Style
    if (children && !icon) {
        styleButton += 'px-4 text-sm h-8';
    } else if (!children && icon) {
        styleButton += 'inline-flex justify-center items-center w-10 h-10 hover:text-primary';
        styleIcon += 'text-[24px]';
    } else if (children && icon) {
        styleButton += 'inline-flex justify-center items-center px-4 text-sm h-8 gap-1';
        styleIcon += 'text-[16px]';
    }

    if (outline) {
        styleButton += ' border border-primary text-primary hover:bg-primary hover:text-white';
    }
    if (background) {
        styleButton += ' bg-primary text-white hover:bg-primary-active';
    }
    if (vertical) {
        styleButton += ' flex-col p-0 text-xs h-max';
        styleIcon += ' text-[24px]';
    }
    if (fill) {
        styleButton += ' text-primary';
        styleIcon += ' fill';
    }

    styleButton += ` font-poppins font-normal rounded-lg`;
    styleIcon += ' material-symbols-outlined';

    return (
        <Tag {...props} className={`${twMerge(styleButton, className ?? '')}`}>
            {children && !icon && <>{children}</>}
            {!children && icon && <span className={twMerge(styleIcon)}>{icon}</span>}
            {children && icon && (
                <>
                    <span className={twMerge(styleIcon)}>{icon}</span>
                    <span>{children}</span>
                </>
            )}
        </Tag>
    );
};
export default memo(Button);
