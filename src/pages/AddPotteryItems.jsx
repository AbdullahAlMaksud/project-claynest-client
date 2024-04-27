import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const AddPotteryItems = () => {

    const {user} = useContext(AuthContext);

    return (
        <div className='w-11/12 mx-auto container mb-10 -z-30'>
            <section className=" p-6 mx-auto bg-terra-cotta-400 rounded-b-md shadow-md dark:bg-gray-800">
                <h2 className="text-lg text-center font-semibold text-gray-700 capitalize dark:text-white">Add Ceramic & Pottery Item</h2>

                <form>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-gray-700 dark:text-gray-200 font-semibold">Product Name</label>
                            <input
                                type="text" placeholder="Enter products Name"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200 font-semibold">Short Description</label>
                            <input
                                type="text" placeholder='Enter short description'
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200 font-semibold">Product Category</label>
                            <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                                <option disabled selected>Pick one</option>
                                <option>Clay-made pottery</option>
                                <option>Stoneware</option>
                                <option>Porcelain</option>
                                <option>Terra Cotta</option>
                                <option>Ceramics & Architectural</option>
                                <option>Home decor pottery</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200 font-semibold">Customization</label>
                            <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                                <option disabled selected>Pick one</option>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200 font-semibold">Processing Time</label>
                            <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                                <option disabled selected>Pick one</option>
                                <option>1 day</option>
                                <option>3 day</option>
                                <option>7 day</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200 font-semibold">Stock Status</label>
                            <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                                <option disabled selected>Pick one</option>
                                <option>In Stock</option>
                                <option>Made to order</option>
                            </select>
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200 font-semibold">Price</label>
                            <input

                                type="text" placeholder="Add products price"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200 font-semibold">Rating</label>
                            <input

                                type="text"  placeholder="Add product rating"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200 font-semibold">User Name</label>
                            <input

                                type="text" placeholder="Add products" value={user.displayName} disabled 
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200 font-semibold">User Email</label>
                            <input

                                type="text" value={user.email} disabled placeholder="Add products"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            />
                        </div>
                        <div className='md:col-span-2'>
                            <label className="text-gray-700 dark:text-gray-200 font-semibold">Product Photo URL</label>
                            <input

                                type="text" placeholder="Add product photo URL"
                                className="block  w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            />
                        </div>
                    </div>

                    <div className="flex justify-end mt-6">
                        <input type="submit" value="Add Products" className="px-8 w-full py-2.5 leading-5 text-white transition-colors duration-300 transform bg-terra-cotta-900 rounded-md hover:bg-terra-cotta-800 focus:outline-none focus:bg-terra-cotta-800 hover:cursor-pointer" />
                    </div>
                </form>
            </section>
        </div>
    );
};

export default AddPotteryItems;