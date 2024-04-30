import { useEffect, useState } from "react";
import { BiCategory } from "react-icons/bi";
import { FaStar } from "react-icons/fa6";
import { FcViewDetails } from "react-icons/fc";
import { LuBox } from "react-icons/lu";
import { Link } from "react-router-dom";

const DisplayProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://b9a10-clay-nest-server.vercel.app/craftItems')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    console.log(products)
    return (
        <div className='w-11/12 container mx-auto mt-10 mb-20'>
            <h2 className='text-center text-2xl md:text-4xl font-semibold pb-2 md:col-span-2 lg:col-span-3 lg:text-right text-sage-green-900 dark:text-white'>Our Products</h2>
            <p className='text-center  md:col-span-2 lg:col-span-3 pb-10 lg:pl-96 lg:text-right text-gray-600 dark:text-gray-300'>Explore Artisanal Elegance Discover the charm of handcrafted pottery with our exclusive collection at ClayNest Inc. From the earthy allure of terra cotta to the refined grace of porcelain, each piece is a testament to the timeless art of ceramics.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    products.slice(0, 6).map((product, idx) =>
                    <div key={idx}>
                    <section className="">
                            <div className="rounded-xl bg-white dark:bg-white/5 p-5 shadow-lg hover:shadow-xl">
                              <div href="#">
                                <div className="relative flex items-end justify-center h-40 lg:h-52 overflow-hidden rounded-xl ">
                                  <img src={product.imageURL} className='w-full h-52 rounded-2xl object-cover mx-auto'  alt="Product Photo" />
                                  <div className="absolute bottom-3 left-3 inline-flex items-start rounded-lg bg-white dark:bg-sage-green-700 p-2 shadow-md">
                                    <FaStar className="text-yellow-600 dark:text-yellow-400"/>
                                    <span className="text-slate-400 ml-1 text-sm dark:text-gray-200">{product.rating}.0</span>
                                  </div>
                                </div>
                                <div className="mt-1 p-2">
                                  <h2 className="text-slate-700 text-xl dark:text-white">{product.product_name}</h2>
                                  <p className="text-slate-400 mt-1 truncate">{product.short_description}</p>
                                  <div className='flex gap-5 text-base'>
                                                
                                            <p className="text-slate-900 flex items-center gap-2  mt-1"><BiCategory/><span>{product.subcategory_Name}</span></p>
                                            <p className="text-slate-900 flex items-center gap-2  mt-1"><LuBox/><span>{product.stockStatus}</span></p>
                                            </div>
                                  <div className="mt-3 flex items-end justify-between">
                                    <p>
                                      <span className="text-lg font-bold text-blue-500 dark:text-blue-500">${product.price}</span>
                                      <span className="text-slate-400 text-sm"> only!</span>
                                    </p>
                    
                                    <Link to={`/itemDetails/${product._id}`} className="group inline-flex gap-2 rounded-xl bg-blue-100 dark:bg-blue-900 px-4 py-2 hover:bg-blue-200 dark:hover:bg-blue-800">
                                      <FcViewDetails className="text-2xl"/>
                                      <span className="font-medium font-titillium text-base text-blue-800 dark:text-blue-200">Details</span>
                                    </Link>
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

export default DisplayProducts;