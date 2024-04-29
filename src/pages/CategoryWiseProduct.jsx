import { useLoaderData } from 'react-router-dom';

const CategoryWiseProduct = () => {
    const products = useLoaderData();
    console.log(products)

    return (
        <div>
            <div className='w-11/12 mx-auto container my-10'>
                {
                    products.map((product, idx) => <div key={idx} className='border rounded-xl p-5 shadow-lg flex flex-col md:flex-row justify-center md:justify-around items-center bg-ocean-blue-200/10'>
                        <img src={product.imageURL} className='w-80' alt="" />
                        <div className='text-center'>
                            <p className='text-xl border-b pb-1 mb-2'><span className='bg-terra-cotta-200 px-3 py-1 rounded-full'>{product.subcategory_Name}</span></p>
                            <p className='text-4xl font-titillium '>{product.product_name}</p>
                            <p className='text-xl font-titillium '>{product.short_description}</p>
                            <p className='text-xl font-titillium '>Customization: {product.customization}</p>
                            <p className='text-xl font-titillium '>Price: {product.price}$</p>
                            <p className='text-xl font-titillium '>Rating: {product.rating}</p>
                            <p className='text-xl font-titillium '>Processing Time: {product.processing_time}</p>
                            <p className='text-xl font-titillium '>Stock: {product.stockStatus}</p>
                            <p className='text-xl font-titillium '>Added by: {product.user_name}</p>
                            <p className='text-xl font-titillium '>Added by: {product.user_email}</p>
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default CategoryWiseProduct;