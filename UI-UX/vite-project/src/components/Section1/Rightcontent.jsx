import React from 'react';
import Rightcard from './Rightcard';

const Rightcontent = () => {
    return (
        <div  className='h-full overflow-x-auto w-2/3 flex flex-nowrap gap-10 p-6 rounded-4xl'>
        <Rightcard/>
        <Rightcard/>
        <Rightcard/>
        </div>

    )
}

export default Rightcontent;
