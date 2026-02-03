import React from 'react';
import Rightcard from './Rightcard';

const Rightcontent = (props) => {
    return (
        <div  className='h-full overflow-x-auto w-2/3 flex flex-nowrap gap-10 p-6 rounded-4xl no-scrollbar '>
{props.users.map(function(elem ,idx){
  return <Rightcard color={elem.color} key={idx} id={idx} img= {elem.img} tag={elem.tag}/>;
})}
        </div>

    )
}

export default Rightcontent;
