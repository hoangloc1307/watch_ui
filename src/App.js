import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MasterLayout from './layouts/MasterLayout';
import { publicRoute, restrictRoute } from './routes';

const App = () => {
    return (
        <>
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
