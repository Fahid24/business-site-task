import React from 'react';
import { GrAssistListening } from "@react-icons/gr";


const Product = ({ product }) => {

    return (
        <div className="card w-96 bg-white shadow-xl">
            <figure><img src={product.img} alt={product.type} /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    <GrAssistListening /><div className="badge badge-secondary">{product.type}</div>
                </h2>
                <p className='card-title'>{product.describe}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default Product;