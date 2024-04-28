import { Link, useLoaderData } from "react-router-dom";


const AllPotteryItems = () => {
    const allData = useLoaderData();

    return (
        <div>
            <section className="container px-4 mx-auto">
                <div className="flex flex-col my-10">
                    <h2 className="text-3xl text-center pb-10 font-semibold font-titillium text-sage-green-800">All Ceramic & Pottey Item</h2>
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead className="bg-gray-50 dark:bg-gray-800">
                                        <tr>
                                            <th scope="col" className="py-3.5 pl-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                <div className="flex items-center gap-x-0">
                                                    <span>No</span>
                                                </div>
                                            </th>
                                            <th scope="col" className="py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                <div className="flex items-center gap-x-0">
                                                    <span>Photo</span>
                                                </div>
                                            </th>

                                            <th scope="col" className="py-3.5 pr-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                <div className="flex items-center gap-x-3">
                                                    <span>Name</span>
                                                </div>
                                            </th>
                                            <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                <button className="flex items-center gap-x-2">
                                                    <span>Status</span>

                                                </button>
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Added By</th>
                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400 flex justify-center">View Details</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                        {
                                            allData.map((singleData, idx) => <tr key={idx}>
                                                <td className="pl-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                    {idx + 1}
                                                </td>
                                                <td className=" py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                    <img src={singleData.imageURL} className="w-5" alt="" />
                                                </td>

                                                <td className="pr-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                    {singleData.product_name}
                                                </td>
                                                <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                    {singleData.stockStatus}
                                                </td>
                                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                    {singleData.user_email}
                                                </td>
                                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap flex justify-center">
                                                    <Link>
                                                        <button className="bg-sage-green-700 text-white px-3 rounded-full hover:bg-sage-green-600"> Details</button>
                                                    </Link>
                                                </td>

                                            </tr>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AllPotteryItems;