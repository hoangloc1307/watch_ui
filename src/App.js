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
                    <Route path="/" element={<MasterLayout />}>
                        {/* Public routes */}
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
