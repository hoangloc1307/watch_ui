import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';

const MasterLayout = () => (
    <>
        <Navigation />
        <div className="bg-blue-300 h-10">TOPBAR</div>
        <main className="min-h-screen bg-red-300">
            <Outlet />
        </main>
    </>
);

export default MasterLayout;
