import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { HiHome } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const mainMenu = <>
        <NavLink to={'/'} className={({ isActive }) => isActive ? ' border-b-2 border-sage-green-700 text-sage-green-700' : 'border-b-2 border-transparent hover:border-b-2 hover:border-sage-green-700 hover:text-sage-green-700'}>Home</NavLink>
        <NavLink to={'/allItems'} className={({ isActive }) => isActive ? ' border-b-2 border-sage-green-700 text-sage-green-700' : 'border-b-2 border-transparent hover:border-b-2 hover:border-sage-green-700 hover:text-sage-green-700'}>All Ceramic & Pottery Items</NavLink>
        <NavLink to={'/addItem'} className={({ isActive }) => isActive ? ' border-b-2 border-sage-green-700 text-sage-green-700' : 'border-b-2 border-transparent hover:border-b-2 hover:border-sage-green-700 hover:text-sage-green-700'}>Add Ceramic & Pottery Item</NavLink>
        <NavLink to={'/myItems'} className={({ isActive }) => isActive ? ' border-b-2 border-sage-green-700 text-sage-green-700' : 'border-b-2 border-transparent hover:border-b-2 hover:border-sage-green-700 hover:text-sage-green-700'}>My Ceramic & Pottery List</NavLink>
    </>

    const mainMenuPhone = <>
        <NavLink to={'/'} className={'px-5 py-1 rounded-lg hover:bg-sage-green-700 hover:text-text-gray-50'}>Home</NavLink>
        <NavLink to={''} className={'px-5 py-1 rounded-lg hover:bg-sage-green-700 hover:text-text-gray-50'}>All Ceramic & Pottery Items</NavLink>
        <NavLink to={''} className={'px-5 py-1 rounded-lg hover:bg-sage-green-700 hover:text-text-gray-50'}>Add Ceramic & Pottery Item</NavLink>
        <NavLink to={''} className={'px-5 py-1 rounded-lg hover:bg-sage-green-700 hover:text-text-gray-50'}>My Ceramic & Pottery List</NavLink>
        <div className="flex gap-3 px-5">
            <Link to={'/login'}>
                <button className="px-5 py-1 border-2 border-sage-green-800 rounded-md text-sage-green-800 font-semibold hover:bg-sage-green-800 hover:text-text-gray-50">Login</button>
            </Link>
            <Link to={'/register'}>
                <button className="px-5 py-1 border-2 border-sage-green-800 rounded-md text-sage-green-800 font-semibold hover:bg-sage-green-800 hover:text-text-gray-50">Register</button>
            </Link>
        </div>
    </>

    return (
        <div className="min-h-10 bg-transparent hover:lg:bg-white  shadow-md">
            <div className="w-11/12 container mx-auto py-3 lg:py-5 lg:pb-7 grid grid-cols-5">
                <div className="col-span-1 flex items-end justify-start">
                    <NavLink to={'/'}><button><HiHome className="text-2xl lg:text-3xl" /></button></NavLink>
                </div>

                <div className="col-span-3 flex justify-center items-center gap-3">
                    <h2 className="text-sage-green-700 text-2xl lg:text-4xl font-light">ClayNest</h2>
                </div>

                <div className="hidden lg:flex gap-2">
                    <Link to={'/login'}>
                        <button className="px-5 py-1 border-2 border-sage-green-800 rounded-md text-sage-green-800 font-semibold hover:bg-sage-green-800 hover:text-text-gray-50">Login</button>
                    </Link>
                    <Link to={'/register'}>
                        <button className="px-5 py-1 border-2 border-sage-green-800 rounded-md text-sage-green-800 font-semibold hover:bg-sage-green-800 hover:text-text-gray-50">Register</button>
                    </Link>
                </div>
                <div className="lg:hidden flex justify-end">
                    <button onClick={() => setOpen(!open)}>
                        {
                            open === true ? <AiOutlineClose className="text-2xl lg:text-3xl ease-out duration-1000"> </AiOutlineClose> : <AiOutlineMenu className="text-2xl lg:text-3xl ease-out duration-1000"></AiOutlineMenu >
                        }
                    </button>
                    <div className={`md:flex duration-1000 gap-5 absolute bg-ceramic-bg ${open ? 'right-0 top-14' : 'right-0 -top-96'} py-4 px-4 rounded-b-lg shadow-md`}>
                        <ul className="flex flex-col justify-center items-end gap-5 pb-3">
                            {
                                mainMenuPhone
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className="hidden lg:flex justify-center">
                <ul className="flex justify-center gap-5 pb-3">
                    {
                        mainMenu
                    }
                </ul>
            </div>
        </div>

    );
};

export default Navbar;