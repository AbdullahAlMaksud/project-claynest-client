import { useContext, useState } from 'react';
import { FaGithub } from 'react-icons/fa6';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { logIn, googleLogIn, gitHubLogIn } = useContext(AuthContext);
    const [success, setSuccess] = useState('')
    const [signupError, setSignupError] = useState('')
    const newLocation = useLocation();
    const navigate = useNavigate();
    console.log('Location From LogIn', newLocation)

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        const formData = { email, password }
        console.log(formData);
        setSuccess('')
        logIn(email, password)
            .then(result => {
                console.log(result.user);
                setSuccess(() => toast.success('Login Successfull'));
                navigate(newLocation?.state ? newLocation.state : '/')
            })
            .catch(error => console.log(error))
    }

    const handleGoogleLogIn = () => {
        googleLogIn()
            .then(result => {
                setSuccess(() => toast.success('Login Successful!'));
                console.log(result.user)
                navigate(newLocation?.state ? newLocation.state : '/');
            })
            .catch(error => {
                console.log(error)
                setSignupError(() => toast.success('Login Failed! Try Again!'));
            }
            )
    }

    const handleGitHubLogIn = () => {
        gitHubLogIn()
            .then(result => {
                console.log(result.user)
                setSuccess(() => toast.success('Login Successful!'));
                navigate(newLocation?.state ? newLocation.state : '/');
            })
            .catch(error => {
                setSignupError(() => toast.success('Login Failed! Try Again!'));
                console.log(error)
            })
    }

    return (
        <div className='w-11/12 container mx-auto my-10'>
            <Helmet>
                <title>
                    Login - ClayNest | Where Every Piece Finds Its Perfect Nest
                </title>
            </Helmet>
            <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-full lg:px-10">
                <div className="hidden bg-cover lg:block lg:w-3/5" style={{ backgroundImage: "url('login.svg')", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
                </div>
                <div className="w-full px-6 py-8 md:px-8 lg:pr-20 lg:w-2/5">
                    <div className="flex justify-center mx-auto">
                        <img className="w-auto h-7 sm:h-8" src="favicon.svg" alt="" />
                    </div>
                    <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
                        Welcome back!
                    </p>
                    <a onClick={handleGoogleLogIn} href="#" className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <div className="px-4 py-2">
                            <svg className="w-6 h-6" viewBox="0 0 40 40">
                                <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                                <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                                <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                                <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                            </svg>
                        </div>
                        <span className="w-5/6 px-4 py-3 font-bold text-center">Login with Google</span>
                    </a>
                    <a onClick={handleGitHubLogIn} href="#" className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <div className="px-4 py-2">
                            <FaGithub className='text-2xl' />
                        </div>
                        <span className="w-5/6 px-4 py-3 font-bold text-center">Login with Github</span>
                    </a>
                    <div className="flex items-center justify-between mt-4">
                        <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
                        <p className="text-xs text-center text-gray-500 uppercase dark:text-gray-400">or login
                            with email</p>
                        <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
                    </div>


                    {/* Login Form */}
                    <form onSubmit={handleLogin}>
                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="LoggingEmailAddress">Email Address</label>
                            <input type="email" name='email' placeholder='Enter your email' className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" />
                        </div>
                        <div className="mt-4">
                            <div className="flex justify-between">
                                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="loggingPassword">Password</label>
                                <a href="#I" className=" hidden text-xs text-gray-500 dark:text-gray-300 hover:underline">Forget Password?</a>
                            </div>
                            <input name='password' placeholder='Enter your password' className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type={showPassword ? "text" : "password"} />
                        </div>
                        <div className='mt-4 flex items-center gap-2'>
                            <input checked={showPassword} onChange={handleShowPassword} type="checkbox" name="showPassword" className='checkbox checkbox-sm' id="" /> <span>Show Password</span>
                        </div>

                        <div className="mt-6">
                            <input type="submit" value="Login" className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-sage-green-800 rounded-lg hover:bg-sage-green-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50 hover:cursor-pointer">
                            </input>
                        </div>
                    </form>
                    <div className="flex items-center justify-between mt-4">
                        <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                        <Link to={'/register'} href="#" className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline">or Sign Up</Link>
                        <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;