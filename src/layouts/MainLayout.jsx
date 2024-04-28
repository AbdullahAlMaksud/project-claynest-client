import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div className="bg-[url('./bg1.svg')] dark:bg-black">
<Navbar/>
        <Outlet/>
        <Footer/>
        <Toaster />
        </div>
    );
};

export default MainLayout;