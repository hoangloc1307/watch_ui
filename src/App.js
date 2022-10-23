import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { logoBlack } from './assets/images';

import MasterLayout from './layouts/MasterLayout';
import { publicRoute, restrictRoute } from './routes';

const App = () => {
    const [loaded, setLoaded] = useState(false);

    window.onload = () => {
        setLoaded(true);
        alert('ok');
    };

    return (
        <>
            {loaded === false && (
                <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
                    <img src={logoBlack} alt="Logo" className="max-w-[150px]" />
                </div>
            )}
            <BrowserRouter>
                <Routes>
                    {/* Restrict routes */}
                    {restrictRoute.map((route, index) => {
                        const Page = route.component;
                        return <Route key={index} path={route.path} element={<Page />} />;
                    })}
                    {/* Public routes */}
                    <Route path="/" element={<MasterLayout />}>
                        {publicRoute.map((route, index) => {
                            const Page = route.component;
                            return <Route key={index} path={route.path} element={<Page />} />;
                        })}
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
