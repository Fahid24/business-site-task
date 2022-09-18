import React from 'react';
import Product from '../../Components/Share/Button/Product/Product';
import products from '../../Datas/ProductsData'

const Products = () => {
    return (
        <>
            <h1 className='text-5xl text-center font-bold'>Social media management <br /> solutions built for scale</h1>
            <div className='grid grid-cols-3 px-20 my-20 gap-10'>
                {
                    products.map(product => (
                        <Product
                            key={product.id}
                            product={product}
                        >

                        </Product>
                    ))
                }
            </div>
        </>
    );
};

export default Products;