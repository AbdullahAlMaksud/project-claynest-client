import { useEffect, useState } from 'react';

const DisplayProducts = () => {
    const [products, setProducts] = useState();

    useEffect(() => {
        fetch('http://localhost:5000/craftItems')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    console.log(products)
    return (
        <div className='w-11/12 container mx-auto my-20'>
            <div className='flex items-center'>
                {
                    products.map((product, idx) => <div key={idx} className=''>

                        <img src={product.imageURL} className='w-40' alt="" />

                    </div>)

                }
            </div>
        </div>
    );
};

export default DisplayProducts;