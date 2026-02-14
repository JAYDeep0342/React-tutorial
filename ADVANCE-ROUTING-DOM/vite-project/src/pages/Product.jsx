import React from 'react';
import { Link, Outlet } from 'react-router-dom'
const Product = () => {
    return (
        <div>
            <div className='flex justify-center gap-10 py-8  text-3xl font-bold'>
                <Link to = '/product/men'>MEN </Link>

                <Link to ='/product/Woman'>Woman </Link>
                <Link to ='/product/kids'>Kids </Link>

            </div>
            <Outlet/>
            <h2 className=' py-5  flex justify-between'>product</h2>
            
            </div>
    )
}

export default Product;
