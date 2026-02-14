import React from 'react';
import { useParams } from 'react-router-dom';

const Coursesdetails = () => {
    const param=useParams()
    return (
        <div><h1>
            {param.id} Coursesdetails
            
           </h1>
            </div>
    )
}

export default Coursesdetails;
