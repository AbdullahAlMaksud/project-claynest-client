import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ItemDetails = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            <img src={data.imageURL
} alt="" />
        </div>
    );
};

export default ItemDetails;