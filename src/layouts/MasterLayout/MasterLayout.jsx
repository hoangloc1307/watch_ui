import { Outlet } from 'react-router-dom';
import Cart from '~/components/Cart';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header';
import Menu from '../components/Menu';

const MasterLayout = () => (
    <>
        <Header />
        <main className="relative">
            <Outlet />
        </main>
        <Footer />
        <Cart />
        <Menu />
    </>
);

export default MasterLayout;
