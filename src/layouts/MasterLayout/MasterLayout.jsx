import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header';

const MasterLayout = () => (
    <>
        <Header />
        <main className="relative mt-10">
            <Outlet />
        </main>
        <Footer />
    </>
);

export default MasterLayout;
