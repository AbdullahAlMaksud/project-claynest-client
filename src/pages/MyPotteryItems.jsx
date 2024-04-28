import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { FaStar } from 'react-icons/fa6';

const MyPotteryItems = () => {
    const { user } = useContext(AuthContext);
    const [item, setItem] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/craftItemsByEmail/${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                setItem(data);
                console.log(data);
            });
    }, [user])
    console.log(user.email)
    return (
        <div className='w-11/12 container mx-auto my-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

                {
                    item.map((product, idx) =>
                        <div key={idx} className="flex flex-col overflow-hidden bg-sage-green-100 rounded-lg shadow-lg dark:bg-gray-800">
                            <div className="w-full min-h-60 flex justify-center items-center">
                                <img className='max-h-60 object-contain' src={product.imageURL} alt="" />
                            </div>
                            <div className="w-full p-4 md:p-7">
                                <h1 className="text-xl font-bold text-gray-800 dark:text-white">{product.product_name}</h1>
                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{product.short_description}</p>
                                <div className="flex mt-2 item-center">
                                    <p className='flex items-center'>Rating: <span>{product.rating}</span> <FaStar/></p>
                                </div>
                                <div className="flex justify-between mt-3 item-center">
                                    <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">${product.price}</h1>
                                    
                                </div>
                                <div className='flex justify-between mt-5'>
                                <button className="px-2 w-2/5 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-sage-green-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">Update</button>
                                <button className="px-2 w-2/5 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-amber-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">Detele</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default MyPotteryItems;