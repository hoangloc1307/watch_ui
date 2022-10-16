import Navigation from '../components/Navigation';

export const MasterLayout = ({ children }) => (
    <>
        <Navigation />
        {children}
    </>
);
