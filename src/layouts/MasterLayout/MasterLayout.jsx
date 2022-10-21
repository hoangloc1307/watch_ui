import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';

const MasterLayout = () => (
    <>
        <Navigation />
        <main className="relative mb-my-navigation-height min-h-screen">
            <Outlet />
        </main>
    </>
);

export default MasterLayout;
