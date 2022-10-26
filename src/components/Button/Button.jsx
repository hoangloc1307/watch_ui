import React from 'react';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

const Button = ({ label, icon, background, outline, fill, vertical, to, href, className, onClick, ...passProps }) => {
    let Tag = 'button';
    const props = { onClick, ...passProps };
    let styleLabel = '';
    let styleIcon = '';

    if (to) {
        Tag = Link;
        props.to = to;
    } else if (href) {
        Tag = 'a';
        props.href = href;
    }

    // Style
    if (label && !icon) {
        styleLabel += 'px-4 text-sm h-8';
    } else if (!label && icon) {
        styleLabel += 'inline-flex justify-center items-center w-10 h-10 hover:text-primary';
        styleIcon += 'text-[24px]';
    } else if (label && icon) {
        styleLabel += 'inline-flex justify-center items-center px-4 text-sm h-8 gap-1';
        styleIcon += 'text-[16px]';
    }

    if (outline) {
        styleLabel += ' border border-primary text-primary hover:bg-primary hover:text-white';
    }
    if (background) {
        styleLabel += ' bg-primary text-white hover:bg-primary-active';
    }
    if (vertical) {
        styleLabel += ' flex-col p-0 text-xs h-max';
        styleIcon += ' text-[24px]';
    }
    if (fill) {
        styleLabel += ' text-primary';
        styleIcon += ' fill';
    }

    styleLabel += ` font-poppins font-normal rounded-lg`;
    styleIcon += ' material-symbols-outlined';

    return (
        <Tag {...props} className={`${twMerge(styleLabel, className ?? '')}`}>
            {label && !icon && <span>{label}</span>}
            {!label && icon && <span className={twMerge(styleIcon)}>{icon}</span>}
            {label && icon && (
                <>
                    <span className={twMerge(styleIcon)}>{icon}</span>
                    <span>{label}</span>
                </>
            )}
        </Tag>
    );
};
export default Button;
