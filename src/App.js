import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { logoBlack } from './assets/images';

import MasterLayout from './layouts/MasterLayout';
import { publicRoute, restrictRoute } from './routes';

export default function App() {
    const [show, setShow] = useState(true);
    const { pathname } = useLocation();

    useEffect(() => {
        const onPageLoad = () => {
            setShow(false);
        };

        // Check if the page has already loaded
        if (document.readyState === 'complete') {
            onPageLoad();
        } else {
            window.addEventListener('load', onPageLoad);
            // Remove the event listener when component unmounts
            return () => window.removeEventListener('load', onPageLoad);
        }
    }, [pathname]);

    return (
        <>
            {show && (
                <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
                    <img src={logoBlack} alt="Logo" className="max-w-[150px]" />
                </div>
            )}
            <Routes>
                {/* Restrict routes */}
                {restrictRoute.map((route, index) => {
                    const Page = route.component;
                    return <Route key={index} path={route.path} element={<Page />} />;
                })}
                <Route path="/" element={<MasterLayout />}>
                    {/* Public routes */}
                    {publicRoute.map((route, index) => {
                        const Page = route.component;
                        return <Route key={index} path={route.path} element={<Page />} />;
                    })}
                </Route>
            </Routes>
        </>
    );
}
