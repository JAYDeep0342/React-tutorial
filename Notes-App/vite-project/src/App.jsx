import React from 'react'

const submitHandler = (e) => {  
  e.preventDefault()
  console.log("Form submitted")

}
const App = () => {
  return (
    <div className='h-screen  bg-black text-white lg:flex '>
 <form onSubmit={(e) => submitHandler(e)}
 className='flex items-start lg:w-1/2  flex-col gap-4   p-10'>
  <h1 className=' font-bold  text-4xl'>Add Notes
</h1> 
    <input type="text"
   placeholder='Enter Notes Heading'
   className='p-5 w-full border-2 rounded-2xl outline-none'
   />
<textarea 
placeholder='Enter Notes Description' 
className=' border-2 outline-none px-5 py-2 h-32 flex items-start flex-row  w-full rounded-2xl'
/>
<button className='bg-gray-400 w-full outline-none rounded-2xl text-black font-bold px-5 py-2'>
Add Notes
</button> 

 </form>
<div className=' lg:w1/2 lg:border-l-2 p-10'> 
<h1 className=' font-bold  text-4xl'>Recent Notes
</h1>
<div className='flex gap-5 mt-5 flex-wrap h-full overflow-auto'>
  <div className=' h-52 w-40 rounded-2xl bg-white'></div>
    <div className=' h-52 w-40 rounded-2xl bg-white'></div>

</div>
</div>
    </div>
  )
}

export default App
