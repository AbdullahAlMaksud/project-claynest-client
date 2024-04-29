import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({categories}) => {
    const handleCategory = e => {
        console.log(e)
    }
    return (
        <div>
            <div className='w-11/12 mx-auto container my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                <h2 className='text-center text-2xl md:text-4xl font-bold md:col-span-2 lg:col-span-3 lg:text-left'>Category</h2>
                <p className='text-center text-sm md:text-xl md:col-span-2 lg:col-span-3 pb-10 lg:w-3/4 lg:text-left'>Discover artisanal pottery in various styles, from traditional clay-made pieces to contemporary home decor pottery. Explore our curated collection for timeless designs that add character to any space.</p>
                {
                    categories.map((category, idx) => <Link to={`/productsCategory/${category.subcaregory_Name}`} key={idx} className='bg-sage-green-100 rounded-lg shadow-md hover:cursor-pointer'>
                        <div className='h-32 rounded flex items-end justify-center my-5 mx-5'>
                            <img src={category.image} className='w-32' alt="" />
                        </div>
                        <p className='text-2xl text-center font-titillium'>{category.subcaregory_Name}</p>
                        <p className='px-6 text-center truncate pb-8'>{category.key_elements}</p>
                    </Link>)

                }
            </div>
        </div>
    );
};

export default Category;