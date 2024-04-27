import { useState } from "react";
import { Link } from "react-router-dom";


const Register = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value
        const email = form.email.value
        const photoURL = form.photoURL.value
        const password = form.password.value
        const formData = { name, email, photoURL, password }
        console.log(formData);
    }
    return (
        <div className='w-11/12 container mx-auto my-10'>
            <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-full lg:px-10">
                <div className="hidden bg-cover lg:block lg:w-2/5" style={{ backgroundImage: "url('register.svg')", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
                </div>

                <div className="w-full px-6 py-8 md:px-8 lg:pr-20 lg:w-3/5">
                    <div className="flex justify-center mx-auto">
                        <img className="w-auto h-7 sm:h-8" src="favicon.svg" alt="" />
                    </div>
                    <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
                        Welcome to Our Platform!
                    </p>
                    <p className="mt-3 text-lg font-semibold text-center text-sage-green-600 dark:text-gray-200">
                        Registration Form
                    </p>
                    <p className="text-base text-center text-gray-600 dark:text-gray-200">
                        Let’s get you all set up so you can verify your personal account and begin setting up your profile.
                    </p>

                    <form onSubmit={handleFormSubmit} className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                        <div>
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Name</label>
                            <input type="text" name="name" placeholder="Enter your name" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email</label>
                            <input type="email" name="email" placeholder="Enter your email" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Photo URL</label>
                            <input type="text" name="photoURL" placeholder="Enter your PhotoURL" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />


                        </div>

                        <div>
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Password</label>
                            <input type={showPassword ? "text" : "password"} name="password" placeholder="Enter your password" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>



                        <div className=' flex items-center gap-2'>
                            <input checked={showPassword} onChange={handleShowPassword} type="checkbox" name="showPassword" className='checkbox checkbox-sm' id="" /> <span>Show Password</span>
                        </div>

                        <button
                            type="submit"
                            className="flex items-center justify-center md:col-span-2 w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-sage-green-500 rounded-lg hover:bg-sage-green-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                            <span>Sign Up</span>


                        </button>
                    </form>

                    <div className="flex items-center justify-between mt-4">
                        <span className="w-2/5 border-b dark:border-gray-600 md:w-1/4"></span>
                        <Link to={'/login'} className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline">Login</Link>
                        <span className="w-2/5 border-b dark:border-gray-600 md:w-1/4"></span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;