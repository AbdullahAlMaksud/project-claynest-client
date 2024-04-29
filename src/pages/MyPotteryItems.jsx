import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { FaStar } from 'react-icons/fa6';
import { IoIosArrowDown } from 'react-icons/io';
import Swal from 'sweetalert2';
import { FcViewDetails } from 'react-icons/fc';

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

    const handleDeleteData = (_id) => {
        console.log(_id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#8c5729",
            cancelButtonColor: "4f7550",
            confirmButtonText: "Yes, delete it!"
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/craftItems/${_id}`, {
                        method: 'DELETE',
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if (data.deletedCount > 0) {
                                Swal.fire({
                                    title: "Deleted",
                                    text: "Selected Data has been Deleted",
                                    icon: "success"
                                });
                                const restOfData = item.filter(newItem => newItem._id !== _id)
                                setItem(restOfData);

                            }
                        })
                }
            });
    }

    //                         Swal.fire({
    //                             title: "Deleted!",
    //         text: "Your coffee has been deleted.",
    //                             icon: "success"
    //                         });
    // const remaining = coffees.filter(cof => cof._id !== _id)
    //                         setCoffees(remaining);
    //                     }
    //                 })
    //         }
    //     });

    // }


    return (
        <div className='w-11/12 container mx-auto my-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {/* Filter Button */}
                <div className='lg:col-span-3 md:col-span-2 mb-3'>
                    <div className="flex justify-center mt-5">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn bg-terra-cotta text-lg font-medium hover:bg-terra-cotta-500 text-white w-60">Filter <IoIosArrowDown></IoIosArrowDown></div>
                            <div className="flex justify-center">
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-gray-100 dark:bg-white rounded-b-lg text-center  w-full  ">
                                    <li><Link className="hover:bg-gray-600 hover:rounded-lg hover:text-white py-1 text-base">Clay-made pottery</Link>
                                    </li>
                                    <li><Link className="hover:bg-gray-600 hover:rounded-lg hover:text-white py-1 text-base">Stoneware</Link>
                                    </li>
                                    <li><Link className="hover:bg-gray-600 hover:rounded-lg hover:text-white py-1 text-base">Porcelain</Link></li>
                                    <li><Link className="hover:bg-gray-600 hover:rounded-lg hover:text-white py-1 text-base">Terra Cotta</Link></li>

                                    <li><Link className="hover:bg-gray-600 hover:rounded-lg hover:text-white py-1 text-base">Ceramics & Architectural</Link></li>

                                    <li><Link className="hover:bg-gray-600 hover:rounded-lg hover:text-white py-1 text-base">Home decor pottery</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {
                    item.map((product, idx) =>


                        <div key={idx}>
                            <section className="">
                                <div className="rounded-xl bg-white dark:bg-white/5 p-5 shadow-lg hover:shadow-xl">
                                    <div href="#">
                                        <div className="relative flex items-end justify-center h-40 lg:h-52 overflow-hidden rounded-xl ">
                                            <img src={product.imageURL} className='w-full h-52 rounded-2xl object-cover mx-auto' alt="Product Photo" />
                                            <div className="absolute bottom-3 left-3 inline-flex items-start rounded-lg bg-white dark:bg-sage-green-700 p-2 shadow-md">
                                                <FaStar className="text-yellow-600 dark:text-yellow-400" />
                                                <span className="text-slate-400 ml-1 text-sm dark:text-gray-200">{product.rating}.0</span>
                                            </div>
                                        </div>

                                        <div className="mt-1 p-2">
                                            <h2 className="text-slate-700 text-xl dark:text-white">{product.product_name}</h2>
                                            <p className="text-slate-400 mt-1 truncate">{product.short_description}</p>

                                            <div className="mt-3 flex items-end justify-between">
                                                <p>
                                                    <span className="text-lg font-bold text-blue-500 dark:text-blue-500">${product.price}</span>
                                                    <span className="text-slate-400 text-sm"> only!</span>
                                                </p>

                                                <Link to={`/itemDetails/${product._id}`} className="group inline-flex gap-2 rounded-xl bg-blue-100 dark:bg-blue-900 px-4 py-2 hover:bg-blue-200 dark:hover:bg-blue-800">
                                                    <FcViewDetails className="text-2xl" />
                                                    <span className="font-medium font-titillium text-base text-blue-800 dark:text-blue-200">Details</span>
                                                </Link>
                                            </div>

                                            <div className='flex justify-between mt-5'>
                                                <Link to={`/updateItem/${product._id}`} className=" text-center w-2/5 py-3 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-sage-green-800 rounded-xl dark:bg-sage-green-700 hover:bg-sage-green-700 dark:hover:bg-sage-green-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">Update</Link>
                                                <button onClick={() => handleDeleteData(product._id)} className="px-2 w-2/5 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-red-800 rounded-xl dark:bg-red-700 hover:bg-red-700 dark:hover:bg-red-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">Detele</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </section>
                        </div>
                        // <div key={idx} className="flex flex-col overflow-hidden bg-sage-green-100 rounded-lg shadow-lg dark:bg-gray-800">
                        //     <div className="w-full min-h-60 flex justify-center items-center">
                        //         <div className='px-5'>
                        //         <img className='w-full h-52 rounded-lg object-cover mx-auto' src={product.imageURL} alt="" />
                        //         </div>
                        //     </div>
                        //     <div className="w-full p-4 md:p-7">
                        //         <h1 className="text-xl font-bold text-gray-800 dark:text-white">{product.product_name}</h1>
                        //         <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{product.short_description}</p>
                        //         <div className="flex mt-2 gap-5 item-center">
                        //             <p className='flex items-center gap-2'>Rating: <span>{product.rating}</span><FaStar /></p>
                        //             <h1 className="text-gray-700 dark:text-gray-200 md:text-xl">Cutomization: {product.customization}</h1>
                        //             <h1 className="text-gray-700 dark:text-gray-200 md:text-xl">Stock: {product.stockStatus}</h1>
                        //         </div>
                        //         <div className="flex justify-between mt-3 item-center">
                        //             <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">${product.price}</h1>

                        //         </div>
                        //         <div className='flex justify-between mt-5'>
                        //             <Link to={`/updateItem/${product._id}`} className=" text-center w-2/5 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-sage-green-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">Update</Link>
                        //             <button onClick={() => handleDeleteData(product._id)} className="px-2 w-2/5 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-amber-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">Detele</button>
                        //         </div>
                        //     </div>
                        // </div>
                    )
                }
            </div>

        </div>
    );
};

export default MyPotteryItems;