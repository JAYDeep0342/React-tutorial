import React, { use, useEffect } from 'react'
import axios from 'axios' 
import {useState } from 'react'
import Card from './components/Card'


const App = () => {
    const [userdata, setUserdata] = React.useState([])
    const[index,setIndex]=useState(1)

 const getdata = async () =>{
 const response =  await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=18`)
 setUserdata(response.data)
  }
  useEffect(function(){
    getdata()
   },[index])


    let printUserData= <h3 className='text-gray-300 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>Loading...</h3>


  if(userdata.length>0){
    printUserData = userdata.map(function(elem,idx){
      return(<div key ={ idx}> 
       <Card elem={elem} /> 

 </div>
      )
    })
  }
  return (
    <div className='bg-black  overflow-auto h-screen p-4 text-white'>

     
    <div className=' flex flex-wrap gap-5 justify-center'>
      {printUserData}
    </div>
    <div className='items-center flex gap-6  justify-center p-4'>
      <button onClick={()=>{
        if(index>1){

           setIndex(index-1)
           setUserdata([])
        }
      }} className='bg-amber-400 cursor-pointer active:scale-95 text-sm font-semibold text-black rounded px-4 py-2'>prev</button>
      <h4>Page {index}</h4>
      <button onClick ={()=>{
      setUserdata([])
      setIndex(index+1)
      }}className='bg-amber-400 cursor-pointer active:scale-95 text-sm font-semibold text-black rounded px-4 py-2'>next</button>
    </div>
    </div>
  )
}

export default App
