import React, { use } from 'react'
import { useState } from 'react'  
import { X } from "lucide-react";

const App = () => {

  const[tittle, setTittle] = useState('')
  const[description, setDescription] = useState('')
const[tasks, setTasks] = useState([])

  const submitHandler = (e) => {  
  e.preventDefault()
  const copyTasks = [...tasks]
copyTasks.push({tittle, description})
setTasks(copyTasks)
  console.log({tittle},{description})
    setTittle('')
     setDescription('')

  
}
 const deleteNote = (index) => {
    const copyTasks = [...tasks];

    copyTasks.splice(index, 1)

    setTasks(copyTasks)
  }




  return (



    <div className='h-screen  bg-black text-white lg:flex '>
 <form onSubmit={(e) => submitHandler(e)} 
 className='flex items-start lg:w-1/2  flex-col gap-4   p-10'>
  
  <h1 className=' font-bold  text-4xl'>Add Notes</h1> 

    <input type="text"
   placeholder='Enter Notes Heading'
   className='p-5 w-full border-2 rounded-2xl outline-none'
   value={tittle}
    onChange={(e) => setTittle(e.target.value)}
   />

<textarea 
placeholder='Enter Notes Description' 
className=' border-2 outline-none px-5 py-2 h-32 flex items-start flex-row  w-full rounded-2xl'
value={description}
onChange={(e)=>
setDescription(e.target.value)
}

/>

<button className='bg-gray-400 w-full outline-none rounded-2xl  text-black font-bold px-5 py-2 active:bg-green-400'>
Add Notes
</button> 

 </form>
<div className=' lg:w1/2 lg:border-l-2 p-10'> 
<h1 className=' font-bold  text-4xl'>Recent Notes
</h1>
<div className='flex gap-5 mt-5 flex-wrap items-start  justify-between h-[95%] overflow-auto'>
{tasks.map(function(elem, index){
  return <div key={index} className=' h-52  w-42   items-start bg-cover  flex justify-betweenw flex-col rounded-2xl text-black pt-9 pb-4 px-7 bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")]'>
<div>
      <h3 className='leading-tight text-3xl font-bold'>{elem.tittle}</h3>
    <p className='leading-tight font-medium text-gray-500 mt-4'>{elem.description}</p>
</div>
<button onClick={() => {deleteNote(index) }} className=' w-full bg-red-600 cursor-pointer active:scale-95 text-white py-2 rounded text-xs mt-7 font-bold '> delete note</button>
  </div>

})}
</div>
</div>
    </div>
  )
}

export default App
