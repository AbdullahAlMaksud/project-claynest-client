import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { FaStar } from 'react-icons/fa6';
import { IoIosArrowDown } from 'react-icons/io';
import Swal from 'sweetalert2';
import { FcViewDetails } from 'react-icons/fc';
import { BiCategory } from 'react-icons/bi';
import { LuBox } from 'react-icons/lu';
import { Helmet } from 'react-helmet-async';

const MyPotteryItems = () => {
    const { user } = useContext(AuthContext);
    const [item, setItem] = useState([]);

    const [displayItem, setDisplayItem] = useState([])
    const [filterBy, setFilterBy] = useState('');

    useEffect(() => {
        fetch(`https://b9a10-clay-nest-server.vercel.app/craftItemsByEmail/${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                setItem(data);
                setDisplayItem(data);
                console.log(data);
            })
            .catch(error => console.error('Error is', error));
    }, [user])

    useEffect(() => {
        // Filter items based on the selected subcategory
        if (filterBy === '') {
            setDisplayItem(item); // No filter applied, show all items
        } else {
            const filteredItems = item.filter(product => product.subcategory_Name === filterBy);
            setDisplayItem(filteredItems);
        }
    }, [filterBy, item]);

    const handleFilterChange = (e) => {
        setFilterBy(e.target.value);
    };


    console.log('Item data', item)
    setDisplayItem[item]
    console.log('DisplayItem data', item)



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
                    fetch(`https://b9a10-clay-nest-server.vercel.app/craftItems/${_id}`, {
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

    return (
        <div className='w-11/12 container mx-auto my-10'>
            <Helmet>
                <title>
                    My Items - ClayNest | Where Every Piece Finds Its Perfect Nest
                </title>
            </Helmet>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {/* Filter Button */}
                <div className='lg:col-span-3 md:col-span-2 mb-3'>
                    <div className="flex justify-end mt-5">

                        <div>
                            <select className='bg-sage-green-700 text-white px-3 text-xl py-3 rounded-md' value={filterBy} onChange={handleFilterChange}>
                                <option value="">All</option>
                                <option value="Clay-made pottery">Clay-made pottery</option>
                                <option value="Stoneware">Stoneware</option>
                                <option value="Porcelain">Porcelain</option>
                                <option value="Terra Cotta">Terra Cotta</option>
                                <option value="Ceramics & Architectural">Ceramics & Architectural</option>
                                <option value="Home decor pottery">Home decor pottery</option>
                            </select>
                        </div>
                    </div>
                </div>
                {
                    displayItem.map((product, idx) =>
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
                                            <div className='flex gap-5 text-base'>

                                                <p className="text-slate-900 flex items-center gap-2  mt-1"><BiCategory /><span>{product.subcategory_Name}</span></p>
                                                <p className="text-slate-900 flex items-center gap-2  mt-1"><LuBox /><span>{product.stockStatus}</span></p>
                                            </div>

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
                    )
                }
            </div>
        </div>
    );
};

export default MyPotteryItems;