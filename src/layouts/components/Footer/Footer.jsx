import { useState } from 'react';
import AnimateHeight from 'react-animate-height';
import { Link } from 'react-router-dom';
import { menuFooter, showrooms } from '~/assets/datas';
import Newsletter from '../Newsletter';

const Footer = () => {
    const [current, setCurrent] = useState(-1);

    const handleShow = index => {
        if (current === index) {
            setCurrent(-1);
        } else {
            setCurrent(index);
        }
    };

    return (
        <footer className="mb-[90px]">
            <div className="my-container">
                {/* Newsletter */}
                <Newsletter />

                {/* Menu footer */}
                <div className="my-10 md:grid md:grid-cols-4">
                    {menuFooter.map((item, index) => (
                        <div key={index} className="my-4">
                            <h3
                                className={`uppercase relative text-xs font-poppins flex items-center justify-between ${
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
                            <AnimateHeight
                                height={current === index ? 28 * item.list.length + 4 * (item.list.length * 2) : 0}
                            >
                                <div className="flex flex-col pl-4 border-l border-primary h-max">
                                    {item.list.map((listItem, index) => (
                                        <Link key={index} to={'/'} className="py-1 my-1 text-sm">
                                            {listItem.titleen}
                                        </Link>
                                    ))}
                                </div>
                            </AnimateHeight>
                        </div>
                    ))}
                </div>

                {/* Showrooms */}
                <div>
                    {showrooms.map((item, index) => (
                        <div key={index} className="text-center text-black my-8">
                            <h3 className="uppercase text-sm font-semibold">{item.nameen}</h3>
                            <p className="text-sm my-1">Address: {item.addressen}</p>
                            <p className="text-sm">Hotline: {item.hotline}</p>
                        </div>
                    ))}
                </div>

                {/* Copyright */}
                <p className="text-center font-bold font-poppins text-red-500">Clone Dyoss.com to learning React</p>
            </div>
        </footer>
    );
};

export default Footer;
