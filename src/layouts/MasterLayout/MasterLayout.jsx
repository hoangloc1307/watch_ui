import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';

const MasterLayout = () => (
    <>
        <Navigation />
        <Outlet/>
    </>
);

export default MasterLayout;