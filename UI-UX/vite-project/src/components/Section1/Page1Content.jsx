import React from 'react';
import Leftcontent from './Leftcontent';
import Rightcontent from './Rightcontent';

const Page1Content = (props) => {

    return (
        <div className=' pb-16 pt-6 h-[90vh]  flex gap-10 items-center px-18'>
            <Leftcontent/>
            <Rightcontent users={props.users}/>
        </div>
    )
}

export default Page1Content;
