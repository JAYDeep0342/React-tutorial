// import React from 'react'

// const App = () => {
//   async function fetchdata(){
//    const user=  await fetch('https://jsonplaceholder.typicode.com/todos/1')
//    const data = await user.json()
//    console.log(data);

//   }
//   return (
//     <div>
//      <button onClick={fetchdata}>Fetch Data</button>
//     </div>
//   )
// }

// export default App
// import React from 'react'
// import axios from 'axios'
// const App = () => {
//  const getdata =async ()=>{
//   const Response=await axios.get('https://jsonplaceholder.typicode.com/todos/1')  
//   console.log(Response);

//  }
//   return (
//     <div>
//      <button onClick={getdata}>Fetch Data</button>
//     </div>
//   )
// }

// export default App
import axios from 'axios'
import { useState } from 'react'

const App = () => {
    const [data, setData] = useState([])

 const getdata = async ()=>{
  const res= await axios.get('https://picsum.photos/v2/list')
 setData(res.data)

 }
  return (
    <div>
     <button onClick={getdata}>Fetch Data</button>
     <div>
      {data.map(function(elem,index){
        return(
          <div key={index}>
            <h1> {elem.id} :{elem.author}</h1>
          </div>
        )
      })}
     </div>
    </div>
  )
}

export default App


