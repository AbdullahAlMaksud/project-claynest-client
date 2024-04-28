import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdatePotteryItems = () => {
    const data = useLoaderData()
    console.log(data)
    const { _id, product_name, short_description, subcaregory_Name, customization, processing_time, stockStatus, price, rating, user_name, user_email, imageURL } = data;

    const handleUpdateData = e => {
        e.preventDefault();

        const form = e.target;
        const product_name = form.name.value;
        const short_description = form.description.value;
        const subcaregory_Name = form.category.value;
        const customization = form.customization.value;
        const processing_time = form.processing_time.value;
        const stockStatus = form.stock.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const user_name = form.user_name.value;
        const user_email = form.user_email.value;
        const imageURL = form.photoURL.value;
        const updateItemData = { product_name, short_description, subcaregory_Name, customization, processing_time, stockStatus, price, rating, user_name, user_email, imageURL }
        console.log(updateItemData)

        fetch(`http://localhost:5000/craftItems/${_id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updateItemData),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    Swal.fire({
                        title: "Updated!",
                        text: "Your data has been updated!",
                        icon: "success"
                    });
                }
            })
    }
    return (
        <div>
            <div className='w-11/12 mx-auto container mb-10 -z-30'>
                <section className="p-8 lg:px-28 mx-auto bg-sage-green-200 rounded-b-md shadow-md dark:bg-gray-800">
                    <h2 className="text-3xl py-10 font-titillium text-center font-semibold text-gray-700 capitalize dark:text-white">Update Ceramic & Pottery Item</h2>

                    <form onSubmit={handleUpdateData}>
                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div>
                                <label className="text-gray-700 dark:text-gray-200 font-semibold">Product Name</label>
                                <input
                                    type="text" name='name' defaultValue={product_name}
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                />
                            </div>

                            <div>
                                <label className="text-gray-700 dark:text-gray-200 font-semibold">Short Description</label>
                                <input
                                    type="text" name='description' defaultValue={short_description}
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                />
                            </div>

                            <div>
                                <label className="text-gray-700 dark:text-gray-200 font-semibold">Product Category</label>
                                <select name='category' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" defaultValue={subcaregory_Name}>
                                    <option disabled value={subcaregory_Name}>{subcaregory_Name}</option>
                                    <option value={'Clay-made pottery'}>Clay-made pottery</option>
                                    <option value={'Stoneware'}>Stoneware</option>
                                    <option value={'Porcelain'}>Porcelain</option>
                                    <option value={'Terra Cotta'}>Terra Cotta</option>
                                    <option value={'Ceramics & Architectural'}>Ceramics & Architectural</option>
                                    <option value={'Home decor pottery'}>Home decor pottery</option>
                                </select>
                            </div>
                            <div>
                                <label className="text-gray-700 dark:text-gray-200 font-semibold">Customization</label>
                                <select name={'customization'} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" defaultValue={customization}>
                                    <option disabled value={customization}>{customization}</option>
                                    <option value={'Yes'}>Yes</option>
                                    <option value={'No'}>No</option>
                                </select>
                            </div>
                            <div>
                                <label className="text-gray-700 dark:text-gray-200 font-semibold">Processing Time</label>
                                <select name={'processing_time'} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" defaultValue={processing_time}>
                                    <option disabled value={processing_time}>{processing_time}</option>
                                    <option value={'1 day'}>1 day</option>
                                    <option value={'3 day'}>3 day</option>
                                    <option value={'7 day'}>7 day</option>
                                </select>
                            </div>
                            <div>
                                <label className="text-gray-700 dark:text-gray-200 font-semibold">Stock Status</label>
                                <select name='stock' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" defaultValue={stockStatus}>
                                    <option disabled value={stockStatus}>{stockStatus}</option>
                                    <option value={'In Stock'}>In Stock</option>
                                    <option value={'Made to order'}>Made to order</option>
                                </select>
                            </div>

                            <div>
                                <label className="text-gray-700 dark:text-gray-200 font-semibold">Price</label>
                                <input
                                    name='price'
                                    type="number" defaultValue={price}
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                />
                            </div>
                            <div>
                                <label className="text-gray-700 dark:text-gray-200 font-semibold">Rating</label>
                                <select name='rating' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" defaultValue={rating}>
                                    <option disabled value={rating}>{rating}</option>
                                    <option value={'1'}>1</option>
                                    <option value={'2'}>2</option>
                                    <option value={'3'}>3</option>
                                    <option value={'4'}>4</option>
                                    <option value={'5'}>5</option>

                                </select>
                            </div>
                            <div>
                                <label className="text-gray-700 dark:text-gray-200 font-semibold">User Name</label>
                                <input
                                    name='user_name'
                                    type="text" placeholder="Add products" value={user_name} disabled
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                />
                            </div>
                            <div>
                                <label className="text-gray-700 dark:text-gray-200 font-semibold">User Email</label>
                                <input
                                    name='user_email'
                                    type="text" value={user_email} disabled placeholder="Add products"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                />
                            </div>
                            <div className='md:col-span-2'>
                                <label className="text-gray-700 dark:text-gray-200 font-semibold">Product Photo URL</label>
                                <input
                                    name='photoURL'
                                    type="text" defaultValue={imageURL}
                                    className="block  w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                />
                            </div>
                        </div>

                        <div className="flex justify-end mt-6">
                            <input type="submit" value="Update Products" className="px-8 w-full py-2.5 leading-5 text-white transition-colors duration-300 transform bg-terra-cotta-900 rounded-md hover:bg-terra-cotta-800 focus:outline-none focus:bg-terra-cotta-800 hover:cursor-pointer" />
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default UpdatePotteryItems;