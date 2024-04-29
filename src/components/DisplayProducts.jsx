import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DisplayProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/craftItems')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    // const sixProducts = []
    // const randomizeProducts = (products) => {
    //     for (let i = products.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random()*(i+1));
    //         [products[i], products[j]] = [products[j],products[i]];
    //     }
    //     return products;
    // }

    // const onlySixData = (products) =>{
    //     const newProd = randomizeProducts([...products]);
    //     return newProd.slice(0,6);
    // }

    // const randomSixProducts = onlySixData(sixProducts);

    console.log(products)
    return (
        <div className='w-11/12 container mx-auto my-20'>
            <h2 className='text-center text-2xl md:text-4xl font-bold md:col-span-2 lg:col-span-3 lg:text-right'>Our Items</h2>
            <p className='text-center text-sm md:text-xl md:col-span-2 lg:col-span-3 pb-10 lg:pl-96 lg:text-right'>Discover artisanal pottery in various styles, from traditional clay-made pieces to contemporary home decor pottery. Explore our curated collection for timeless designs that add character to any space.</p>
            <div className='grid lg:grid-cols-3 gap-2'>
                {
                    products.slice(0, 6).map((product, idx) =>

                        <div key={idx} className=" overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                            <div className="px-6 py-4">
                                <h1 className="text-xl font-bold text-gray-800 dark:text-white">{product.product_name}</h1>
                                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{product.short_description}</p>
                            </div>

                            <img className="object-contain w-full h-48 mt-2" src={product.imageURL} alt="NIKE AIR" />

                            <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                                <h1 className="text-lg font-bold text-white">${product.price}</h1>
                                <Link to={`/itemDetails/${product._id}`} className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">View Details</Link>
                            </div>
                        </div>

                    )

                }
            </div>
        </div>
    );
};

export default DisplayProducts;