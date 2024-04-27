import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <>
        <Navbar/>
        <Outlet/>
        <Footer/>
        <Toaster />
        </>
    );
};

export default MainLayout;