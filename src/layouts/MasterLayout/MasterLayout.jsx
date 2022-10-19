import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';

const MasterLayout = () => (
    <>
        <Navigation />
        <main className="relative">
            <Outlet />
        </main>
    </>
);

export default MasterLayout;
