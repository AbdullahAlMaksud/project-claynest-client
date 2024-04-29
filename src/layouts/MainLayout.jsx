import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div className="bg-ceramic-bg dark:bg-slate-900">
            {/* [url('./bg1.svg')] */}
<Navbar/>
        <Outlet/>
        <Footer/>
        <Toaster />
        </div>
    );
};

export default MainLayout;