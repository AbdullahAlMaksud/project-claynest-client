import { useContext, useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { HiHome } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    const PLACES = ['top']
    

    // const [theme, setTheme] = useState('light');

    // const handleTheme = (e) => {
    //     if (e.target.checked) {
    //         setTheme('dark')
    //     }
    //     else {
    //         setTheme('light')
    //     }
    // }

    // useEffect(() => {
    //     localStorage.setItem('theme', theme)
    //     const currentTheme = localStorage.getItem('theme')
    //     document.querySelector('html').setAttribute('data-theme', currentTheme)
    // }, [theme])

    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => console.log(error))
    }


    const mainMenu = <>
        <NavLink to={'/'} className={({ isActive }) => isActive ? ' border-b-2 border-sage-green-700 text-sage-green-700' : 'border-b-2 border-transparent hover:border-b-2 hover:border-sage-green-700 hover:text-sage-green-700'}>Home</NavLink>
        <NavLink to={'/allItems'} className={({ isActive }) => isActive ? ' border-b-2 border-sage-green-700 text-sage-green-700' : 'border-b-2 border-transparent hover:border-b-2 hover:border-sage-green-700 hover:text-sage-green-700'}>All Ceramic & Pottery Items</NavLink>
        <NavLink to={'/addItem'} className={({ isActive }) => isActive ? ' border-b-2 border-sage-green-700 text-sage-green-700' : 'border-b-2 border-transparent hover:border-b-2 hover:border-sage-green-700 hover:text-sage-green-700'}>Add Ceramic & Pottery Item</NavLink>
        <NavLink to={'/myItems'} className={({ isActive }) => isActive ? ' border-b-2 border-sage-green-700 text-sage-green-700' : 'border-b-2 border-transparent hover:border-b-2 hover:border-sage-green-700 hover:text-sage-green-700'}>My Ceramic & Pottery List</NavLink>
    </>

    const mainMenuPhone = <>
        <NavLink to={'/'} className={'px-5 py-1 rounded-lg hover:bg-sage-green-700 hover:text-text-gray-50'}>Home</NavLink>
        <NavLink to={'/allItems'} className={'px-5 py-1 rounded-lg hover:bg-sage-green-700 hover:text-text-gray-50'}>All Ceramic & Pottery Items</NavLink>
        <NavLink to={'/addItem'} className={'px-5 py-1 rounded-lg hover:bg-sage-green-700 hover:text-text-gray-50'}>Add Ceramic & Pottery Item</NavLink>
        <NavLink to={`/myItems`} className={'px-5 py-1 rounded-lg hover:bg-sage-green-700 hover:text-text-gray-50'}>My Ceramic & Pottery List</NavLink>

        {
            user ? <div className="flex pr-5 gap-2" >
                <div className="relative hover:cursor-pointer" data-tooltip-id="profileName" id="clickable" >
                    <img
                        className="object-cover w-12 h-12 rounded-full ring-2 ring-gray-300 dark:ring-gray-600"
                        src={user.photoURL} alt=""
                    />
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-1 ring-white"></span>
                </div>
                <Tooltip anchorSelect="#clickable" clickable place={PLACES[0]} className="flex flex-col justify-center">
                    <p>{user.displayName}</p>
                    <button onClick={handleLogOut} className="mt-2 px-5 py-1 border-2 bg-red-500 text-white border-red-500 hover:border-red-800 rounded-md font-semibold hover:bg-red-800 hover:text-text-gray-50">LogOut</button>
                </Tooltip>
            </div>
                : <div className="flex gap-3 px-5">
                    <Link to={'/login'}>
                        <button className="px-5 py-1 border-2 border-sage-green-800 rounded-md text-sage-green-800 font-semibold hover:bg-sage-green-800 hover:text-text-gray-50">Login</button>
                    </Link>
                    <Link to={'/register'}>
                        <button className="px-5 py-1 border-2 border-sage-green-800 rounded-md text-sage-green-800 font-semibold hover:bg-sage-green-800 hover:text-text-gray-50">Register</button>
                    </Link>
                </div>
        }


    </>

    return (
        <div className="min-h-10 bg-transparent hover:lg:bg-white dark:hover:lg:bg-black  shadow-md z-50">
            <div className="w-11/12 container mx-auto py-3 lg:py-7 grid grid-cols-5">
                <div className="col-span-1 flex items-end justify-start">
                    <NavLink to={'/'}><button><HiHome className="text-2xl lg:text-3xl" /></button></NavLink>
                </div>

                <div className="col-span-3 flex justify-center items-center gap-3">
                    <Link to={'/'}>
                        <h2 className="text-sage-green-700 text-2xl lg:text-4xl font-light hover:cursor-pointer">ClayNest</h2>
                    </Link>
                </div>

                {
                    user ?
                        <div className="hidden lg:flex justify-end gap-2" >

                            {/* <label className="cursor-pointer grid place-items-center">
                                <input onChange={handleTheme} type="checkbox" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                                <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                                <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                            </label> */}

                            <div className="relative hover:cursor-pointer" data-tooltip-id="profileName" id="clickable" >
                                <img
                                    className="object-cover w-12 h-12 rounded-full ring-2 ring-gray-300 dark:ring-gray-600"
                                    src={user.photoURL} alt=""
                                />
                                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-1 ring-white"></span>
                            </div>
                            <Tooltip anchorSelect="#clickable" clickable place={PLACES[0]} className="flex flex-col justify-center">
                                <p>{user.displayName}</p>
                                <button onClick={handleLogOut} className="mt-2 px-5 py-1 border-2 bg-red-500 text-white border-red-500 hover:border-red-800 rounded-md font-semibold hover:bg-red-800 hover:text-text-gray-50">LogOut</button>
                            </Tooltip>
                        </div>
                        :
                        <div className="hidden lg:flex justify-end gap-2">
                            <Link to={'/login'}>
                                <button className="px-5 py-1 border-2 border-sage-green-800 rounded-md text-sage-green-800 font-semibold hover:bg-sage-green-800 hover:text-text-gray-50">Login</button>
                            </Link>
                            <Link to={'/register'}>
                                <button className="px-5 py-1 border-2 border-sage-green-800 rounded-md text-sage-green-800 font-semibold hover:bg-sage-green-800 hover:text-text-gray-50">Register</button>
                            </Link>
                        </div>
                }
                <div className="lg:hidden flex justify-end">
                    <button onClick={() => setOpen(!open)}>
                        {
                            open === true ? <AiOutlineClose className="text-2xl lg:text-3xl ease-out duration-1000"> </AiOutlineClose> : <AiOutlineMenu className="text-2xl lg:text-3xl ease-out duration-1000"></AiOutlineMenu >
                        }
                    </button>
                    <div className={`md:flex duration-1000 gap-5 absolute z-40 bg-ceramic-bg dark:bg-slate-950 ${open ? 'right-0 top-14' : 'right-0 -top-96'} py-4 px-4 rounded-b-lg shadow-md`}>
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