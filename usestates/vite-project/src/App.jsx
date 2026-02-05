// import React, { useState } from 'react'
// const App = () => {
// const [num,setNum]=useState(12)
// const[name,setName]=useState("sachin")



//  function changeNum(){
//    setNum(100)
//    setName("rahul")
//  }
//   return (
//     <div>
//       <h1>App Component is{num}</h1>
//       <h1>App Component is {name}</h1>
//       <button onClick={changeNum} >Change</button>
//     </div>
//   )
// }

// export default App
import React, { useState } from 'react'

const App = () => {
let [count,setCount]=useState(0)
function decrease(){
  setCount(count-1)
}
function increase(){
  setCount(count+1) 
}
function jump5(){
  setCount(count+5)
  
}
  return (
    <div>
      <h1>{count}</h1>  
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={jump5}>+5</button>
   
    </div>
  )
}

export default App
