import { useLoaderData } from 'react-router-dom';

const ItemDetails = () => {
    const data = useLoaderData()
    console.log(data)
    const { product_name, short_description, subcaregory_Name, customization, processing_time, stockStatus, price, rating, user_name, user_email, imageURL } = data;

    return (
        <div className='w-11/12 mx-auto container my-10'>
            <div className='border rounded-xl p-5 shadow-lg flex flex-col md:flex-row justify-center md:justify-around items-center bg-ocean-blue-200/10'>
            <img src={imageURL} className='w-80' alt="" />
            <div className='text-center'>
            <p className='text-xl border-b pb-1 mb-2'><span className='bg-terra-cotta-200 px-3 py-1 rounded-full'>{subcaregory_Name}</span></p>
            <p className='text-4xl font-titillium '>{product_name}</p>
            <p className='text-xl font-titillium '>{short_description}</p>
            <p className='text-xl font-titillium '>Customization: {customization}</p>
            <p className='text-xl font-titillium '>Price: {price}$</p>
            <p className='text-xl font-titillium '>Rating: {rating}</p>
            <p className='text-xl font-titillium '>Processing Time: {processing_time}</p>
            <p className='text-xl font-titillium '>Stock: {stockStatus}</p>
            <p className='text-xl font-titillium '>Added by: {user_name}</p>
            <p className='text-xl font-titillium '>Added by: {user_email}</p>
            </div>
            </div>
        </div>
    );
};

export default ItemDetails;