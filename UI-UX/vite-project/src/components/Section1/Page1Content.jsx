import React from 'react';
import Leftcontent from './Leftcontent';
import Rightcontent from './Rightcontent';

const Page1Content = () => {
    return (
        <div className=' py-10 h-[90vh]  flex gap-10 items-center px-18'>
            <Leftcontent/>
            <Rightcontent/>
        </div>
    )
}

export default Page1Content;
