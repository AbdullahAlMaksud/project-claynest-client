import React, { useState } from 'react';
import Banner from '../components/Banner';
import { useLoaderData } from 'react-router-dom';
import DisplayProducts from '../components/DisplayProducts';

const Home = () => {
    const categories = useLoaderData()


    const handleCategory = e => {
        console.log(e)
    }
    return (
        <div>
            <Banner />

            <div className='w-11/12 mx-auto container my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                <h2 className='text-center text-2xl md:text-4xl font-bold md:col-span-2 lg:col-span-3 lg:text-right'>Category</h2>
                <p className='text-center text-sm md:text-xl md:col-span-2 lg:col-span-3 pb-10 lg:pl-96 lg:text-right'>Discover artisanal pottery in various styles, from traditional clay-made pieces to contemporary home decor pottery. Explore our curated collection for timeless designs that add character to any space.</p>
                {
                    categories.map((category, idx) => <div onClick={()=>handleCategory(category.subcaregory_Name)} key={idx} className='bg-sage-green-100 rounded-lg shadow-md hover:cursor-pointer'>
                        <div className='h-32 rounded flex items-end justify-center my-5 mx-5'>
                            <img src={category.image} className='w-32' alt="" />
                        </div>
                        <p className='text-2xl text-center font-titillium'>{category.subcaregory_Name}</p>
                        <p className='px-6 text-center truncate pb-8'>{category.key_elements}</p>
                    </div>)

                }
            </div>
            <DisplayProducts/>
        </div>
    )
};

export default Home;