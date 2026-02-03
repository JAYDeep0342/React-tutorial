import React from 'react'

const RightcardContent = (props) => {
   
  return (
    <div className=' absolute top-0 left-0 h-full w-full p-10 flex flex-col justify-between  '> 
 <h2 className='bg-white rounded-full h-12 w-12 font-semibold flex justify-center items-center text-xl text-black'>{props.id+1}</h2>
 <div   >
    <p className='text-white text-lg mb-6 '>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum qui perspiciatis reiciendis. Dignissimos, fuga eos.
    </p>
 
    <div className='flex justify-between'>
        <button style={{backgroundColor:props.color  }} className=' text-white font-bold px-8 py-3 rounded-full '>{props.tag}</button>
        <button  classNme=' text-white font-bold px-4 py-3 rounded-full '><i className="ri-arrow-right-line"></i></button>
    </div>
    </div>
</div>
  )
}

export default RightcardContent