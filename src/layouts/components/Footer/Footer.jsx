import { useState } from 'react';
import AnimateHeight from 'react-animate-height';
import { Link } from 'react-router-dom';
import { menuFooter, showrooms } from '~/assets/datas';
import Newsletter from '../Newsletter';

export default function Footer() {
    const [current, setCurrent] = useState(-1);

    const handleShow = index => {
        if (current === index) {
            setCurrent(-1);
        } else {
            setCurrent(index);
        }
    };

    return (
        <footer className="mb-my-navigation-height pt-10 bg-[#3a3b3c] text-white lg:mb-0">
            <div className="my-container">
                {/* Newsletter */}
                <Newsletter />

                {/* Menu footer mobile */}
                <div className="my-10 md:hidden flex flex-col gap-3">
                    {menuFooter.map((item, index) => (
                        <div key={index} className="py-2">
                            <h3
                                className={`uppercase relative text-xs flex items-center justify-between ${
                                    current === index ? 'text-primary' : '[transition:color_0s_0.4s]'
                                }`}
                                onClick={() => handleShow(index)}
                            >
                                {item.titleen}
                                <span
                                    className={`material-symbols-outlined transition-transform duration-500 ease-in-out ${
                                        current === index && '-rotate-180'
                                    }`}
                                >
                                    expand_more
                                </span>
                            </h3>
                            <AnimateHeight height={current === index ? 40 * item.list.length : 0}>
                                <div className="flex flex-col pl-4 border-l border-primary h-max">
                                    {item.list.map((listItem, index) => (
                                        <Link key={index} to={'/'} className="py-3 text-xs">
                                            {listItem.titleen}
                                        </Link>
                                    ))}
                                </div>
                            </AnimateHeight>
                        </div>
                    ))}
                </div>

                {/* Menu footer tablet */}
                <div className="hidden my-10 md:grid md:grid-cols-4">
                    {menuFooter.map((item, index) => (
                        <div key={index} className="text-center px-4">
                            <h3 className={`uppercase text-sm font-medium mb-4`}>{item.titleen}</h3>
                            <div>
                                {item.list.map((listItem, index) => (
                                    <Link
                                        key={index}
                                        to={'/'}
                                        className="block py-2 text-sm hover:text-primary hover:underline"
                                    >
                                        {listItem.titleen}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Showrooms */}
                <div>
                    {showrooms.map((item, index) => (
                        <div key={index} className="text-center my-8">
                            <h3 className="uppercase text-sm font-medium md:text-sm">{item.nameen}</h3>
                            <p className="text-xs my-1 md:text-sm">
                                <span className="material-symbols-outlined fill text-xs mr-1 align-middle">home</span>
                                <span>Address: {item.addressen}</span>
                            </p>
                            <p className="text-xs my-1 md:text-sm">
                                <span className="material-symbols-outlined fill text-xs mr-1 align-middle">phone</span>
                                <a href={`tel:${item.hotline}`}>Hotline: {item.hotline}</a>
                            </p>
                        </div>
                    ))}
                </div>

                {/* Copyright */}
                <p className="text-center flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-sm text-red-500">warning</span>
                    <span className="text-sm text-yellow-500">Clone Dyoss.com to learning React</span>
                    <span className="material-symbols-outlined text-sm text-red-500">warning</span>
                </p>
            </div>
        </footer>
    );
}
